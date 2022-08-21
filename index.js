function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function nameed(){console.log`function`};
}
function returnsAnAnonymousFunction(){
    return function(){console.log`function`};
}