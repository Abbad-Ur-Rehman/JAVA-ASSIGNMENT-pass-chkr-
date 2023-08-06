// 4- Password checker

//     Using an array of allowed passwords, this exercise will create an
//     application to check if one of these password string values exists in an array
//     that lists all the accepted passwords. Set a Promise to check if the password
//     is valid, and upon the result either resolve with the status of true or reject
//     with the status of false. Return the check results.

//     1. Create an array of allowed passwords.
const passwords = ['rehman','asif','ahmad'];

function login(password){
    return passwords.includes(password);

}



//     2. Create a login function that will check if the argument is a value that is
//     included in the passwords array. You can use indexof() or the
//     includes() method to check the array for a value and return a
//     Boolean value of the result.
//     The includes() method is an array method that can check
//     whether a certain value is included among the items in the array. It
//     will return a Boolean value depending on the result.

//     3. Add a function that returns a Promise. Using resolve and reject ,
//     return a JavaScript object with the Boolean of true or false to
//     indicate the password validity status.
function check(password){
    return new Promise((resolve, reject) =>{
        if(login(password)){
            resolve(true);
        }else{
            reject(false)
        }

    })
}
//     4. Create a function that checks the password, sending it to the login
//     function, and using then() and catch() , outputs the result of either
//     the rejected password or the resolved password.
function checkPassword(password){
    check(password).then((result)=>{
        console.log('Password is vaild', result)
    }).catch((error)=>{
        console.log('Password is invaild' , error)
    })

}
checkPassword('rehmana');
checkPassword('asif');
checkPassword("rehman");
//     5. Send several passwords, some within the array, others not, to the
//     checker function.