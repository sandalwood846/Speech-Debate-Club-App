

if (Meteor.isServer) {
	Meteor.publish("users", function() {
		return Meteor.users.find();
	});
	Accounts.onCreateUser (function(options, user){
		console.log("new user");
		user.profile = options.profile;
		user.notuploaded = true;
		user.pdfname = "";
		user.base64 = "";
		if (user.username == "Artem") {
			user.admin = true; 
			user.classname = "";
		}
		else {
			user.member = true;
		}
		if (user.member == true) {
			user.classname = "uploadedpics";
		}
		if (options.email) {
			Meteor.setTimeout(function() {
				Accounts.sendVerificationEmail(user._id);
			}, 2 * 1000);
		}
		
		return user;
	});

}


