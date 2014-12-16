class ScrapeJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    # Perform a scrape of a link
    byebug
    system 'pwd'
    system 'phantomjs /scrape.js http://music2mayhem.com'
    # if success
    #   logger.info("Phantomjs launch success")
    # else
    #   logger.info("Phantomjs launch fail")
    #   logger.info($?)
    # end
  end
end