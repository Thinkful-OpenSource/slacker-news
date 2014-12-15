class ArchiveScrapeJobJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    info = args[0]
    facebook = info.facebook
    logger.info(info)
  end
  
  private
  
  def create
    
  end
  
  def keywords(keys)
    
  end
end
