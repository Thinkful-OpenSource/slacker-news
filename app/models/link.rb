class Link < ActiveRecord::Base
  # id:integer NOT NULL
  # title:string
  # url:string NOT NULL - The link URL
  # domain:string NOT NULL - The domain of the link url
  # poster:string - The person who posted the link in slack (the original poster) - Should this be multiple?
  # image:string - URL to an image representing the link (if any)
  # channel:string - The channel in which the link was shared (the original channel) - Should this be multiple?
  # created_at:datetime NOT NULL
  # updated_at:datetime NOT NULL
  
  has_many :keywords_links
  has_many :keywords, through: :keywords_links
  
  def self.links_by_keywords(keywords)
    lnks = []
    keywords.each do |keyword|
      unless lnks.count > 20
        lnks += keyword.links.limit(20)
      end
    end
    return lnks
  end
end
