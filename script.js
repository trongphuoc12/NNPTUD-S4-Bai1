// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (ít nhất 6 sản phẩm, 2 danh mục)
const products = [
    new Product(1, "iPhone 15", 25000000, 10, "Phone", true),
    new Product(2, "MacBook M3", 45000000, 5, "Laptop", true),
    new Product(3, "AirPods Pro", 5000000, 0, "Accessories", false),
    new Product(4, "Samsung S24", 22000000, 8, "Phone", true),
    new Product(5, "Chuột Magic Mouse", 2500000, 15, "Accessories", true),
    new Product(6, "Ốp lưng iPhone", 500000, 50, "Accessories", true)
];

// Câu 3: Tạo mảng mới chỉ chứa name và price
const productNamesAndPrices = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3:", productNamesAndPrices);

// Câu 4: Lọc các sản phẩm còn hàng (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4:", inStockProducts);

// Câu 5: Kiểm tra có ít nhất một sản phẩm giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5:", hasExpensiveProduct);

// Câu 6: Kiểm tra tất cả sản phẩm "Accessories" có đang được bán (isAvailable = true) hay không
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Câu 6:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng (price * quantity)
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue.toLocaleString() + " VNĐ");

// Câu 8: Dùng for...of duyệt mảng và in ra: Tên - Danh mục - Trạng thái
console.log("Câu 8:");
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: Dùng for...in để in tên thuộc tính và giá trị (ví dụ cho sản phẩm đầu tiên)
console.log("Câu 9 (Sản phẩm 1):");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán (isAvailable) và còn hàng (quantity > 0)
const availableProductNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10:", availableProductNames);