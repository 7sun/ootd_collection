module Api
  class FavoritesController < ApplicationController

    def create
      Favorite.create(favorite_params)
      # render a Javascript response instead
    end

  private

    def favorite_params
      params.permit(:user_id, :book_id)
    end
  end
end
