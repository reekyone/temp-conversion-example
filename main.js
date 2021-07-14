function toCelsius() {   //Function to convert Fahrenheit to Celsius
    var fahrenheit = document.getElementById("f-temp").value;  //Gets value from text in input box
    var celsius = (5/9) * (fahrenheit-32);  //Conversion formula to Celsius

    if (isNaN(fahrenheit) || fahrenheit === "") {  //Checks to see if it's a number
        document.getElementById("c-result").style.display = "none";
        alert("Please enter a number");
        return;
    }

    celsius = Math.round(celsius)  //Rounds to whole number

    document.getElementById("c-result").style.display = "block";
    document.getElementById("c-result").innerHTML = 
    fahrenheit + "&#176;F" + " is equal to " + celsius + "&#176;C";
}

function toFahrenheit() { //Function to convert Celsius to Fahrenheit
    var celsius = document.getElementById("c-temp").value;  //Gets value from text in input box
    var fahrenheit = (celsius * (9/5) + 32);  //Conversion formula to Fahrenheit

    if (isNaN(celsius) || celsius === "") {  //Checks to see if it's a number
        document.getElementById("f-result").style.display = "none";
        alert("Please enter a number");
        return;
    }

    fahrenheit = Math.round(fahrenheit); //Rounds to whole number

    document.getElementById("f-result").style.display = "block";
    document.getElementById("f-result").innerHTML = 
    celsius + "&#176;C" + " is equal to " + fahrenheit + "&#176;F";
}

//Click to call buttons
document.getElementById("ftoc-convert").onclick = function() {toCelsius()};
document.getElementById("ctof-convert").onclick = function() {toFahrenheit()};