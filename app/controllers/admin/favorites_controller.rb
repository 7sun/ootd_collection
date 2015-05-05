module Admin
  class FavoritesController < ApplicationController
  
    def index
      products = Product.all
      @sorted = products.sort_by { |p| p.favorites.count }.reverse
    end


  end
end