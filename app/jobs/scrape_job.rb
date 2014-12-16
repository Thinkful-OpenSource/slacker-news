class ScrapeJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    # Perform a scrape of a link
    `phantomjs ../scrape-scripts/scrape.js http://music2mayhem.com`
  end
end
