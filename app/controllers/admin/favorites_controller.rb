module Admin
  class FavoritesController < ApplicationController
    before_action :require_admin
    
    def index
      products = Product.all
      @sorted = products.sort_by { |p| p.favorites.count }.reverse
    end


  end
end