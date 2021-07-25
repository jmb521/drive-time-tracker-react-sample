
class SessionsController < ApplicationController
    
    protect_from_forgery prepend: true
    skip_before_action :verify_authenticity_token, only: :create
    def authorize
       user = authenticate_user(params["tokenId"])
       
       if user
        session[:user_id] = user.id
        render json: user
       end
        
    end

    def destroy
        session.destroy
        render json: "user logged out successfully"
    end

    def verify_logged_in
        if logged_in?
            render json: current_user
        else 
            render json: {error: "User is not logged in"}
        end
    end



    
    private
    
    
  
end
