Rails.application.routes.draw do
  namespace :api do
    resources :products
    resources :stockists
    resources :collections
    resources :favorites
    get '/instagram'   => 'instagram#index'
    get '/currentuser' => 'users#currentuser'
  end

  namespace :admin do
    resources :users
    resources :products
    resources :stockists, except: :show
    resources :collections
    get '/favorites' => 'favorites#index'
    root 'pages#index'
  end
  
  root 'home#index'

  get '/login'        => 'sessions#new', as: 'login'
  post '/login'       => 'sessions#create'
  get '/logout'       => 'sessions#destroy', as: 'logout'
  get '/welcome'      => 'home#welcome', as: 'welcome'

end
