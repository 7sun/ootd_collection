class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :style_num, :style, :color, :materials, :description, :created_at, :updated_at

  belongs_to :collection
  has_many :images
  accepts_nested_attributes_for :images
end
