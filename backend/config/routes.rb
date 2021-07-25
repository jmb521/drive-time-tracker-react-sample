Rails.application.routes.draw do
  resources :users
  resources :trips
  resources :drivers
  get '/drivers/:id/incomplete_trips', to: "drivers#incomplete_trips"
  # post '/login', to: "sessions#create"
  # post '/auth/google_oauth2/callback', to: 'sessions#create'
  post 'auth/request', to: "sessions#authorize"
  get '/logout', to: "sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
