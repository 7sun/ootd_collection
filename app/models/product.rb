class Product < ActiveRecord::Base
  belongs_to :collection
  has_many :favorites
  has_many :favorited_users, through: :favorites, source: :user
  has_many :images
  accepts_nested_attributes_for :images
end
