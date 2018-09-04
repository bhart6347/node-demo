const express = require("express"); //This assigns the express.js application to the Const express
const app = express(); //The application ('app') calls express
const port = 3000; //The port is defined, as in this case, we are intializing our const to call 3000 on our local machine


//Using the get method and passing 2 arguments which are request and response. Note we are using ES6 fat arrow
//notation to implement the body of code. The send method nested inside our code body contains a string 
//to display in the window object when the user visits the "/" endpoint
app.get("/", (req, res) => {
	/*I commented out the below code to replace it with the new method call res.sendFile with contains
	a node global call __dirname . We concatenated the endpoint "/index.html" to show the index.html
	file. We need to tell the server exactly where to find the index.html file. Control C in your terminal
	to stop the localhost and re-enter node app.js and go to the browser to see the index.html file.  */
	// res.send("My Node.js Demo");
	res.sendFile(__dirname + "/index.html");
});


//app.listen starts the server and commands it to listen on port 3000. Make sure to enter 
//node app.js in the terminal to start the localhost server
app.listen(port, () => {
	console.log("Server listening on port: " + port);
});

//In the terminal, I entered "npm instal express --save" to install express
//The module installs a package.json file as a dependency in our project folder