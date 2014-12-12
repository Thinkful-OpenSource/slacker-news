class HomeController < ApplicationController
  def index
    #Load 20-50 latest links (or HOTTEST links) - Need data-science on this aspect
    @links = Link.limit(50)
  end
  
  # AJAX - Return JSON
  def search # (term, page)
    @links = Keyword.search(term, page)
  end
end
