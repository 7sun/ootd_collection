module Api
  class ProductsController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      results = params[:results].to_i;
      start = params[:start].to_i;
      if results > 0
        products = Product.limit(results).offset(start)
      else
        products = Product.all
      end
      render json: products
      # if current_user
      #   favorites = current_user.favorites.includes(:product)
      #   render json: favorites, include: :product
      # else
      #   render json: {}
      # end
    end

    def show
      product = Product.find(params[:id])
      # favorited_users = product.favorited_users
      render json: product
    end

    private

      def product_params
        params.require(:product).permit(:collection_id, :category, :style_num, :style, :color, :materials, :description, images_attributes: [:id, :source, :description])
      end

  end
end

