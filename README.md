# CliniCore - A better hospital management system application

[![CodeBumble](https://i.imgur.com/vvJ7e2T.png)](https://codebumble.com)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://codebumble.com)

### Introductions

CliniCore is a hospital management application developed by CodeBumble. We're working on this item to make an easy management system for every hospital.

- File Structures
 ```sh
Hospih File Structures/
├── app                      # Controllers and Models 
├── bootstrap                # Contains cache and app.php
├── config                   # Application's configuration files
├── database                 # Migrations, model factories, & seeds
├── public                   # index.php ,static folder & Build 
├── resources                # Views, Layouts, store and vue.js components
│   │
│   ├── assets/
│   │   ├── css/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── utils/
│   │
│   ├── js                   # All JS Files
│   │   │
│   │   ├── src
│   │   │   │
│   │   │   ├── acl/                                # Vuejs Access Control
│   │   │   ├── auth/                               # Auth0 Service
│   │   │   ├── components/                         # Vuexy Admin custom components
│   │   │   ├── fake-db/                            # Fake Database for mocking API calls
│   │   │   ├── filters/                            # VueJS filters
│   │   │   ├── firebase/                           # Firebase Configuration
│   │   │   ├── http/                               # Fake Requests
│   │   │   ├── i18n/                               # Internationalization
│   │   │   │
│   │   │   ├── layouts/                            
│   │   │   │    ├── components/                    # Layout components
│   │   │   │    │    ├── customizer/               # Customizer components
│   │   │   │    │    ├── horizontal-nav-menu/      # Horizontal Navigation Menu Component
│   │   │   │    │    ├── navbar/                   # Navbar for Horizontal & Vertical Layout
│   │   │   │    │    ├── vertical-nav-menu/        # Vertical Navigation Menu Component
│   │   │   │    │    ├── vx-tooltip/               # Extended Tooltip component
│   │   │   │    │    ├── TheFooter.vue             # Footer Component
│   │   │   │    │    └── VxBreadcrumb.vue          # Breadcrumb Component
│   │   │   │    │
│   │   │   │    ├── full-page/                     # Full page layout for pages like login
│   │   │   │    └── main/                          # Main layout
│   │   │   │  
│   │   │   ├── plugins/                           # Vuejs Plugins
│   │   │   ├── store/                              # Vuex Store
│   │   │   ├── vendor/                             # Vendor Files
│   │   │   ├── views/                              # View files for all pages
│   │   │   ├── App.vue                             # Application main vue file
│   │   │   ├── globalComponents.js                 # Gloablly registered components
│   │   │   ├── main.js                             # Application main js file
│   │   │   ├── router.js                           # router file
│   │   │   │
│   │   ├── app.js                # Entry point
│   │   ├── auth_config.js        # Auth0 Configurations/Credentials
│   │   ├── themeConfig.js        # Theme Configuration File
│   │   └── vue.config.js         # Optional
│   │
│   ├── lang/                  # Include Languages 
│   ├── sass/                  # Include scss files
│   └── views/                 # Contain Blade templates
│
├── routes/                  # Include Routes Web.php 
├── storage/                 # Contains compile blade templates
├── tests/                   # For testing
├── .babelrc                 # Babel File
├── .editorconfig            # Related with your editor
├── .env.example             # Include Database credentials
├── .gitattributes           # Give attributes to pathnames
├── .gitignore               # Files and Directories to ignore
├── .styleci.yml             
├── artisan                  # Include artisans commands
├── composer.json            # Dependencies used by composer
├── package.json             # Dependencies used by node
├── phpunit.xml              # Related With testing
├── server.php               # For php's internal web server
├── tailwind.js              # Tailwind Configuration File
├── vue.config.js            # VueJS Configuration File
└── webpack.mix.js           # Laravel's webpack file
```

- Technology we use

	- Laravel
	- VueJs
	- Webpack
	- Js
	- Core PHP
	- Tailwind CSS
	- MySQL
    

### Installation

  1. [Download Composer](https://getcomposer.org/Composer-Setup.exe) and install on your computer.
  2. Open the CMD/terminal in your workstation directory (htdocs/clinicore or www/clinicore or /clinicore) & to install the composer packages run the following command: 
    
	$ composer install

  3. In the workstation / root directory, you will find a file named .env.example rename the given file name to .env and run the following command to generate the key (and you can also edit your data base credentials here)

	$ php artisan key:generate

  4. By running the following command, you will be able to get all the dependencies in your node_modules folder:

	$ npm install

  5. To run the project you need to run following command in the project directory. It will compile the vue files & all the other project files. If you are making any changes in any of the .vue file then you need to run the given command again.

	$ npm run dev
	
  6. To serve the application you need to run the following command in the project directory. (This will give you an address with port number 8000). Now navigate to the given address you will see your application is running.

	$ php artisan serve

  7. To change the port address, run the following command:

	$ php artisan serve --port=8080    // For port 8080
	$ sudo php artisan serve --port=80 // If you want to run it on port 80, you probably need to sudo.

  8. ##### Watching for changes: 
      Running npm run dev every time you make changes to file is inefficient. Hopefully there's command so your changes can be watched and get reflected accordingly.

	$ npm run watch

  9. Now enter the following address to your browser:

	https://127.0.0.1:8080

  10. ##### Building for Production: 
      If you want to run the project and make the build in the production mode then run the following command in the root directory, otherwise the project will continue to run in the development mode.

	$ npm run prod

> For more details and proper guide, Go on this link: [Documentation](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/laravelIntegration.html#folder-structure)

