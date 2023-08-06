// 3- Practice exercise 13.3

var counter = 0;

let promiseFunction = (x) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            counter++
            resolve(`x ready ${x} counter: ${counter}`);
        }, 1000*x)

    })
}
async function next(x) {
    console.log(`x ready ${x} counter: ${counter}`);
    let capture = await promiseFunction(x);
    console.log(capture)
}

for (let i = 0; i < 10; i++) {
    next(i)
}
