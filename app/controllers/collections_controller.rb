class CollectionsController < ApplicationController

  def index
    collection = Collection.find_by(current: true)
    @products = Product.where(collection_id: collection.id)
  end



end