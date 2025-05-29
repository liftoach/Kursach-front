interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
  pricePerDay: number;  // Цена за день аренды
  popularity: number;
  stock: number;  // Количество доступных единиц техники для аренды
}

interface ProductInCart extends Product {
  id: string;
  quantity: number;  // Количество единиц техники для аренды
  rentalPeriod: number;  // Количество дней аренды
  stock: number;
}

interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  role: string;
  password: string;
}

