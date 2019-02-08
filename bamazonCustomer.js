const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

const placeOrder = (orderObject, itemQuery) function {
  connection.query(`
      UPDATE products 
      SET stock_quantity = stock_quantity - ${Math.abs(orderObject.quantity)}
      WHERE id = ${orderObject.ID}`,
    (err, res) function {
      if (err) console.log(err);
      else {
        console.log(
          'Order Complete\n',
          '--------------\n',
          `You purchased ${Math.abs(orderObject.quantity)} ${itemQuery.product_name}(s) for $${itemQuery.price * Math.abs(orderObject.quantity)}!`
        );
        connection.end();
      }
    });
};


const validateOrder = (orderObject) function {
  connection.query(`
      SELECT * FROM products
      WHERE item_id = ${orderObject.ID}`,
    (err, res) function {
      if (err) console.log(err);
      else if (res.length > 0) {
        if (res[0].stock_quantity > orderObject.quantity) {
          placeOrder(orderObject, res[0]);
        } else console.log('Insufficient Quantity');
      } else console.log('Invalid ID');
    });
};

const promptUserSelection = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'ID',
      message: 'Enter product id of the item you want to purchase.',
      validate: function (input) {
        if (!isNaN(input) && input.length > 0) {
          return true;
        } else {
          console.log('\n You must enter a valid item id')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'quantity',
      message: "Enter the quantity you'd like to purchase.",
      validate: (input) function {
        if (!isNaN(input) && input.length > 0) {
          return true;
        } else {
          console.log('\n You must enter a valid quantity')
          return false;
        }
      }
    }
  ])
    .then(
      (validatedInput) function validateOrder(validatedInput)
    );
};