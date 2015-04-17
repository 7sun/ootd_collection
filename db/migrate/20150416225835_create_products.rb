class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :category
      t.string :style_num
      t.string :style
      t.string :color
      t.string :materials
      t.string :description

      t.timestamps null: false
    end
  end
end
