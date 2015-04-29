class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.references :user, index: true
      t.references :product, index: true

      t.timestamps null: false
    end
    add_foreign_key :favorites, :users
    add_foreign_key :favorites, :products
  end
end
