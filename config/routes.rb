Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :stockists
    resources :collections
    resources :favorites
  end

  namespace :admin do
    resources :users
    resources :products
    resources :stockists, except: :show
    resources :collections
    # get '/'      => 'pages#index', as: 'home'
    root 'pages#index'
  end
  
  root 'home#index'
  
  get '/login'        => 'sessions#new', as: 'login'
  post '/login'       => 'sessions#create'
  get '/logout'       => 'sessions#destroy', as: 'logout'
  # get '/collection'   => 'collections#current', as: 'collection'
  # get '/about'        => 'pages#about', as: 'about'
  # get '/contact'      => 'pages#contact', as: 'contact'


end
