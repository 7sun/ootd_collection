module Admin
  class PagesController < ApplicationController
    before_action :require_admin

    def index
    end
    
  end
end