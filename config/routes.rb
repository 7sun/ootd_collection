Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :products
    resources :stockists
    resources :collections
  end


  resources :users, :products
  resources :stockists, except: :show
  
  root 'pages#index'
  
  get '/login'        => 'sessions#new', as: 'login'
  post '/login'       => 'sessions#create'
  get '/logout'       => 'sessions#destroy', as: 'logout'
  get '/collection'   => 'collections#index', as: 'collection'
  get '/about'        => 'pages#about', as: 'about'
  get '/contact'      => 'pages#contact', as: 'contact'


end
