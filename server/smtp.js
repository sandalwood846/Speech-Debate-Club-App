Meteor.startup(function() {
	smtp = {
		username: "postmaster@sandbox[yourkey].mailgun.org", 
		password: "[yourpassword]", 
		server: "smtp.mailgun.org", 
		port: 587
		
	};	
	process.env.MAIL_URL = 'smtp://' + 
					encodeURIComponent(smtp.username) + ':' +
					encodeURIComponent(smtp.password) + '@' +
					encodeURIComponent(smtp.server) + ':' + 
					smtp.port;
});

