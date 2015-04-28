module Api
  class StockistsController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      stockists = Stockist.all
      render json: stockists
    end

    private

    def stockist_params
      params.require(:stockist).permit(:name, :url)
    end

  end

end