# tejidosangelicales.store

This website aims to provide a platform for selling crochet products. It is built using Bootstrap and JavaScript React, offering a fully functional and reactive user experience.

## Motivation

The motivation behind creating this crochet-selling website is to provide a dedicated platform for my friend's crochet business. Currently, she sells her products through Facebook, but she wants to showcase her creations and upcoming products in a more organized and professional manner. As a software engineering student, I saw this as an opportunity to apply and enhance my skills while helping my friend grow her business.

## Build Status

Currently, the website is being converted from static to dynamic code, to later integrate the database.

## Features  

- [ ] User authentication
- [ ] Product listing and search functionality
- [ ] Shopping cart and checkout process
- [ ] User reviews and ratings
- [ ] Order tracking and history

## Tech/Framework used

- Bootstrap: A popular CSS framework for building responsive and visually appealing websites.

## Screenshots


<p align="center">{Home Page}</p>

![Screenshot 2023-08-27 111133](https://github.com/JeanSanchezFelix/tejidosangelicales.store/assets/109083974/2bca3912-7c13-4ebc-aad3-e81cc6aa18fa)

<p align="center">{One of the Product Pages}</p>

![Screenshot 2023-08-27 111658](https://github.com/JeanSanchezFelix/tejidosangelicales.store/assets/109083974/fafc23da-60a3-4000-a581-4e823e4b8f5d)

<p align="center">{Shopping Cart}</p>

![Screenshot 2023-08-27 110938](https://github.com/JeanSanchezFelix/tejidosangelicales.store/assets/109083974/dcd92266-97e0-4834-9f0e-642b83ccb4f1)

## Code Examples

Here is an example of how to add a product to the shopping cart:

```javascript

function updateOrderSummary() {
            let subtotal = 0;
            productRows.forEach(row => {
              const quantityCell = row.querySelector('.quantity-column');
              const priceCell = row.querySelector('.price-column');
              const price = parseFloat(priceCell.innerText.replace('$', ''));
              let quantity = parseInt(quantityCell.innerText);

              if (quantity <= 0) {
                row.style.display = 'none';
              } else {
                row.style.display = 'table-row';
                subtotal += price * quantity;
              }
            });

            orderSubtotalElement.innerText = `$${subtotal.toFixed(2)}`;

            // Update other costs and total based on the calculated subtotal
            const shippingCost = checkedSwitch.checked ? 10.00 : 0.00;
            const taxRate = 0.115;
            const taxCost = subtotal * taxRate;
            const totalCost = subtotal + shippingCost + taxCost;

            shippingCostElement.innerText = `$${shippingCost.toFixed(2)}`;
            taxCostElement.innerText = `$${taxCost.toFixed(2)}`;
            totalCostElement.innerText = `$${totalCost.toFixed(2)}`;
          }
```

## How to Use

Follow these steps to use the crochet-selling website:

  1. Browse through the available products or use the search functionality to find specific items.
  2. Click on a product to view more details and add it to your shopping cart.
  3. Proceed to the checkout process, providing the necessary information.
  4. Track your orders and view your order history.

## Credits

<jeanpiere.sanchez@upr.edu>
