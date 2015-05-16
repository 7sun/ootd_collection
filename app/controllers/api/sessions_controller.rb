module Api
  class SessionsController < ApplicationController

    def create
      user = User.find_by(email: params[:user][:email])
      if user && user.authenticate(params[:user][:password])
        session[:user_id] = user.id
        render json: user, only: [:id, :email]  
      elsif user
        render json: {error: "Your password is incorrect"}
      else
        render json: {error: "Your email is incorrect or has not been registered. Contact info@ootdcollection.com to request an account"}
      end
    end

    def destroy
      session[:user_id] = nil
      render json: nil, status: 200
    end

  end
end