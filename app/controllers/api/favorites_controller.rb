module Api
  class FavoritesController < ApplicationController

    def index
      # favorites = Favorite.includes(:user, :product).order('updated_at desc')
      favorites = Favorite.all
      render json: favorites
    end

    def create
      if current_user
        favorite = Favorite.create(favorite_params)
        favorite.user = current_user
        if favorite.save
          render json: favorite
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
        render status: 200
      else
        render status: 400
      end
    end

  private

    def favorite_params
      params.permit(:user_id, :product_id)
    end

  end

end
