// arguments object - no longer bound with arrow functs

const add= (a,b) =>{
    //console.log(arguments);
    return a+b;
};
console.log(add(55,1,1001));

// this keyword - no longer bound
const user= {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in '+ city);
        
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in '+ city);
        });*/
    }
};
console.log(user.printPlacesLived());

//Challenge area

const multiplier ={
    //numbers - array of numbers
    //multiplyBy - single number
    //multiply - return new array wher the nym have been multiplied
    multiplyBy: 3,
    numbers: [10,20,30],
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply()); 