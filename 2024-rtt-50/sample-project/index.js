
// code fron slack
//FS Template Engine 
const express = require("express");
const app = express();
const port = 5000;
app.use(express.static("./styles"));
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
/* HOME - /  - GET
app.get("/", (req, res) => {
  res.send("Hello from the home page!");
});*/
app.get("/about", (req, res) => {
  res.send("Hello from the about page!");
});

app.get('/user/:name', (req,res)=>{
  res.send(`Hello ${req.params.name}, Thank you for submitting you request!`)
})
app.get("/user/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});
app.get("/user/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});
app.get("/user/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});

// require the filesystem module
const fs = require("fs");
// define the template engine
app.engine("perscholas", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file,npm start

    // convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "perscholas"); // register the template engine

app.get("/", (req, res) => {
  const options = {
    title: "Rendering Views with Express",
    content:
      "Here, we've created a basic template engine using <code>app.engine()</code> \
      and the <code>fs</code> module, then used <code>res.render</code> to \
      render this page using custom content within the template.<br><br> \
      Generally, you won't want to create your own view engines, \
      but it important to understand how they work behind the scenes. \
      For a look at some popular view engines, check out the documentation for \
      <a href='https://pugjs.org/api/getting-started.html'>Pug</a>, \
      <a href='https://www.npmjs.com/package/mustache'>Mustache</a>, or \
      <a href='https://www.npmjs.com/package/ejs'>EJS</a>. \
      More complete front-end libraries like React, Angular, and Vue \
      also have Express integrations.",
  };

  res.render("index", options);
});

