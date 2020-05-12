# README

## Prince George's County SpeedCam Map

## Description

Over the course of the semester, Morning Group 5 has been working on developing an application that better visualizes the location of SpeedCameras in Prince George's county as to provide a visually salient method of understand the data.

The application is located at [here](https://inst377-morning5-speedcam.herokuapp.com/index.html "SpeedCam Home")

This application is able to run on both mobile and desktop browsers. We will say that the application is more streamlined when used on a desktop browser.

We hope to accomodate all users of this application. To that end, we have created a [User-manual](docs/user.md) that general users can reference. In addition, we also developed a Developer Manual within this same file. Just scroll down until you see "Developer Manual".





# Developer Manual

For anyone who wants to use and experiment with this code, there is some pertinent information you need

## Installing Application and Dependencies

First make sure you have node.js installed. Go to you terminal and type npm-version. If you need to install node.js, visi [this](https://nodejs.org/en/download/) site.

Next, download our application from Github

Once you have node.js installed and the application downloaded, navigate to the folder where the application is located.

Once here, type in the command "npm install package.json". This will download all the dependencies for the application

## Running the Application on the Server

Once you have everything downloaded, type in the the command "npm start". This will start the server and will thus host the application. We designated port 3000 as the location of the server. In order to access the applciation, go to your web browser of choice and navigate to localhost:3000. You should see the application running here

## Known Issues and Future Development

As of right now, there is are no functioning API in the server that get data from the PG County data base. We simply hosted all the data on our front end. Another issue is that the filtering function on the home page in not functioning. There submission on the DATA page are not stored anywhere either.

If you were to continue this project, creating a GET API for the PG County Data would be a priority. From there you can create a POST endpoint to place the data in a sqlite database. Once you do that, you can use a PUT endpoint to pass the data to the front end.

By solving this problem, figuring out the issue of the filtering would be much easier as the data will be in a stadardized form. You can also create a table for the submission data and create new aggregate tables with the already existing data. 

These are just our reccomendations for next steps. Please develop new and innovative uses and implementations for our application! 








