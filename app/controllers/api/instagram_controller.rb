module Api
  class InstagramController < ApplicationController

    def index
      client_id = ENV["INSTA_ID"]
      url = "https://api.instagram.com/v1/users/ootd.collection/media/recent/?client_id=#{client_id}"
      # url = "https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=#{client_id}"
      resp = HTTParty.get(url).parsed_response;
      render json: resp
    end


  end
end