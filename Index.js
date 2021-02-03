Config = require('./Storage/Config.json');

Discord = require("discord.js");
Client = new Discord.Client();
// Bot = new Discord.Client();

var Express = require("express");
var App = Express();
var Path = require("path");
var Parser = require("body-parser")

App.use(Parser.urlencoded({extended: true}));
App.set("views", Path.join(__dirname, "/views"));
App.set("view engine", "ejs")
App.use(Express.static("public"));
App.get("/", function(req, res) {res.render("index", {Client: Client})});
App.get("/stats", function(req, res) {res.render("stats", {Client: Client})});
var listeners = App.listen(process.env.PORT, function() {console.log("Your app is listening on port " + listeners.address().port)});

Client.on("ready", () => {console.log("I am Looking Forward to this :D")})

Client.login(Config.Token)
