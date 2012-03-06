## Create a CoffeeScript Project

For this tutorial, you'll need to first create a git project in Cloud9. Then, clone an existing Coffescript project on GitHub that was written by one of our developers. You do this by issuing the following command in the console:

	git clone git://github.com/fjakobs/cloud9-coffeescript-example.git

### A Simple CoffeeScript App in Cloud9 IDE

After cloning the project, you'll find three different files in the tree: _server.js_, _app.coffee<_, and _README.md_.

The _README.md_ file contains instructions to install coffee-script using the Node Package Manager. We've integrated Node Package Manager into Cloud9 IDE to enable users to install Node programs. Thus, from the Cloud9 IDE command line, type the following command to install the Coffeescript module:

	npm install coffee-script

Next, let's have a look at the _server.js_ file. The first line is the `require()` function, which is used to load the coffee-script module that you have just installed. On the second line, we declare the CoffeeScript file that contains your application. In the last line, we specify the port the server is listening to. When projects run within Cloud9 IDE, you must retrieve the port information using process.env.PORT.

Now, let's look at what the CoffeeScript file does. It creates an HTTP server with a function that is called for each request. In the callback function, you create a response with a status code of 200 (indicating that the request was fulfilled successfully) and the message "Hello World". You use 'module.exports' to enable the _server.js<_ file to use the code in the CoffeeScript file.

	http = require "http"

	module.exports = http.createServer((req, res) ->
	    res.writeHead 200, 'Content-Type': 'text/plain'
	    res.end 'Hello World\n'

Next, run the _server.js_ file and open the URL indicated in the console:

![Messages in the console about the server](./images/consoleServerMessage.png)

The result is:

![Messages in the console about the server](./images/coffescriptServer.png)

To stop your application, go back to the editor and click on the {:stopButton} button in the Menu.