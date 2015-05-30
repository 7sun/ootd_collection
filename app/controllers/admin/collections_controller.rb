module Admin
  class CollectionsController < ApplicationController
    before_action :require_admin
    
    def index
      @collections = Collection.all
    end

    def new
      @collection = Collection.new
    end

    def create
      @collection = Collection.new(require(:collection).permit(:name))
      if @collection.save
        redirect_to admin_collection_path
      else
        render :new
      end
    end

  end
end