module Admin
  class ProductsController < ApplicationController
    before_action :require_admin

    def index
      @products = Product.all
    end

    def new
      @product = Product.new
      # Builds three image inputs on new product page
      3.times do
        @product.images.build
      end
    end

    def create
      @product = Product.new(product_params)
      if @product.valid?
        if @product.save
          redirect_to admin_products_path
        end
      else
        render :new
      end
    end

    def show
      @product = Product.find(params[:id])
    end

    def edit
      @product = Product.find(params[:id])
    end

    def update
      @product = Product.find(params[:id])
      if @product.update(product_params)
        redirect_to admin_products_path
      else
        render :edit
      end
    end

    def destroy
      @product = Product.find(params[:id])
      # Need to add confirm dialog in markup: http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html
      @product.destroy
      redirect_to admin_products_path
    end


    private

    def product_params
      params.require(:product).permit(:collection_id, :category, :style_num, :style, :color, :materials, :description, images_attributes: [:id, :source, :description])
    end


  end
end
