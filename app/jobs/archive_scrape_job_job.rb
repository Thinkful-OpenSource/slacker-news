class ArchiveScrapeJobJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    info = args[0]
    keyword = Keyword.find_by_name('test')
    if keyword.nil?
      keyword = Keyword.create(name: 'test')
    end
    Link.create(title: info.facebook.title, url: info.url, keywords: [keyword])
  end
  
  private
  
  def create
    
  end
  
  def keywords(keys)
    
  end
end
