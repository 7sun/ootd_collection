module Api
  class UsersController < ApplicationController

    def currentuser
      render json: (current_user ? current_user : nil), except: :password_digest
    end

  end
end