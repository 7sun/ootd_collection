class ProductsController < ApplicationController

  skip_before_action :require_admin, only: [:index, :show]

  def index
    @products = Product.all
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.valid?
      if @product.save
        redirect_to products_path
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
      redirect_to products_path
    else
      render :edit
    end
  end

  def destroy
    @product = Product.find(params[:id])
    # Need to add confirm dialog in markup: http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html
    @product.destroy
    redirect_to products_path
  end

  def product_params
    params.require(:product).permit(:collection, :category, :style_num, :style, :color, :materials, :description)
  end

end
