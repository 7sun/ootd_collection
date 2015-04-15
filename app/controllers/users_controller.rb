class UsersController < ApplicationController

  def index
    # Should only be visible to admin. Need to update.
    @users = User.all
  end
  
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      if @user.save
        session[:user_id] = @user.id.to_s
        flash[:info] = "Welcome to OOTD"
        redirect_to users_path
      end
    else
      # Need to add forget password function
      flash[:error] = "This user has already been registered. Please login instead"
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :company, :password, :password_confirmation)
  end


end