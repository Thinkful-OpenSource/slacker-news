class Keyword < ActiveRecord::Base
  # id:integer NOT NULL PRIMARY KEY
  # name:string NOT NULL
  # created_at:datetime NOT NULL
  # updated_at:datetime NOT NULL
  
  has_many :keywords_links
  has_many :links, through: :keywords_links
  
  def self.search(term)
    return self.where("name LIKE ?", "%#{term}%")
  end
end
