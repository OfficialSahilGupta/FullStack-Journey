
(function mama(){
    // named iife
    console.log(`your are good to go`)
}());
// example of iife

( () => {
    console.log(`you are awesome`);
})();

// if we want to execute more like this then, explicitly we need to adjust the comma at every iife statement
( (name) => {
    console.log(`${name} is the new codeforce winner`);
    
})("random")
