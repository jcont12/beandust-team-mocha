const express = require("express");
const app = express();

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


// Start the server
app.listen(3000);
