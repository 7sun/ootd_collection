module Api
  class ProductsController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      products = Product.all
      render json: products
    end

    def show
      product = Product.find(params[:id])
      render json: product
    end

    def create
      product = Product.new(product_params)
      if product.save
        render json: product
      else
        render json: {errors: product.errors}, status: 422
      end
    end

    def update
      product = Product.find(params[:id])
      if product.update(product_params)
        render json: product
      else
        render json: {errors: product.errors}, status: 422
      end
    end

    def destroy
      product = Product.find(params[:id])
      if product.destroy
        render status: 200
      else
        render status: 400
      end
    end



    private

      def product_params
        params.require(:product).permit(:collection_id, :category, :style_num, :style, :color, :materials, :description, images_attributes: [:id, :source, :description])

  end
end