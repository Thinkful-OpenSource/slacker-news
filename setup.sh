#!/bin/bash
if [ -z ${1+x} ]
  then
    echo "Slack API key required for automatic setup. Please run the command again with the key or contact SnareChops in Slack to obtain the key.";
    exit 1;
fi
parts install ruby2.2
echo 'ruby-2.2.0' > ~/.ruby-version
echo "slack_api_token: $1" > config/application.yml
git remote add upstream https://github.com/Thinkful/slacker-news
git pull upstream master
git add -A
git commit -m "Setup Complete"
bundle install
rake db:setup db:migrate
echo "Setup complete. Enjoy!"
