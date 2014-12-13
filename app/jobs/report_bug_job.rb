require 'net/http'
class ReportBugJob < ActiveJob::Base
  queue_as :default

  def perform(*args)
    # Do something later
    text = ''
    if args[0][:type] == 'feature'
      text = 'Feature request'
    else 
      text = 'Bug report'
    end
    text += " from #{args[0][:user]}" unless args[0][:user] == nil
    text += ": #{args[0][:message]}"
    
    uri = URI("https://slack.com/api/chat.postMessage")
    params = {token: ENV["slack_api_token"], channel: '#open-source', text: text, username: 'SlackerNewsBot'}
    uri.query = URI.encode_www_form(params)

    response = Net::HTTP.get(uri)
  end
end
