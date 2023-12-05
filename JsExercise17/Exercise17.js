// function formatDate(date) {
//   const day = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();

//   const formattedDay = day < 10 ? `0${day}` : day;
//   const formattedMonth = month < 10 ? `0${month}` : month;

//   return `${formattedDay}/${formattedMonth}/${year}`;
// }

// let users = [
//   {
//     userId: 1,
//     userName: "user1",
//     email: "user1@example.com",
//     password: "password1",
//     createdAt: console.log(formatDate(new Date())),
//   },
//   {
//     userId: 2,
//     userName: "user2",
//     email: "user2@example.com",
//     password: "password2",
//     createdAt: console.log(formatDate(new Date())),
//   },
//   {
//     userId: 3,
//     userName: "user3",
//     email: "user3@example.com",
//     password: "password3",
//     createdAt: console.log(formatDate(new Date())),
//   },
// ];

// let products = [
//   {
//     productId: 1,
//     productName: "productName",
//     image: "image",
//     price: 10000,
//     description: "description",
//     createdAt: console.log(formatDate(new Date())),
//   },
//   {
//     productId: 2,
//     productName: "productName2",
//     image: "image2",
//     price: 20000,
//     description: "description2",
//     createdAt: console.log(formatDate(new Date())),
//   },
//   {
//     productId: 3,
//     productName: "productName3",
//     image: "image3",
//     price: 30000,
//     description: "description3",
//     createdAt: console.log(formatDate(new Date())),
//   },
// ];
// let carts = [
//   {
//     cartId: 1,
//     userId: users[0],
//     cartProductId: products[0],
//     quantity: 2,
//   },
//   {
//     cartId: 2,
//     userId: users[1],
//     cartProductId: products[1],
//     quantity: 1,
//   },
//   {
//     cartId: 3,
//     userId: users[2],
//     cartProductId: products[2],
//     quantity: 3,
//   },
// ];

// function calculateTotalPrice(cartItems, products) {
//   let totalPrice = 0;

//   cartItems.forEach((cartItem) => {
//     const product = products.find(
//       (product) => product.productId === cartItem.productId
//     );
//     if (product) {
//       totalPrice += product.price * cartItem.quantity;
//     }
//   });
// }

// console.log(calculateTotalPrice(cartItems, products));

const users = [];

const products = [];

const carts = [];

let choose;

do {
  choose = +prompt("Mời bạn nhập lựa chọn");

  switch (choose) {
    case 1:
      const userId = prompt("Nhập id: ");
      const userName = prompt("Nhập tên users: ");
      const email = prompt("Nhập email:");
      const password = prompt("Nhập password");
      const user = {
        userId: userId,
        userName: userName,
        email: email,
        password: password,
        createdAt: new Date().toISOString().split("T")[0],
      };
      users.push(user);

      break;
    case 2:
      const productId = +prompt("Nhập id sản phẩm: ");
      const productName = prompt("Nhập tên sản phẩm: ");
      const price = +prompt("Nhập giá:");
      const product = {
        productId: productId,
        productName: productName,
        price: price,
        createdAt: new Date().toISOString().split("T")[0],
      };
      products.push(product);

      break;
    case 3:
      const cartId = +prompt("Nhập id cart: ");
      const proId = +prompt("Nhập Id của sản phẩm");
      const uId = +prompt("Nhập id của user: ");
      const quantity = +prompt("Nhập số lượng: ");
      const cart = {
        cartId: cartId,
        productId: proId,
        userId: uId,
        quantity: quantity,
      };

      carts.push(cart);

      break;
    case 4:
      for (let i = 0; i < users.length; i++) {
        console.log("user: ", users[i]);
      }

      break;

    case 5:
      for (let i = 0; i < products.length; i++) {
        console.log("product: ", products[i]);
      }

      break;
    case 6:
      for (let i = 0; i < carts.length; i++) {
        console.log("cart: ", carts[i]);
      }

      break;
    case 7:
      // Biến lưu trữ tổng giá tiền
      let totalPrice = 0;
      //   Lặp lại từ phần tử của mảng carts
      for (let i = 0; i < carts.length; i++) {
        // Lấy ra id của product từ mảng carts
        const productId = carts[i].productId;
        // Tìm kiếm product theo id
        const findproduct = products.find((pro) => pro.productId === productId);
        // Cộng dồn giá tiền
        // Tổng = Giá trị trước đó + giá sản phẩm * sô lượng
        total = total + findproduct.price * carts[i].quantity;
      }
      console.log("Tổng số tiền của giỏ hàng: ", total);
      break;

    default:
      break;
  }
} while (choose !== 8);
