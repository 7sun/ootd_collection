module Api
  class FavoritesController < ApplicationController

    def index
      if current_user
        user_favorites = current_user.favorites.includes(:product).order('updated_at desc')
        fav_products = []
        user_favorites.each do |f|
          fav_products << f.product
        end
        # render json: user_favorites, include: :product
        render json: fav_products
      else
        render json: {}
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
