# NODEJS EPAM TRAINING

Proyect with all the exercies relates to the NodeJS EPAM Training

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
## Install

    $ git clone https://github.com/AndresGiraldol/nodetraning.git
    $ cd nodetraning/HOME_WORK_TO_TEST
    $ npm install

## Running the project

- #### HomeWork 1
##
    $ npm run task1 // to run task 1
    $ npm run task2 // to run task 2
    $ npm run task1:babel // to run task 1 with babel
    $ npm run task2:babel // to run task 2 with babel

- #### HomeWork 2
##
    $ npm run task1 // to run task 1
    $ npm run task2 // to run task 2

- ### HomeWok 3 same folder of Homework 2

- ## HomeWork 4 

 $ npm run serve // to init the server
 $ npm run seed:init // to populate the inital data

## Install

1. Start postgres with Docker, with the command `docker-compose up`
2. Load initial data with the comando `npm run seed:init`
3. Run the task `npm run task3`
4. Test the endpoints
 
