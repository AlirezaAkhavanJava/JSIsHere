console.log("Message from the Js");

document.getElementById("helloText").textContent = "Goodbye";
document.getElementById("welcome").textContent = "Oh , sorry you need to leave !";

let author = "Alireza";
if(author.startsWith('B')){

    document.getElementById("welcome").textContent = author ;

}