# **Proffy**
Project made to connect students to teachers.

![proffy](https://raw.githubusercontent.com/LaercioCandido/Proffy/master/proffy.png)


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
 
 # Go to project's server fold
 $ cd Proffy
 ```
### Run Web Project  

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
Access API at http://localhost:3333/

**Front-end**
```
# Go to project's web folder
$ cd web

# Install dependencies
$ yarn install or npm install

# Run application
$ yarn start or npm run start
```
Access http://localhost:3000/ 



### Run Mobile Project
To run the project on mobile you need a cellphone with the expo app instaled or an android/ios emulator.
```
# Go to project's mobile folder
$ cd mobile/

# Install dependencies
$ yarn install  or npm install

# Run application
$ yarn start or npm run start
```
After read the QR Code with the expo app or run on emulator.
