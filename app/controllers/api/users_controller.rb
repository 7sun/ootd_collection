module Api
  class UsersController < ApplicationController

    def currentuser
      render json: (current_user ? current_user : false), except: :password_digest, include: :favorites
    end

  end
end