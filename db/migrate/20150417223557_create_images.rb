class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.references :product, index: true
      t.string :source
      t.string :description

      t.timestamps null: false
    end
  end
end
