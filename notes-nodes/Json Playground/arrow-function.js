// var square =(x) => {
//     return x*x;
// }
var square = x => x*x ;  //for single expression adn single parenthesis you need only one line it will automatically return
console.log(square(9));

var user ={
    name: 'Sachin',
    sayHi : () => {
        console.log(`Hi, this is ${this.name}`);  //Arrow function doesn't work with this keyword. 
    },
    sayHiall () {
        console.log(`Hi, this is ${this.name}`);  //This is alternative for arrow functions for tdefining object literals 
                                                  //with this keyword
    }

}
user.sayHiall();

