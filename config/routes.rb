Rails.application.routes.draw do
  resources :users, :products
  
  root 'pages#index'
  
  get '/login'        => 'sessions#new', as: 'login'
  post '/login'       => 'sessions#create'
  get '/logout'       => 'sessions#destroy', as: 'logout'
  # get '/tops'         => 'products#tops', as: 'tops'
  # get '/pants'        => 'products#pants', as: 'pants'
  # get '/skirts'       => 'products#skirts', as: 'skirts'
  # get '/dresses'      => 'products#dresses', as: 'dresses'
  # get '/jackets'      => 'products#jackets', as: 'jackets'
  get '/collection'   => 'collections#index', as: 'collection'
  get '/about'        => 'pages#about', as: 'about'


end
