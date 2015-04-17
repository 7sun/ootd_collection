class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.integer :year
      t.string :season

      t.timestamps null: false
    end
  end
end
