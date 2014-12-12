class LinkController < ApplicationController
  
  def index # (id)
    #Get link by id
  end
  
  def new
    #Show form to create a new link
  end
  
  def refine # (id)
    #Show form to refine a link
  end
  
  def create # (url)
    #Create new link (And send to the scraper for processing)
  end
  
  def update # (update_params)
    #Update the link (And send to the scraper if the URL changed)(Might actually want to not allow the user to change the URL, instead they would
    #need to add a new one)
    #Also do not allow the removal of keywords? Or should we. I see both sides.
  end
  
  private
  
  def update_params # These are the only items that the user is allowed to update, all other information is obtained by the scraper
    params.require(:link).permit(:title, :keywords)
  end
end
