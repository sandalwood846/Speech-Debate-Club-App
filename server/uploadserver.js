

if (Meteor.isServer) {
	/*Meteor.publish('files', function(file){
		console.log("publish", file);
		return FilesCollection.find({
			name:file
		});
	});*/
	Meteor.methods ({
		'saveFile' : function(name, buffer) {
			FilesCollection.insert({
				name: name,
				base64: buffer
			})
			var currentUserId = Meteor.userId();
			console.log(currentUserId);
			Meteor.users.update({_id: currentUserId}, {$set: {base64: buffer}});
			Meteor.users.update({_id: currentUserId}, {$set: {pdfname: name}});
			Meteor.users.update({_id: currentUserId}, {$set: {notuploaded: false}});
			
		}
	});

}


