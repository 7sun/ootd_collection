Rails.application.routes.draw do
  resources :users, :products
  
  root 'pages#index'
  
  get '/login'        => 'sessions#new', as: 'login'
  post '/login'       => 'sessions#create'
  get '/logout'       => 'sessions#destroy', as: 'logout'
  get '/collection'   => 'collections#index', as: 'collection'
  get '/about'        => 'pages#about', as: 'about'
  get '/contact'      => 'pages#contact', as: 'contact'
  get '/stockists'    => 'stockists#index', as: 'stockists'


end
