class LinkController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:archive]
  
  def index # (id)
    #Get link by id
    @link = Link.find(params[:id])
  end
  
  def new
    #Show form to create a new link
    @link = Link.new
  end
  
  def refine # (id)
    #Show form to refine a link
    @link = Link.find(params[:id])
  end
  
  def create # (url)
    #Create new link (And send to the scraper for processing)
    exists = Link.find_by_url(params[:url])
    if exists.nil?
      ScrapeJob.perform_later(params[:url])
    end
    return head :ok
  end
  
  def update # (update_params)
    #Update the link (And send to the scraper if the URL changed)(Might actually want to not allow the user to change the URL, instead they would
    #need to add a new one)
    #Also do not allow the removal of keywords? Or should we. I see both sides.
  end
  
  def archive
    byebug
    ArchiveScrapeJob.perform_later(params[:info])
  end
  
  private
  
  def update_params # These are the only items that the user is allowed to update, all other information is obtained by the scraper
    params.require(:link).permit(:title, :keywords)
  end
  
end
