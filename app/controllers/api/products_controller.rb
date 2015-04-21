module Api
  class ProductsController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      products = Product.all
      render json: products
    end

  end
end