function doIt(a){
    console.log((a? 'world' : 'hello'))
}

doIt(false) // outputs hello
doIt(true)  // outputs world