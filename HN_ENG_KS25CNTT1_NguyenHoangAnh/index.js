let products = [
    { id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
    { id: "P02", name: "Chuot không day Logitech", price: 45, category: "Phu kien", inStock: true },
    { id: "P03", name: "Ban phím Cơ Keychron", price: 95, category: "Phu kien", inStock: false },
    { id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
    { id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phu kien", inStock: true }
];

function checkInStock() {
    let product = products
        .filter((value) => value.inStock === true)
        .sort((a, b) => b.price - a.price);

    console.log(product);
}

checkInStock();

function checkCategory() {
    let product = products
        .filter(value => value.category === "Phu kien")
        .map(value => value.name);

    console.log(product);
}
checkCategory();

function totalInStock() {
    let product = products
        .filter(value => value.inStock === true)
        .reduce((acc, value) => acc + value.price, 0);

    console.log(product);
}
totalInStock();