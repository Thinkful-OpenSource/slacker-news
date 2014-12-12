# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

keywords = Keyword.create([{name: 'code'}, {name: 'car'}, {name: 'javascript'}, {name: 'java'}, {name: 'script'}])
domains = ['google.com', 'slack.com', 'nitrous.io', 'icloud.com', 'microsoft.com']
posters = ['aric87', 'snarechops', 'grae', 'emily', 'rosuav']
channels = ['general-discussion','python-discussion','rails-discussion','fewd-discussion','open-source']
images = ['http://www.poundart.com/art/randcomix/randcomix_1993-12-21.gif', 'http://images.amcnetworks.com/ifc.com/wp-content/uploads/2011/10/joe-son-random-task-10122011.jpg', 'http://shechive.files.wordpress.com/2012/07/a-sb-random-26.jpg', 'http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg', 'http://upload.wikimedia.org/wikipedia/commons/7/74/Sun-crypto-accelerator-1000.jpg']

for i in 0..500
  domain = domains[rand(5)]
  x = rand(3)
  ks = []
  for j in 0..x
    k = keywords[rand(5)]
    unless ks.include?(k)
      ks << k
    end
  end
  Link.create(title: "This is link #{i+1}", url: "http://#{domain}/#{channels[rand(5)]}/#{keywords[rand(5)].name}/#{i}", domain: domain, poster: posters[rand(5)], image: images[rand(5)], channel: channels[rand(5)])
end