navMenus();
removeItem();
shoppingCartBalance()
fadeIn();

function fadeIn() {
    const aboutSection = document.querySelector('.about-section .container');

    document.addEventListener('scroll', () => {
        if(window.scrollY >= 500) {
            aboutSection.style.opacity = '1';
            aboutSection.style.animation = `slideUp 0.5s`
        }
    })
}


//Navigation and Cart Menu
function navMenus() {
    const menuBtn = document.querySelector('.menu-btn');
    const shoppingCart = document.querySelector('.shopping-cart');
    const shoppingCartList = document.querySelector('.shopping-cart-list');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    menuBtn.addEventListener('click', () => {
        //Minimizes Shopping Cart and opens/closes nav menu
        shoppingCartList.classList.remove('shopping-list-active');
        menuBtn.classList.toggle('menu-btn-active');
        navList.classList.toggle('nav-list-active');

        //Link Animation
        navLinks.forEach((link, index) => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('menu-btn-active');
                navList.classList.remove('nav-list-active');

                for(let i = 0; i < navLinks.length; i++){
                    navLinks[i].style.animation = '';
                }
            })

            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `linkSlide 0.5s ease forwards ${index / 7 + .5}s`
            }
        })
    })

    //      Shopping Cart         //
    shoppingCart.addEventListener('click', () => {

        //Closes Nav menu if open
        menuBtn.classList.remove('menu-btn-active');
        navList.classList.remove('nav-list-active');

        //Link Animation reset
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
        })

        //Opens/closes shopping cart
        shoppingCartList.classList.toggle('shopping-list-active') 
    })
}





//Shop Products
const howlerBlend = {
    name: 'Bucksaw Blend',
    price: 20,
    image: 'img/products/bucksaw-blend.jpg',
    description: "Howler Coffee Co's Bucksaw Blend",
    title: "Bold and citric with a strong body; lots of chocolate, floral flavors with a light citrus finish.",
    altImg: 'img/products/bucksaw-blend-alt.jpg',
}

const colombia = {
    name: 'Colombian',
    price: 18,
    image: 'img/products/colombia.jpg',
    description: "Howler Coffee Co's Colombiam Blend",
    title: "A bold, heavy body coffee with delicate notes of chocolate and a toasted sugar sweetness.",
    altImg: 'img/products/colombia-alt.jpg',
}

const ethiopia = {
    name: 'Ethiopian',
    price: 25,
    image: 'img/products/ethiopia.jpg',
    description: "Howler Coffee Co's Ethiopian Blend",
    title: "Light roast, light body with notes of fruit",
    altImg: 'img/products/ethiopia-alt.jpg',
}

const papuaNewGuinea = {
    name: 'Papua New Guinea',
    price: 22,
    image: 'img/products/papua-new-guinea.jpg',
    description: "Howler Coffee Co's Papua New Guinea Blend",
    title: "Mellow citrus and earthy notes with lemongrass and almond.",
    altImg: 'img/products/papua-new-guinea-alt.jpg',
}

const peru = {
    name: 'Peru',
    price: 20,
    image: 'img/products/peru.jpg',
    description: "Howler Coffee Co's Peru Blend",
    title: "Sweet with fruit acidity , lemongrass and toffee flavors.",
    altImg: 'img/products/peru-alt.jpg',
}

const tanzaniaPeaberry = {
    name: 'Tanzania Peaberry',
    price: 23,
    image: 'img/products/tanzania-peaberry.jpg',
    description: "Howler Coffee Co's Tanzania Peaberry Blend",
    title: "Dried fruit and cocoa notes with mellow citrus acidity.",
    altImg: 'img/products/tanzania-peaberry-alt.jpg',
}

const product = [howlerBlend, colombia, ethiopia, papuaNewGuinea, peru, tanzaniaPeaberry];

for(let i = 0; i < product.length; i++) {
    shop(product[i]);
}

//Create all the products in the product array
function shop(product) {
    const shopSection = document.querySelector('.shop-body');

    //Add new product
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    shopSection.appendChild(newProduct);

    //Add product img
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.description;
    product.title = product.title;
    newProduct.appendChild(productImg);

    //On enter - show alternative image
    productImg.addEventListener('mouseenter', () => {
        productImg.src = product.altImg;
    })

    //Returns to normal image on exit
    productImg.addEventListener('mouseleave', () => {
        productImg.src = product.image;
    })

    //Add product name
    const productName = document.createElement('h4');
    productName.textContent = product.name;
    newProduct.appendChild(productName);

    //Add product price
    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;
    newProduct.appendChild(productPrice);

    //Add to cart button
    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('btn-primary');
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.textContent = 'Add To Cart';
    newProduct.appendChild(addToCartBtn);

    //Add product to cart on add to cart
    addToCartBtn.addEventListener('click', () => { 
        const shoppingCartItems = document.querySelector('.items');

        if(shoppingCartItems.innerHTML.includes(product.name)) {
            cartPopup(product)
        } else {
            addToCart(product);
        }
    })
}

//Adding product to cart
function addToCart(product) {
    const shoppingCartItems = document.querySelector('.items');
    product.quantity = 1;

    //New Div for product
    newItemDiv = document.createElement('div');
    newItemDiv.classList.add('item');
    shoppingCartItems.appendChild(newItemDiv);

    //Remove button
    newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add('remove');
    newRemoveBtn.textContent = 'X';
    newItemDiv.appendChild(newRemoveBtn);

    //Product Img
    newItemImg = document.createElement('img');
    newItemImg.src = product.image;
    newItemImg.alt = product.description;
    newItemDiv.appendChild(newItemImg);

    //Product Details Div
    newItemDetailsDiv = document.createElement('div');
    newItemDetailsDiv.classList.add('product-details');
    newItemDiv.appendChild(newItemDetailsDiv);

    //Product Name
    newItemNameH5 = document.createElement('h5');
    newItemNameH5.textContent = product.name;
    newItemDetailsDiv.appendChild(newItemNameH5);

    //Product Price
    newItemPriceP = document.createElement('p');
    newItemPriceP.textContent = product.price;
    newItemPriceP.classList.add('price');
    newItemDetailsDiv.appendChild(newItemPriceP);
    
    //Product Quantity Div
    newItemQuantityDiv = document.createElement('div');
    newItemQuantityDiv.classList.add('product-quantity');
    newItemDiv.appendChild(newItemQuantityDiv);

    //Minus Button
    newMinusBtn = document.createElement('button');
    newMinusBtn.classList.add('minus');
    newMinusBtn.textContent = '-';
    newItemQuantityDiv.appendChild(newMinusBtn);

    //Product Quantity
    newItemQuantityP = document.createElement('p');
    newItemQuantityP.textContent = product.quantity;
    newItemQuantityP.classList.add('quantity');
    newItemQuantityDiv.appendChild(newItemQuantityP);

    //Plus Button
    newPlusBtn = document.createElement('button');
    newPlusBtn.classList.add('plus');
    newPlusBtn.textContent = '+';
    newItemQuantityDiv.appendChild(newPlusBtn);

    //Run Shopping cart balance
    shoppingCartBalance()
}

function removeItem(){
    const shoppingCartItems = document.querySelector('.items');
    
    shoppingCartItems.addEventListener('click', (e) => {
        let eventTarget = e.target;
    
        //If clicking Remove
        if(eventTarget.className == 'remove') {
            let item = eventTarget.parentNode;
            let items = eventTarget.parentNode.parentNode;
            items.removeChild(item);

        //If clicking minus button
        } else if(eventTarget.className == 'minus') {
            let minus = e.target.nextElementSibling;

            //If Quantity gets to zero, remove, else subtract one
            if(minus.textContent <= 1){
                let item = minus.parentNode.parentNode;
                let items = item.parentNode;
                items.removeChild(item);
            } else {
                minus.textContent--;
            }

        //If clicking plus button
        } else if(eventTarget.className == 'plus'){
            plus = eventTarget.previousElementSibling;
            plus.textContent++;
        }


        shoppingCartBalance()
    })
}

//Calculates cart counter and total price
function shoppingCartBalance() {
    const shoppingCartItems = document.querySelector('.items');
    const cartButton = document.querySelector('.btn-cart')
    const emptyCart = document.querySelector('.empty');
    const itemCounter = document.querySelector('.item-counter');

    //If cart is empty, clear button and display empty message
    if(shoppingCartItems.innerHTML === '') {
        cartButton.style.display = 'none';
        emptyCart.style.display = 'flex';
        itemCounter.style.display = 'none';

    //If cart has item, display counter and total price
    } else {
        emptyCart.style.display = 'none';
        cartButton.style.display = 'block';
        cartButton.textContent = `Checkout - $${totalPrice()}`;
        itemCounter.style.display = 'flex';
        itemCounter.textContent = quantities();
    }
}

//Creates popup for user to know item was already added to cart
function cartPopup(product) {
    const shopSection = document.querySelector('.shop-body');

    //Create popup background
    const cartPopupDiv = document.createElement('div');
    cartPopupDiv.classList.add('cart-popup');
    shopSection.appendChild(cartPopupDiv);

    //Create message
    const cartPopupMessageDiv = document.createElement('div');
    cartPopupMessageDiv.classList.add('popup-message');
    cartPopupDiv.appendChild(cartPopupMessageDiv);

    const popupMessage = document.createElement('h4');
    popupMessage.textContent = `${product.name} is already in your cart`;
    cartPopupMessageDiv.appendChild(popupMessage);

    const popupButton = document.createElement('button');
    popupButton.classList.add('btn-primary');
    popupButton.classList.add('popup-btn');
    popupButton.textContent = 'Okay';
    cartPopupMessageDiv.appendChild(popupButton);

    //Remove message on okay
    popupButton.addEventListener('click', () => {
        shopSection.removeChild(cartPopupDiv);
    })
}

//Returns quantity of total items
function quantities() {
    const productQuantity = document.querySelectorAll('.quantity');
    let totalQuantity = 0;

    for(let i = 0; i < productQuantity.length; i++){
        let quantity = parseInt(productQuantity[i].innerHTML);
        totalQuantity = quantity += totalQuantity;
    }

    return totalQuantity;
}


//Returns price of items in cart.
function totalPrice() {
    const productPrice = document.querySelectorAll('.price');
    const productQuantity = document.querySelectorAll('.quantity');
    let totalPrice = 0;

    for(let i = 0; i < productPrice.length; i++){
        let itemPrice = parseInt(productPrice[i].innerHTML);
        let itemQuantity = parseInt(productQuantity[i].innerHTML);
        let price = itemPrice * itemQuantity;
        totalPrice = price += totalPrice;
    }

    return totalPrice;
}






















