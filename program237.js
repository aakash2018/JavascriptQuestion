const  order = [
  { id: 1, category: 'Beverages', amount: 120 },
  { id: 2, category: 'Snacks', amount: 80 },
  { id: 3, category: 'Beverages', amount: 100 },
  { id: 4, category: 'Meals', amount: 200 },
  { id: 5, category: 'Snacks', amount: 50 },
];

var categories = {};

order.forEach((ele) => {
  if(categories.hasOwnProperty(ele.category)){
    categories[ele.category] += ele.amount;
  }else{
    categories[ele.category] = ele.amount;
  }
});

  console.log(categories);