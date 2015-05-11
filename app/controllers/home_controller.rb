class HomeController < ApplicationController
  def index
  end

  def welcome
    render layout: 'welcome'
  end

end