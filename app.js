const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const orders = require("./routes/order");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

// Set where we serve static files
app.use(express.static(__dirname + "/public"));
// Set where we find views
app.set("views", __dirname + "/views" );

// Manually setting a route
app.get("/", function(request, response) {

  response.sendFile('index.html', { root: __dirname + '/views' });
});

app.get('/about', function(request, response) {
  response.sendFile('about.html', { root: __dirname + '/views' });
});

app.get('/menu', function(request, response) {
  response.sendFile('menu.html', { root: __dirname + '/views'});
});

app.get('/mission', function(request, response) {
    response.sendFile('mission.html', { root: __dirname + '/views' });
});

app.get('/location', function(request, response) {
    response.sendFile('location.html', { root: __dirname + '/views'});
});

app.use("/products", orders);


// Start the server
app.listen(3000);
