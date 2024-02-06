///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
}, 0);

console.log("Total sum of all food prices:", summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
   
    const taxAmount = cartTotal * tax;
    let finalPrice = cartTotal + taxAmount;
    finalPrice -= couponValue;
    return finalPrice;
}

const cartTotal = 100;
const couponValue = 10;
const tax = 0.06;

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
console.log("Final Price after applying coupon and tax:", finalPrice);



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
Name: This property stores the name of the customer.
Data Type: String
Explanation: The name is typically a string of characters representing the customer's first and last name.

Email: This property stores the email address of the customer.
Data Type: String
Explanation: Email addresses are strings and are used for communication purposes and account identification.

Address: This property stores the customer's delivery address.
Data Type: String
Explanation: The address is typically a string that includes the street address, city, state, and postal code, needed for delivery.

Phone Number: This property stores the customer's phone number.
Data Type: String
Explanation: Phone numbers are typically stored as strings to preserve leading zeros and other formatting details. They are essential for contacting the customer regarding their order or delivery.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, Cityville, State, 12345",
    phoneNumber: "123-456-7890"
};
