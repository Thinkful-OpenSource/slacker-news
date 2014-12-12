class Keyword < ActiveRecord::Base
  # id:integer NOT NULL PRIMARY KEY
  # link_id:integer NOT NULL FOREIGN KEY
  # name:string NOT NULL
  # created_at:datetime NOT NULL
  # updated_at:datetime NOT NULL
  
  belongs_to :link
end
