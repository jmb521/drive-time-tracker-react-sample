Rails.application.config.middleware.use OmniAuth::Builder do
    # OmniAuth.config.allowed_request_methods = [:post, :get]

    provider :google_oauth2, ENV['CLIENT_ID'], ENV['CLIENT_SECRET'], {:provider_ignores_state => true}
    
  end
#   OmniAuth.config.allowed_request_methods = %i[get]