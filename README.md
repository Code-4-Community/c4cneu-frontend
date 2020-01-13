<img src="src/assets/c4c-banner-logo.jpeg" align="center">

# Frontend for www.c4cneu.com
This repository contains the contains the code for the website www.c4cneu.com. 


## Project setup
>To set up the project locally on your machine run the following commands in the terminal. Make sure you're in the desired folder.
```
git clone https://github.com/Code-4-Community/c4cneu-frontend.git
npm install
npm install -g @vue/cli
```

## GitHub Workflow
Large features will be developed on their own independent branches.
The format for new a new branch is: [YourName]_[ID]_[TicketName]
Commits to branches must be submitted through pull requests.
Pull requests should have a description of the changes made and a link to a Trello ticket.
If a pull request receives comments, please fix them and then resolve the comment.

## Repository structure
* The root folder 

   Contains the config and lock files for the various packages that are used in this project such as babel and yarn. It also has the README.md and the Docker configuration. Besides that it contains the public, src and tests folders.
* The public folder 

   Contains the `favicon.ico` file, the icon used in browser tabs, and the index file, which mainly serves to specify settings and import stylesheets. 
* The src folder 

   Contains all the content of the website. The assets folder contains all the images used on the website. The components folder contains several components that are used across the website, such as the header and footer on every page. The router folder contains a JavaScript file specifying the different routes across the website. The store folder has a JavaScript file that fetches and gets elements of the website that are loaded from elsewhere, such as our e-board page or our upcoming events. The views folder contains the `.vue` file of every page. The `App.vue` file in the src folder contains must of the styling for the website and sets up the basic structure of every page. 
* The tests folder 

   Contains two folders, `e2e` and `unit`. The e2e folder contains our end-to-end tests and the unit folder contains our unit tests, all written in JavaScript.

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```
