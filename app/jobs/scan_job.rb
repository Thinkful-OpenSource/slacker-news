class ScanJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    # Scan slack for links and schedule a Scrape job
  end
end
