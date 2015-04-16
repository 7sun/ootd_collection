Rails.application.routes.draw do
  resources :users
  
  root 'pages#index'
  
  get '/login'        => 'sessions#new', as: 'login'
  post '/login'       => 'sessions#create'
  get '/logout'       => 'sessions#destroy', as: 'logout'


end
