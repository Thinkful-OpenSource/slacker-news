class Keyword < ActiveRecord::Base
  # id:integer NOT NULL PRIMARY KEY
  # name:string NOT NULL
  # created_at:datetime NOT NULL
  # updated_at:datetime NOT NULL
  
  has_many :keywords_links
  has_many :links, through: :keywords_links
  
  def self.search(term, page = nil)
    if page?
      self.where("name LIKE ?", "%#{term}").limit(100).offset(100 * (page - 1))
    else
      self.where("name LIKE ?", "%#{term}%").limit(20)
    end
  end
end
