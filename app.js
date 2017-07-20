const express = require("express");
const app = express();

// Set where we serve static files
app.use(express.static(__dirname + "/public"));
// Set where we find views
app.set("views", __dirname + "/views" );

// Manually setting a route
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/views/index.html')
});
// get "/" do
//   "Hello World!"
// end


// Having defined the routes in a separate file
const test = require("./routes/test");
app.use("/test", test);

// Start the server
app.listen(3000);
