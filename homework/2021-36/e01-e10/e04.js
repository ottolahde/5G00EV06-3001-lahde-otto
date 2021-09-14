/*
4. Create function `isPositiveInteger(value, onSuccess, onError)`.
Function checks if given argument is positive, if so it will call `onSuccess` function provided as argument.
Otherwise it will call onError function. Test. So function will get a function as an argument.
*/

const onSuccess = () => {
    console.log("Positiivinen")
}
const onError = () => {
    console.log("Ei positiivinen")
}

const isPositiveInteger = (value) => {
    (value>0 ? onSuccess() : onError())
}

console.log(isPositiveInteger(30));