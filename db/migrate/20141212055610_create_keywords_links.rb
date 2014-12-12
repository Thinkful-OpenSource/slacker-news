class CreateKeywordsLinks < ActiveRecord::Migration
  def change
    create_join_table :keywords, :links
  end
end
