class CreateKeywords < ActiveRecord::Migration
  def change
    create_table :keywords do |t|
      t.integer :link_id, null: false
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
