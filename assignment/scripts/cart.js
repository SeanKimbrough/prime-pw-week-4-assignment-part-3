console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!

//////////////////////////////////////////////////////////////////
let basket = [];
function addItem(item){
    let newItem = basket.push(item)
    return true;
}

function listItems(){
    for (let i=0; i < basket.length; i++){
        const individualValue = basket[i];
        console.log('individual item' , individualValue);
    }
}
function empty(){
    basket = [];
}
console.log(empty(basket));
console.log('basket is:' , basket);
console.log('Adding Pineapple, expect true' , addItem('Pineapple'));
console.log('Added Grapes, expect true' , addItem('Grapes'));
console.log('Added Watermelon, expect true' , addItem('Watermelon'));
console.log('Basket is now' , basket);
console.log(listItems());
console.log(empty());
console.log(basket);
///////////////////////////////////////////
// function full(){
//     const maxItems = 5;
//     return false;
// }
// let newBasket = [];
// function addItem(item){
//     let isFull = 5
// }
// if (newBasket < 5){
//     return false;
// }
// else {
// return true;
// }
// console.log(' New basket:' , newBasket);
// Couldnt figure out how to get the funtion line 40 to work properly