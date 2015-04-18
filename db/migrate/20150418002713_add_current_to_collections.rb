class AddCurrentToCollections < ActiveRecord::Migration
  def change
    add_column :collections, :current, :boolean
  end
end
