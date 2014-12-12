class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
      t.string :title
      t.string :url, null: false
      t.string :domain, null: false
      t.string :poster
      t.string :image
      t.string :channel

      t.timestamps null: false
    end
  end
end
