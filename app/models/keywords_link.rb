class KeywordsLink < ActiveRecord::Base
  self.primary_key = [:keyword_id, :link_id]
  belongs_to :keyword
  belongs_to :link
end
