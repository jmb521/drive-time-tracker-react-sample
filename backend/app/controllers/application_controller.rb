require 'httparty'
require 'json'
class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception
    include HTTParty


    def authenticate_user(token)
        url = "https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=#{token}"  
        response = HTTParty.get(url)
        
        User.from_omniauth(response)
    end
    

    def current_user
        @user ||= User.find_by(id: session[:user_id])

    end

    def logged_in?
        !!current_user
    end
    
    
    
end
