/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //var awesomeThoughts;
 //awesomeThoughts= "Iam Lloyd and I am awesome!";
 //console.log(awesomeThoughts);
 //var email="cameron@udacity.com";
 //var newEmail=email.replace("udacity","gmail");
 //console.log(email);
 //console.log(newEmail);
 //var awesomeThoughts= "My name is Lloyd and I am awesome";
 //var funThoughts=awesomeThoughts.replace("awesome","fun");
 //$("#main").append(funThoughts);
 var formattedName = HTMLheaderName.replace("%data%","Lloyd");
 var formattedRole = HTMLheaderRole.replace("%data%","Student");
 $("#header").append(formattedName);
 $("#header").append(formattedRole);