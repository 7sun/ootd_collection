module Api
  class SessionsController < ApplicationController

    def create
      user = User.find_by(email: params[:user][:email])
      if user && user.authenticate(params[:user][:password])
        session[:user_id] = user.id
        render json: user, only: [:id, :email]  
      else
        render json: {error: "Username or password is incorrect"}
      end
    end

    def destroy
      session[:user_id] = nil
      render json: nil, status: 200
    end

  end
end