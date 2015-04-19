class UsersController < ApplicationController

  before_action :require_admin

  def index
    @users = User.all
  end
  
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      if @user.save
        flash[:info] = "#{@user.fullname} added as new User"
        redirect_to users_path
      end
    else
      # Need to add flash message if user is missing fields
      flash[:error] = "This user has already been registered."
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    # Need to add confirm dialog in markup: http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html
    @user.destroy
    redirect_to root_path
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :company, :password, :password_confirmation)
  end


end