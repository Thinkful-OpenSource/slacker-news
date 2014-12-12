slacker-news
============

App to scrape Thinkful's Slack for useful and interesting links

## Contributing

Any contributions to the project are welcome. Amazing applications are made when people get together and collaborate, sharing all ideas, and putting them into awesome code. No idea is too small, and no contribution is unwelcome. If you would like to help please fork the project to your account, make your changes, and submit a pull request! (If you need help with this process, please ask in the open-source community) For instructions read the section at the bottom of this readme.

## Sections of the project

 ### UI
 Allows users to look up links that we have scraped
 * Search for links by poster, keywords, domain name, and channel
 * Manually add/edit links and/or information and keywords
 * Bug reporting/feature request form (If users find a bug or have an idea, they can submit them)
 * Should this have users log in? This could allow for something like a favorites list, but also might be overkill for a simple resource searching site.

 ### API
 Communication to and from slack
 * API calls (in Rails) that pull links from slack
 * API calls that pust messages into slack (Bug reports/feature requests)

 ### Scraper
 Collection of information about the links
 * Uses a headless browser (PhantomJS)
 * Navigate all new links and cache metadata

## Things we need (recommended course knowledge)

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

## Instructions

### For Rails Students:

This is a Rails 4.2.0.rc2 application.

### For Front End Students:

This is a Rails application. The following instructions will get you started, but will not explain how rails works. This is intentional.

1. Installing Rails on your computer can be really simple, but can also be really tricky if it goes wrong. For simplicity's sake please create an account and start a Rails box at http://Nitrous.io. (This also allows for collaborative editing where more than one can be working on the same box together and it has a chat feature. This can be really cool and may help in the development of this project.)

2. Once your box is done being created, open the IDE and run the following commands in order (some may take awhile, wait for them to finish, I promise it didn't freeze):

```
cd workspace
git clone https://github.com/<YourUsername>/slacker-news
cd slacker-news
bundle install
rake db:setup db:seed
```
This will download the application and any dependencies, and set up the database.

To run the application run
```
rails server -b 0.0.0.0
```
This will start the rails server. (If not using Nitrous.io remove the `-b 0.0.0.0`) To view the site click on the preview menu item at the top of the page and click on "Port 3000". This will open the site in your browser and you can play around with it like normal.

To stop the server press `Ctl + C` in the console. If you hit an error in the console, please file an issue in the GitHub repo detailing what happened (as best as you know) and paste the console output into the bug report. This will help us track down issues with the backend stuff. You can restart the server by running the above command again.

### Where do I put front end code?

 * CSS : `app/assets/stylesheets/`
 * JS  : `app/assets/javascripts/`
 * HTML: `app/views/` This can be the tricky one, since views map to routes in rails (kind-of). But this is the folder where you'll find them.
