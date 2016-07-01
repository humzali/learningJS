
function verifyAge() {
    
    // hold user's age, text to display after calculation
    var text

    // Get the value of the input field with id="age"
    userAge = document.getElementById("age").value;

    // If userAge is Not a Number or less than one or greater than 10
    if (isNaN(userAge) || userAge < 18) {
        text = "You are not old enough to experience this website..";
    } else {
        text = "Congrats! You're golden...";
    }
    document.getElementById("demo").innerHTML = text;
}


function saveAndDisplayName() {
    
    var userName, text

    // Get the user's name 
    userName = document.getElementById("name").value;

    if(userAge < 18) { 
        text = "Sorry... you can't sign up"
    }
    else {
        text = "Thanks " + userName + ".";
    }

    document.getElementById("anotherdemo").innerHTML = text;
} 


function multiplyAge() { 
    
    var multipliedAge; 

    multipliedAge = 10*userAge;

    alert("Hey, your age multiplied by 10 is  " + multipliedAge);
}

function resetFields() {

    document.getElementById('age').value='';
    document.getElementById('name').value='';

}
