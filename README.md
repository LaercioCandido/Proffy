# **Proffy**
Project made to connect students to teachers.


## Tecnologies

This project was developed with:
- [NodeJs](https://nodejs.org/en/ "NodeJs")
- [Express](https://expressjs.com/ "Express")
- [Expo-Cli](https://expo.io/tools#cli "Expo-Cli")
- [React](https://reactjs.org/ "React")
- [React Native](https://reactnative.dev/ "React Native")
- [Typescript](https://www.typescriptlang.org/ "Typescript")

Dependencies:

- [Express](https://expressjs.com/ "Express")
- [KnexJS](http://knexjs.org/ "KnexJS")
- [SQLite3](https://www.npmjs.com/package/sqlite3 "SQLite3")
- [Axios](https://www.npmjs.com/package/axios "Axios")
- [Expo Google Fonts](https://github.com/expo/google-fonts " [Expo Google Fonts]")


## How to run
### Downloading project 
``` 
 # Clone repository into your machine 
 $ git clone https://github.com/LaercioCandido/Proffy.git 
 ```
### Running project on a web browser  

**Front-end**
```
# Go to project's web folder
$ cd web

# Install dependencies
$ yarn install or npm install

# Run application
$ yarn start or npm run start
```
Front-end available at http://localhost:3000/.

**Back-end**
```
# Go to project's server folder
$ cd server

# Install dependencies
$ yarn install or npm install

# Run application
$ yarn start or npm run start

# Make migrations
$ yarn knex:migrate
```
API available to be tested on http://localhost:3333/.

### Running project on mobile
To run the project on mobile you need a cellphone with the expo app instaled or an android/ios emulator.
```
# Go to project's mobile folder
$ cd mobile/

# Install dependencies
$ yarn install  or npm install

# Run application
$ yarn start or npm run start
```
