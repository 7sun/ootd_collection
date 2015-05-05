class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :style_num, :style, :color, :materials, :description, :created_at, :updated_at

  has_one :collection
  has_many :images
  has_many :favorites
  has_many :favorited_users, through: :favorites, source: :user
end
