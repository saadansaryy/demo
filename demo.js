let name1 = "Saad";
let name2 = "Ayush";
let name3 = "Gopal";
let name4 = "Rahul";
let greetText = "Welcome to Alma Better";

// function greet(name,greetText="Welcome"){
//     console.log(`HEllO! ${name}. ${greetText}`);
//     console.log(`${name} is a Web Developer Enthusiast.`);
// }
// greet(name1,greetText);
// greet(name2,greetText);
// greet(name3,greetText);
// greet(name4,greetText);



function addStrings(a,b,c){
    let d = `${a} ${b} ${c}`;
    return d;
}
let returnString = addStrings("Die","Hard","Again");
console.log(returnString);