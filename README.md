slacker-news
============

This app is designed to scrape Thinkful's Slack for useful and interesting links, find information about them, then create a searchable database. 
The test app can be viewed at https://thinkful-slacker-news.herokuapp.com/

## Contributing

Any contributions to the project are welcome. Amazing applications are made when people get together and collaborate, sharing all ideas, and putting them into awesome code. No idea is too small, and no contribution is unwelcome. If you would like to help please fork the project to your account, make your changes, and submit a pull request! (If you need help with this process, please ask in the [open-source community](https://thinkful-students.slack.com/messages/open-source/)). For instructions read the section at the bottom of this readme.

We recommend that you create an environment for yourself by following the workflow instructions below, but as an alternative option we have set-up a community environment that you can use without having to go through the manually setup process. Request access on the #open-source slack channel and the [access the box here](https://ide.c9.io/thinkfulcommunity/slacker-news)

##Sections of the project

### UI
 Allows users to look up links that we have scraped
 * Search for links by poster, keywords, domain name, and channel
 * Manually add/edit links and/or information and keywords
 * Bug reporting/feature request form (If users find a bug or have an idea, they can submit them)
 * Should this have users log in? This could allow for something like a favorites list, but also might be overkill for a simple resource searching site.

### API
 Communication to and from slack
 * API calls (in Rails) that pull links from slack
 * API calls that puts messages into slack (Bug reports/feature requests)

### Scraper
 Collection of information about the links
 * Uses a headless browser (PhantomJS)
 * Navigate all new links and cache metadata

##Things we need (recommended course knowledge)

### UI (Front-End/Design/UX/Rails)
 * Wireframes of site layout
 * Design plans (theme, feel, etc)
 * Search form with result display
 * Add new link form
 * "Refine" link form (Users should be able to enhance, but not remove information, perhaps there could be a peer review process? Overkill?)
 * Bug reporting/feature request form

### API (Rails)
 * ActiveJob calls to slack to pull links
 * Compare links to links that we already have saved (ignore duplicates)
 * Fire off the scraper for any new links
 * Save information returned from the scraper

### Scraper (Javascript/Data-Science)
 * Navigate to URL in phantomJS
 * Pull information from facebook/twitter/youtube/other `<meta>` tags
 * (Data-Science) Recommendations on other things that we can use?
 * [How to run phantomjs on Heroku](https://github.com/stomita/heroku-buildpack-phantomjs)

## Instructions

### For Rails Students:

This is a Rails 4.2.0.rc2 application.

### For Front End Students:

This is a Rails application. The following instructions will get you started, but will not explain how rails works.

1. Installing Rails on your computer can be really simple, but can also be really tricky if it goes wrong. For simplicity's sake please create a free account and start a Rails box at http://Nitrous.io. (This also allows for collaborative editing where more than one person can work on the same box together and it has a chat feature. This can be really cool and may help in the development of this project.)

2. Once your box is done being created, contact SnareChops on slack to obtain the API Key then open the IDE and run the following commands (the setup script will take quite awhile, wait for it to finish, I promise it didn't freeze):

```
cd workspace
git clone https://github.com/<YourUsername>/slacker-news
cd slacker-news
sh setup.sh <API Key>
```
This will install the correct version of ruby, download the application and any dependencies, set up the database, and create a link to the original git repo for updates.

To run the application with the convenient all-in-one run script run:
```
sh run.sh
```
This will start the rails server. (If not using Nitrous.io use the normal way to start the server) To view the site click on the preview menu item at the top of the page and click on "Port 3000". This will open the site in your browser and you can play around with it like normal.

To stop the server press `Ctl + C` in the console. If you hit an error in the console, please file an issue in the GitHub repo detailing what happened (as best as you know) and paste the console output into the bug report. This will help us track down issues with the backend stuff. You can restart the server by running the above command again.

### Where do I put front end code?

 * CSS : `app/assets/stylesheets/`
 * JS  : `app/assets/javascripts/`
 * HTML: `app/views/` This can be the tricky one, since views map to routes in rails (kind-of). But this is the folder where you'll find them.

## Workflow

Contributing to this open source application is different than working on your own repo. There are extra steps. Here is a step by step guide to get you setup.

1. On GitHub go to https://github.com/Thinkful/slacker-news (make sure you're signed in) and click on the fork button to clone the repo to your account.
2. Next clone the project to Nitrous or your computer with `git clone https://github.com/<YourUsername>/slacker-news`
3. Contact snarechops on Slack to obtain the test API keys for the project. These are not included in the repo for security reasons.
4. Running the setup.sh script with the API key will set up everything that you need to contibute.

To update your project with the data from the main repo (Get changes from other contributors) run:
```
git pull upstream master
```

To save your changes run the following commands:
```
git pull upstream master
git add -A
git commit -m "Your commit message (please try to be descriptive, other team members will see this)"
git push origin master
```

Now if you are happy with your work and you would like to contribute it to the Thinkful repo:

1. Go to your repo on GitHub
2. Click on the green button with two circling arrows (the one that wasn't there before)
3. Leave a message about what you are contributing
4. Your pull request will be merged in once approved

## Resources
* [Angular Material Design Documentation](https://material.angularjs.org/#/)
* [Ion Icons](https://github.com/driftyco/ionicons)
