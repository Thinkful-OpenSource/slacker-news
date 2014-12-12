slacker-news
============

App to scrape Thinkful's Slack for useful and interesting links

## Contributing

Any contributions to the project are welcome. Amazing applications are made when people get together and collaborate, sharing all ideas, and putting them into awesome code. No idea is too small, and no contribution is unwelcome. If you would like to help please fork the project to your account, make your changes, and submit a pull request!

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
 * HTML: `app/views/` This can be the tricky one, since views map to routes in rails (kind-of). But that's where you'll find them.
