class HomeController < ApplicationController
  def index
    #Load 20-50 latest links (or HOTTEST links) - Need data-science on this aspect
    @links = Link.limit(50)
  end
  
  # AJAX - Return JSON
  def search # (term, page)
    @links = Link.links_by_keywords(Keyword.search(params[:term]))
    expires_now
    render 'search'
  end
end
