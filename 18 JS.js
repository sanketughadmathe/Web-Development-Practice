// var lbs = prompt("What is the weight in pounds (lbs)?")
// var kg = lbs*0.454
// alert("That is: "+kg+" kilograms")
// // alert("That is:  "+kg+" kilograms")
// console.log("Conversion Completed")




var fn = prompt("Hello and Welcome. Please enter your first name:")
var ln = prompt("Please enter your Last Name:")
var age = prompt("How old are you?")
var height = prompt("How tall are you in centimeters?")
var pn = prompt("What is the name of your pet?")
alert("Thank you so much for the information.")

var final_check = true

if (fn[0].toLowerCase === ln[0].toLowerCase) {
    final_check = true
}

if (age>20 && age<30) {
    final_check = true    
}

if (height>170) {
    final_check =true
}

var len_Pn = pn.length

if (pn[len_Pn-1] = "y") {
    final_check = true
}

if (final_check) {
    console.log("Welcome Comrade! You've passed the Spy Test")
}