    // 1. Create a function named greet() that takes one argument, fullName .
    // That argument should be an array. Output the items of the array into
    // the console interpolated into a greeting message string.

    // 2. Create a second function that has two arguments: the first one is a
    // string for the user's full name, and the second is the callback
    // function.

    // 3. Split the string into an array using the split() method.

    // 4. Send the full-name array to the greet() function created in the first
    // step.

    // 5. Invoke the process of the callback function.


// =======================================================

    // 1. Create a function named greet() that takes one argument, fullName .
    // That argument should be an array. Output the items of the array into
    // the console interpolated into a greeting message string.
    let greet =function(fullName){
            let greeting = `Hello ${fullName}`
            console.log(greeting);
    }


    // 2. Create a second function that has two arguments: the first one is a
    // string for the user's full name, and the second is the callback
    // function.

    let secondFunction = function (secondFunctionfullnameString , callbackFunction){
    // 3. Split the string into an array using the split() method.
        const secondFunctionfullnameArray = secondFunctionfullnameString.split(' '); 
    // 4. Send the full-name array to the greet() function created in the first
    // step.
    callbackFunction(secondFunctionfullnameArray);
    }
    // 5. Invoke the process of the callback function.
     let secondFunctionfullnameString = 'Abad-Ul-Rehman';

     secondFunction(secondFunctionfullnameString , greet)