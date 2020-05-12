#Speed Cameras in PG County
##By: Biniyam Assefa, Fayben Mamo, Robel Amare, Patrick Kam, Afnan Abdella

[herokuapp](https://inst377-morning5-speedcam.herokuapp.com/index.html "SpeedCam Home")

###Information Problem
The problem with speeding cameras isn’t the fact that they aren’t effective in catching people who speed, rather the reason for their placement in specific locations is not clear. The general public does not have a clear cut understanding of how speeding cameras work and why it is in a specific location. Looking at the Speed Cameras in Prince George's County, there are no details explaining why the cameras are placed in these specific locations.The data would be easier to understand if it included brief descriptions for the reason the cameras were placed in each location. Depending on the reasoning people may be more willing to understand to control their speed. 
To that end, we want to create data-driven visualizations that can educate people on speeding. We will decide on relevant criteria from the Prince George’s County data in order to make a visually salient information graphic. On top of this, we will create a map of most areas that are notorious for speeding. Drivers will be able to see this report in a summarized table that can be found using a search bar. Primary stakeholders will be drivers as they will be using the application on a day to day basis and will benefit the most from the application. Secondary stakeholders will be the government (local). By educating the public as to why safe driving is necessary, you prevent needless accidents, ensuring the safety of your city/town.

###Data Used
We decided to use Python and SQLite to solve our information problem. We wanted to clean the data in Python and export it to a SQLite database that is accessible from Node.js.

###Strategies and Solutions
In order to help solve our problem we made this website, with a Data Collection page, for the district and school updates. We are allowing for people to make comments what could be added to the forms to make them more informative. We imagine our application will be mostly used on mobile due to the nature of the information needed. We want the general public to be able to look up the information about speed cameras on their smartphones.

###Technical System Decision
When coming up with our application design we first had to understand the data and pick the criteria that are most important to add to the data collection form. This will require Python, more specifically the Pandas and Matplotlib libraries. In terms of the actual web-application, we will be using HTML/CSS to build the About and Documentation pages. These pages will be fairly static so they wouldn’t require any advanced frameworks. The Data Collection page for the district and school updates will be written mostly in Javascript with some structural HTML and CSS. There will also be jQuery used in order to save the data collected to a database. The general public interface will be written in React.js and will use jQuery to pull data from the database.

###Does it help?
We would say that our application does help address the problems we mentioned earlier. It allows for users who are interested to make comments on how they think the data should be changed in order to be able to understand what causes speeding. It also makes those in charge of the original data see that they should possibly add more details to the data document and hear the people out on what changes to possibly make.

###Challenges
We initially had trouble figuring out how to actually have the webpages laid out, there were several ways we could go about it. But, wanted to make sure that it was aesthetically pleasing and looked reliable to use. One element that we changed was having the search page become its own linked page; there was a bit of confusion prior to it being similar to the about page. We had some trouble with a few features where we didn’t get the search and filter features to work. The app is deployed on Heroku but further troubleshooting is necessary to get the application visible.

###Next Steps
 If our group were to take this project further we would take it to the Prince George's County Police Department. The police department is incharge of creating and enforcing traffic violations which includes speeding cameras. We would want to sit down with them and maybe create a program that can reach drivers and inform them on the purpose of the speed cameras. This may decrease the amount of accidents and speeding tickets given. But, sometimes informing people does not always solve an issue and this could be a reason we would not pursue this project further. A couple alternatives would be to increase penalty for speeding or other forms of discipline.




