Rails.application.routes.draw do
  root to: 'stars#index'
  get 'stars/index'
end
