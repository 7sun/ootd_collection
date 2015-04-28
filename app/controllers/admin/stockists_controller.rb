module Admin
  class StockistsController < ApplicationController

  before_action :require_admin

  def index
    @stockists = Stockist.all
  end

  def new
    @stockist = Stockist.new
  end

  def create
    @stockist = Stockist.new(stockist_params)
    if @stockist.valid?
      if @stockist.save
        redirect_to admin_stockists_path
      end
    else
      render :new
    end
  end

  def edit
    @stockist = Stockist.find(params[:id])
  end

  def update
    @stockist = Stockist.find(params[:id])
    if @stockist.update(stockist_params)
      redirect_to admin_stockists_path
    else
      render :edit
    end
  end

  def destroy
    @stockist = Stockist.find(params[:id])
    # Need to add confirm dialog in markup: http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html
    @stockist.destroy
    redirect_to admin_stockists_path
  end


  private

  def stockist_params
    params.require(:stockist).permit(:name, :url)
  end

end
end