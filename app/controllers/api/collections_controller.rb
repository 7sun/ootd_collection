module Api
  class CollectionsController < ApplicationController
    protect_from_forgery with: :null_session

    def current
      collection = Collection.find_by(current: true)
      products = Product.where(collection_id: collection.id)
      render json: products
    end

  end
end