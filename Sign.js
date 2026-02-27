var uname=document.getElementById("name");
var mail=document.getElementById("mail");
var pass=document.getElementById("pass");
var com=document.getElementById("com");
var error=document.getElementById("error");
var us=document.getElementById("us");
var prof=document.getElementById("prof");

function valid(){
	if(uname.value==""){
		error.innerText="Name is not required.";
		return false;
	}

	else if(us.value==""){
		error.innerText="You have to input a User name.";
		return false;
	}

	else if(mail.value==""){
		error.innerText="E-mail is not required.";
		return false;
	}

	else if(pass.value==""){
		error.innerText="Please enter a passcode containing more than 8 characters.";
		return false;
	}


	else if(pass.value.length<8){
		error.innerText="Password is not containing 8 characters.";
		return false;
	}

	else if(prof.value==""){
		error.innerText="You haven't entered your occupation yet.";
		return false;
	}

	else if(com.value==""){
		error.innerText="Please enter a contact number.";
		return false;
	}

	else if(com.value.length != 11){
		error.innerText="Your contact number is wrong.";
		return false;
	}

	else{
		error.innerText="";
		return true;
	}
}