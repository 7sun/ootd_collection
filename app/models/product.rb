class Product < ActiveRecord::Base
  belongs_to :collection
  mount_uploader :image, ImageUploader
  # has_many :images
end
