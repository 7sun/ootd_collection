module Api
  class FavoritesController < ApplicationController

    def index
      if current_user
        # user_favorites = Favorite.where(user: current_user)
        # user_favorites = Product.includes(:favorites)
        # user_favorites = Favorite.includes(:product).where(user: current_user)
        user_favorites = current_user.favorites.includes(:product)
        user_favorites.each do |f|
          puts f.product.style
        end
        render json: user_favorites, include: :product
      end
    end

    def create
      if current_user
        favorite = Favorite.create(favorite_params)
        favorite.user = current_user
        if favorite.valid?
          if favorite.save
            render json: favorite
          end
        else
          render json: {errors: favorite.errors}
        end
      else
        render json: {errors: ["User not logged in"]}
      end
    end

    def destroy
      favorite = Favorite.find(params[:id])
      if favorite.destroy
        render json: {status: 200}
      else
        render json: {status: 400}
      end
    end

    def show
      favorite = Favorite.find(params[:id])
      render json: favorite
    end

  private

    def favorite_params
      params.require(:favorite).permit(:user_id, :product_id)
    end

  end

end
