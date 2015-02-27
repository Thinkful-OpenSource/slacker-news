require 'nokogiri'
require 'open-uri'

class ScrapeJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    # Perform a scrape of a link
    url = 'http://music2mayhem.com'
    byebug
    doc = Nokogiri::HTML(open(url))
    link = scrape url, doc
    link.save()
  end
  
  private
  def scrape(url, doc)
    general_title = doc.search('title')[0].inner_text#.map{|x| x.inner_text}
    general_description = search_meta doc, 'description'
    general_keywords = search_meta doc, 'keywords'
    facebook_title = search_meta doc, 'og:title'
    facebook_site_name = search_meta doc, 'og:site_name'
    facebook_url = search_meta doc, 'og:url'
    facebook_description = search_meta doc, 'og:description'
    facebook_image = search_meta doc, 'og:image'
    
    byebug
    title = facebook_title || general_title
    description = facebook_description || general_description
    
    link = Link.new(title: title, url: url, domain: 'test', image: facebook_image)
    return link
  end
  
  def search_meta(doc, string)
    item = doc.search('meta[property="'+string+'"]')[0]
    value = item['content'] unless item == nil
    return value || nil
  end
end