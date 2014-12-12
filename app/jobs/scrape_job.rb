class ScrapeJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    # Perform a scrape of a link
  end
end
