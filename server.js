var express = require('express');
var jobModel = require('./models/Job');
var jobsData = require('./jobs-data.js');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))

app.get('/api/jobs', function(req, res) {
	jobsData.findJobs().then(function(error, collection) {
		res.send(collection);
	});
});

app.get('*', function(req, res) {
	res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://jobsearcher:jobsearcher@ds031925.mlab.com:31925/jobsearcher')
.then(function() {
	console.log('connected to mongodb successfully');
	jobsData.seedJobs();
});

console.log('port', process.env.PORT);
console.log('IP', process.env.IP);

app.listen(process.env.PORT, process.env.IP, function() {
	console.log('Listening...')
});