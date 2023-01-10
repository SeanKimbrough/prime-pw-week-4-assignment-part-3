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


