require 'net/http'
class ScanJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    # Scan slack for links and schedule a Scrape job
    byebug
    uri = URI("https://slack.com/api/search.messages")
    params = {token: ENV["slack_api_token"], query: args[0]}
    uri.query = URI.encode_www_form(params)
    
    response = Net::HTTP.get_reponse(uri)
  end
end
