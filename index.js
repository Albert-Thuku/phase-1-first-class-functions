function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function hello(){
        return "Hello World!";
    };
}
const greeting = returnsANamedFunction();
console.log(greeting());

function returnsAnAnonymousFunction(){
    return function(){
        return "Goodbye";
    }
}
const exitGreeting = returnsAnAnonymousFunction();
console.log(exitGreeting());