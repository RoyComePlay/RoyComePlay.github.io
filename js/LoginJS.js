var firstName;
var lastName;
var email;
var password;
var newUser;

function onSubmit() 

{
  
    firstName=document.getElementById("firstName").value;
    lastName=document.getElementById("lastName").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    newUser=[firstName, lastName,email, password];
    
    alert("Thank You!");    

}


localStorage.setItem("firstName",document.getElementById("firstName").value);
localStorage.setItem("lastName",document.getElementById("lastName").value);
localStorage.setItem("email",document.getElementById("email").value);
localStorage.setItem("password",document.getElementById("password").value);




// var lastName=document.getElementById("lastName").value;

// if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem(lastName, "lastName");
//     // Retrieve
//     document.getElementById("lastName").innerHTML = localStorage.getItem(lastname);
// } else {
//     document.getElementById("lastName").innerHTML = "Sorry, your browser does not support Web Storage...";
// }









// alert(
// myFunction (5)
// )

// function  myFunction(p1) {
//     return p1 * (p1-1) * (p1-2)* (p1-3) * (p1-3);      }        // The function returns the product of p1 and p2


// alert(
// myFunction (5) 
// )

// function  myFunction(p1) {
//     return p1*p1;
// }

// alert(
//     newFuction (5,6)
//     )
    
//     function  newFuction(p1,p2) {
//         return p1 * p2;     
    
//     }  

    // function myFunction(p1,p2){alert(p1 + p2);}
    // myFunction("Pit is a Carpet Chewer"," and brown");

    // alert(
    //     newFuction ("Roy","Pete")
    //     )
        
    //     function  newFuction(p1,p2) {
    //         return "Hi, Mr."+" "+p1+" "+",Your dog name is"+" "+p2;
    //     }  


//     alert(
//         DER (5,4)
//     )

//     function DER (p1,p2) {

// return p1*p2;
//     }

//// Excercise 1

// var colorsInEnglish= ["Red", "Yellow", "White", "Brown"]

// var colorsInHebrew = {Red:"Adom", Yellow:"Tzahov", White:"Lavan", Brown:"Chum"}

//// Excercise 2

// var dog = {name:"Pete", 
//            height:75, 
//            toy:"ball", 
//            breed:"basenjie", 
//            age:1.75, 
//            dogToy: function (){
//     return this.name + " " + "likes to play with" + " " +this.toy;
//     }

// }

// dog.dogToy()

// // Excercise 3

// var mark = {name:"my name is Pete", 
//             introSentence: function (){
//             return this.name + " ,you took my toy, prepare for a bite";
//     }

// }

// mark.introSentence()

// // Excercise 4

// var dog = {name:"Pete", 
//            height:75, 
//            toy:"ball",
//            Color:"brown",
//            breed:"basenjie", 
//            age:1.75, 
//            dogToy: function (){
//            return this.color + " " + this.breed + " " + "likes to play with a" + " " + this.toy;
//     }

// }

// dog.breed = "ailain";
// dog.color = "green";

// "The " + dog.dogToy()


// // Excercise 6


// var cube = {
// volume: function  newFuction(p1,p2,p3) {
//            return p1*p2*p3;
//        }  

//     }

// cube.volume(2,2,2)

// Excercise 7

// var groceryList = [Milk, ]