function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}


console.log(createHelloWorld(n));