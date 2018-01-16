Rails.application.routes.draw do
  namespace :api do
    get 'bookstore/index'
  end

  namespace :api do
    get 'bookstore/show'
  end

  namespace :api do
    get 'bookstore/update'
  end

  namespace :api do
    get 'bookstore/destroy'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
