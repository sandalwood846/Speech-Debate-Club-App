
if (Meteor.isClient) {
	
	Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'username',
        fieldLabel: 'First Name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your first name");
            return false;
          } else {
            return true;
          }
        },
		saveToProfile: true
    }, {
        fieldName: 'lastname',
        fieldLabel: 'Last name',
        inputType: 'text',
        visible: true,
		saveToProfile: true,
		 validate: function(value, errorFunction) {
          if (!value) {
            errorFunction("Please write your last name");
            return false;
          } else {
            return true;
          }
        }
    }, {
        fieldName: 'parentemail',
        fieldLabel: 'Parent Email',
        inputType: 'text',
        visible: true,
		saveToProfile: true
    },{
        fieldName: 'evsdcode',
        fieldLabel: 'EVSD Code',
        inputType: 'text',
        visible: true,
		validate: function (value, errorFunction) {
			if (value !== "EVSD") {
				errorFunction("Wrong code!");
				return false;
			} else {
				return true;
			}
		}
    }, {
        fieldName: 'terms',
        fieldLabel: 'I accept the terms and conditions',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('You must accept the terms and conditions.');
                return false;
            }
        }
    }]
});
Template.memberprofile.helpers ({
	'user' : function () {
		var currentUserId = Meteor.userId();
		return Meteor.users.find({_id: currentUserId});
		
	},
	'admin' : function(user) {
		var currentUserId = Meteor.userId();
		var currentUser = Meteor.users.find({_id: currentUserId});
		return currentUser;
	},
	'allusers' : function() {
		var allusers = Meteor.users.find();
		var usernumber = Meteor.users.count();
		return allusers;
	}
});

	Meteor.subscribe("users");
	
}




