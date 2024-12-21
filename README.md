# **Tejidos Angelicales Store**  

This website is a modern platform for selling crochet products, designed to provide a seamless and interactive shopping experience. Built using **Bootstrap** and **React**, it combines aesthetic appeal with functionality to support a small crochet business.  



## **Motivation**  

This project was inspired by the desire to help a friend take her crochet business to the next level. Moving from Facebook sales to a dedicated platform not only showcases her talent but also ensures a more professional and organized presentation of her work.  
As a software engineering student, this project was an opportunity to apply my skills, learn, and contribute meaningfully to a real-world cause.  



## **Build Status**  

The project is currently in progress:  
- Migrating from static to dynamic code.  
- Preparing for integration with a database backend.  



## **Key Features**  

Planned features include:  
- **User Authentication:** Secure login and account management.  
- **Product Listing & Search:** Easy navigation and search functionality.  
- **Shopping Cart & Checkout:** Smooth shopping experience with cart management.  
- **User Reviews & Ratings:** Customers can provide feedback and rate products.  
- **Order Tracking:** Real-time order history and tracking updates.  



## **Tech Stack**  

- **Frontend:**  
  - **Bootstrap:** For responsive and stylish UI components.  
  - **React:** For dynamic, component-based development.  
- **Backend (Planned):**  
  - Database integration for user accounts, orders, and inventory.  



## **Screenshots**  

### Home Page  
<p align="center">
<img src="https://github.com/JeanSanchezFelix/tejidosangelicales.store/assets/109083974/2bca3912-7c13-4ebc-aad3-e81cc6aa18fa" alt="Home Page Screenshot">
</p>  

### Product Page  
<p align="center">
<img src="https://github.com/JeanSanchezFelix/tejidosangelicales.store/assets/109083974/fafc23da-60a3-4000-a581-4e823e4b8f5d" alt="Product Page Screenshot">
</p>  

### Shopping Cart  
<p align="center">
<img src="https://github.com/JeanSanchezFelix/tejidosangelicales.store/assets/109083974/dcd92266-97e0-4834-9f0e-642b83ccb4f1" alt="Shopping Cart Screenshot">
</p>  



## **Code Example**  

Here's a snippet demonstrating how to calculate the order summary in the shopping cart:  

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

    const shippingCost = checkedSwitch.checked ? 10.00 : 0.00;
    const taxRate = 0.115;
    const taxCost = subtotal * taxRate;
    const totalCost = subtotal + shippingCost + taxCost;

    shippingCostElement.innerText = `$${shippingCost.toFixed(2)}`;
    taxCostElement.innerText = `$${taxCost.toFixed(2)}`;
    totalCostElement.innerText = `$${totalCost.toFixed(2)}`;
}
```  



## **How to Use**  

1. **Browse Products:** Explore the wide range of crochet items or use the search bar.  
2. **View Details:** Click on a product to see detailed information and add it to your cart.  
3. **Checkout:** Follow the checkout process to complete your purchase.  
4. **Track Orders:** Keep an eye on your order status and history through your account.  



## **Contributing**  

Contributions are welcome! If you'd like to help improve this project, feel free to fork the repository and submit a pull request.  



## **Credits**  

Developed by Jean P. I. Sánchez Félix.  
📧 Contact: [jeanpiere.sanchez@upr.edu](mailto:jeanpiere.sanchez@upr.edu)  

 
