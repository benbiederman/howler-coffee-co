const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');
const navListLinks = document.querySelectorAll('.nav-list li');
const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartList = document.querySelector('.shopping-cart-list');
const logo = document.querySelector('.logo');
const shopSection = document.querySelector('.shop-section');
const shopBtns = document.querySelectorAll('.btn-product');




navMenu();
shopProducts();

//Navigation Menu
function navMenu() {
    logo.addEventListener('click', () => {
        logo.href = "index.html";
    })
    

    //Menu Button
    menuBtn.addEventListener('click', () => {
        //Removes active Shopping Cart
        shoppingCartList.classList.remove('shopping-cart-list-active')

        //Opens Nav List
        navList.classList.toggle('nav-list-active');
        menuBtn.classList.toggle('menu-btn-active');

        //Nav List Link animations
        navListLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navSlide 0.5s ease forwards ${index /5  + 0.5}s`;
            }
        })
    })

    //Shopping Cart Button
    shoppingCart.addEventListener('click', () => {

        //Removes active menu buttons
        navList.classList.remove('nav-list-active');
        menuBtn.classList.remove('menu-btn-active');

        //Removes List Link Animation
        navListLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
        })

        //Opens Shopping Cart List
        shoppingCartList.classList.toggle('shopping-cart-list-active')

    })
}


function shopProducts() {
    // Products
    const bucksawBlend = {
        name: "Bucksaw Blend",
        price: 20,
        productPhoto: "img/products/bucksaw-blend.jpg",
        productDescription: "Howler Coffee Bucksaw Blend"
    }

    const colombia = {
        name: "Colombia",
        price: 18,
        productPhoto: "img/products/colombia.jpg",
        productDescription: "Howler Coffee Colombia blend"
    }

    const ethiopia = {
        name: "Ethiopia",
        price: 25,
        productPhoto: "img/products/ethiopia.jpg",
        productDescription: "Howler Coffee Ethiopia blend"
    }

    const papuaNewGuinea = {
        name: "Papua New Guinea",
        price: 20,
        productPhoto: "img/products/papua-new-guinea.jpg",
        productDescription: "Howler Coffee Papua New Guinea blend"
    }

    const peru = {
        name: "Peru",
        price: 20,
        productPhoto: "img/products/peru.jpg",
        productDescription: "Howler Coffee Peru blend"
    }

    const tanzaniaPeaberry = {
        name: "Tanzania Peaberry",
        price: 18,
        productPhoto: "img/products/tanzania-peaberry.jpg",
        productDescription: "Howler Coffee Tanzania Peaberry blend"
    }

    const products = [bucksawBlend, colombia, ethiopia, papuaNewGuinea, peru, tanzaniaPeaberry]

    for(let i = 0; i < products.length; i++){
        //Create a new product for each item in products array
        const product = document.createElement('div');
        product.classList.add('product');
        shopSection.appendChild(product);

        //Add product image and description
        const image = document.createElement('img');
        image.src = products[i].productPhoto;
        image.alt = products[i].productDescription;
        product.appendChild(image)

        //Product Name
        const productName = document.createElement('p');
        productName.textContent = products[i].name;
        product.appendChild(productName);

        //Product price
        const productPrice = document.createElement('p');
        productPrice.textContent = "$"+products[i].price + " / pound";
        product.appendChild(productPrice);

        const button = document.createElement('button');
        button.textContent = "Add to Cart"
        button.classList.add('btn-primary')
        button.classList.add('btn-product')
        product.appendChild(button);

        button.addEventListener('click', (e) => {
            console.log(products[i].name);
        })
    }    
    
}


