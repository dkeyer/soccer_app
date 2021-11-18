This repository contains my final project for the Code Louisville javascript class. My app is a page that displays real game data for the teams in the English Championship, as well as a form where users can submit predictions to guess how many goals will be scored during the week.

I have used media queries based on mobile-first principles so that elements of the page adjust as the size of the window changes. The media queries are based on three sizes for mobile, tablet, and desktop. 
To give a couple of examples, the prediction form at the bottom of the page begins as three different rows stacked on top of each other, but then displays on a row beginning at screens of size 1024px.
The matchups div, which gives an overview of which teams are playing each other and their average goals per match scored so far this season, displays in two columns at mobile size then expands into more columns depending on the size of the page beginning at tablet size (768px).


Requirements:

Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application - Created several arrays (totalGoals to name one) and looped through my data to populate those arrays, which are eventually displayed through bar graphs

Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value - Created the getAvgGoals function to take the total goals of all of the teams and use their matches played in order to get the average number of goals they have scored per match

Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event) - Created a countdown to the first kickoff of the 14th matchweek

Visualize data in a graph, chart, or other visual representation of data - Used charts and bar graphs to display the goal data for the teams in a visualization

Create a form and save the values (on click of Submit button) to an external file  - I have created a predictions form that accepts three values: Name, Email, and Prediction and upon clicking the submit button, save to a .txt file