
const products = [
    {
        id: 1,
        name: "Poncho Abierto",
        price: 65.00,
        options: [
            {
                id: "size-s",
                label: "Size: S",
                priceModifier: 0, // Price change for this option
            },
            {
                id: "size-m",
                label: "Size: M",
                priceModifier: 0,
            },
            // More size options...
        ],
        colors: [
            {
                id: "color_red",
                label: "Red",
                imageUrl: "/path/to/red_poncho.jpg",
            },
            {
                id: "color_blue",
                label: "Blue",
                imageUrl: "/path/to/blue_poncho.jpg",
            },
            // More color options...
        ],
    },
    // More products...
];

export default products;
