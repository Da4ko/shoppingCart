const productArray = [
    {
        id: 1,
        name: 'apple',
        price: 1
    },
    {
        id: 2,
        name: 'bread',
        price: 1.50
    },
    {
        id: 3,
        name: 'milk',
        price: 1.20
    },
    {
        id: 4,
        name: 'meat',
        price: 4.80
    },
    {
        id: 5,
        name: 'egg',
        price: 0.15
    }
];

let cart = [];
let totalPrice = 0;
let totalQuantity = 0;

const availableProducts = document.querySelector("#available-products");
const productsInCart = document.querySelector("#cart-items");

const totalPriceField = document.querySelector("#cart-total");
const totalQuantityField = document.querySelector("#item-count");

productArray.forEach((product) => {
    var listItem = document.createElement('li');

    var nameSpan = document.createElement('span');
    var priceSpan = document.createElement('span');

    var addBtn = document.createElement('btn');
    addBtn.textContent = "Add to cart";
    addBtn.style.background="green";
    addBtn.style.padding="5px"
    addBtn.style.borderRadius="5px";
    addBtn.style.cursor='pointer';

    addBtn.addEventListener('click', () =>{
        var productToAdd = document.createElement('li');
        var productInfo = document.createElement('span');

      var deleteButton = document.createElement('btn');
          deleteButton.textContent = "Remove";
          deleteButton.style.background="red";
          deleteButton.style.padding="5px"
          deleteButton.style.borderRadius="5px";
          deleteButton.style.cursor='pointer';

          deleteButton.addEventListener('click', () =>{
             productToAdd.remove();
             totalPrice-=product.price.toFixed();
             totalQuantity--;
             totalPriceField.textContent=totalPrice.toFixed(2);
             totalQuantityField.textContent=totalQuantity;
          })


        productInfo.textContent = product.name + " "+ product.price.toFixed(2)+"$" + "᲼᲼᲼᲼᲼᲼᲼᲼Quantity 1";
        productToAdd.appendChild(productInfo);
        productToAdd.appendChild(deleteButton);
        totalPrice+=product.price;
        totalQuantity++;

        productsInCart.appendChild(productToAdd);
        totalPriceField.textContent=totalPrice.toFixed(2);
        totalQuantityField.textContent=totalQuantity;
       // cart.push(product.name);
    })

    nameSpan.textContent = "" + product.name + " ";
    priceSpan.textContent = "Price: " + product.price.toFixed(2) + "$";

    listItem.appendChild(nameSpan);
    listItem.appendChild(priceSpan);
    listItem.appendChild(addBtn);
    
    availableProducts.appendChild(listItem);
    })


