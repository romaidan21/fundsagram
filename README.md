# 1. ABOUT PROJECT BUNDLE

This bundle is created for fast Wordpress site configure and deployment. It is based on mix of Gulp & Webpack modules, which help to:

- compile SCSS/JS for different environments (development|production)
- optimize/resize static images and convert them to WebP
- convert TTF fonts to WOFF & WOFF2
- create/update/backup of DB between local, test & prod servers
- deploy of full app or theme (selective) between local, test & prod servers
- more features in process

We divided mobile and desktop src/build files for app assets, due to difference between mobile and desktop versions of app. This is controlled by PHP on backend for more adaptive and optimized frontend. In fact we have 2 different versions of app in the end, where each may contain independent UI & logic.


# 2. PROJECT REQUIREMENTS:

- Local web-server running
- PHP 7.4
- MySQL 5.7
- Node.js LTS (latest version) with addons (including Python):
    - gulp-cli (npm i -g gulp-cli)
    - Yeoman WP generator (npm install -g yo generator-wordpress)

# 3. FOLDER STRUCTURE
- /app/ - core Wordpress folder
- /gulp/ - all gulp config and functionality
- /src/ - source files folder, which consists of:
    /scss - scss files for desktop|mobile versions and general for combined styles
    /js - js files for desktop|mobile versions and general for combined scripts
    /img - images to optimize|convert (build in this folder)
    /fonts - fonts to convert (build in this folder)


# 4. SYSTEM PATH CONFIG (if not configured)

Add to system PATH:
- .\node_modules\.bin
- path to PHP executives (i.e. X:\Openserver\modules\php\PHP_7.4)
- path to DB executives (i.e. X:\Openserver\modules\database\MySQL-5.7\bin)

# 5. SETUP PROJECT
First of all create SSH key, name it *projectName*_rsa, save it in your \.ssh folder and send it’s public version to your Admin

## Project naming

>>local project should be named *projectName*.loc due to environment check

after the whole setup, run Find&Replace command in your code editor and replace *projectName* with your actual project name for this files:
- package.json
- gulp/config.js
- /app/.htaccess-test

## Reinit git:

- remove .git folder
- run git init

# 6. WORDPRESS SETUP:

- run 'npm i'
- run 'cd app'
- run 'yo wordpress'

- configure DB access in:
    - /app/local-config.php (for local and test env)
    - /app/config.php (for prod env)

- continue WP setup
- turn off *site indexing for search enfines*
- remove /app/ from site path in WP dashboard (WP will logout)
- goto http://*projectName*/admin and login again
- select Bamboo theme to start working with it
- remove app/.yeopress file
- configure /gulp/config.js

### *We use aggressive reduce of Wordpress functionality, such as disabling WP links from dashboard, quick drafts, comments, emoji's and other rarely used features, so in case of missing some of functionalty - don't panic: just take a look at /functions/tweak.php file in a theme folder.*

# 7. PROJECT COMPILE

- run "gulp" (watch & dev compile)
- run "gulp build" (build project for production)
- use gulp commands in /gulp/readme.md

# 8. SECURITY & ENVIRONMENT CONFIG

- check local-config.php

# 9. SEO

- setup robots.txt