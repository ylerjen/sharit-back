# sharit-back
This is the Backend part of the simple sharit application.
See the sharit repo for further informations.

# Prerequisite

## MongoDB
Install mongodb following the [official doc](https://www.mongodb.com/).
Then, set the config in the **env.js** file  

## NodeJs
.Install the NodeJs environment following the [official doc](https://nodejs.org/)


# Install

## Dependancies
Open a terminal and run 
```
npm install
```

# Start services

## MongoDB
To start mongoDb, add the bin install folder to the path, then run
```
mongod
```
If your db is in a specific directory, specify it with
```
 mongod --dbpath ~/mongo-data/db
 ```
 
 ## Node Server
 To launch the application with a NodeJs server, open a terminal and run
 ```
 npm start
 ```