$(document).ready(function(){

  
  $("#cardText").hide();

  
  $(".card-img-top").toggleClass("small");


  function load(){

  }


  console.log("Document is ready");

  const itemGroups = [
    {
      title: 'Item Group 1',
      items: [
        'Waterproof phone bag',
        'Card holders',
        'Charging hub',
        'Bags',
        'Swim suits',
        'Sunblock',
      ],
    },
    {
      title: 'Item Group 2',
      items: [
        'Comfortable shoes',
        'Power bank',
        'Towel bag',
        'Waterproof phone bag',
        'Charging hub',
      ],
    },
    {
      title: 'Item Group 3',
      items: [
        'Comfortable clothes',
        'Card holders',
        'Charging hub',
        'Clothing holder/bag',
        'Gift cards',
        'Cruise cards',
      ],
    },
  ];


  function createCheckboxes(group) {
    const checkboxes = group.items.map(item => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const label = document.createElement('label');
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(item));
      return label;
    });
    return checkboxes;
  }


  const formContainer = document.getElementById('formContainer');
  

  const submitButtonHtml = '<button id="submitButton">Submit</button>';
  

  formContainer.insertAdjacentHTML('beforeend', submitButtonHtml);


  const checkboxesToForm = createCheckboxes(itemGroups[0]);
  console.log(checkboxesToForm);

  const itemGroup = [
    { name: "Waterproof phone bag", price: 15.99 },
    { name: "Card holders", price: 9.99 },
    { name: "Charging hub", price: 29.99 },
    { name: "Bags", price: 24.95 },
    { name: "Swim suits", price: 39.99 },
    { name: "Sunblock", price: 8.49 },
    { name: "Comfortable shoes", price: 59.99 },
    { name: "Power bank", price: 34.99 },
    { name: "Towel bag", price: 19.95 },
    { name: "Comfortable shoes", price: 39.99 },
    { name: "Clothing holder/bag", price: 19.95 },
    { name: "Gift cards", price: 0 },
    { name: "Cruise cards", price: 5.99 },
  ];

  const expensiveItems = itemGroup.filter(item => item.price > 100);

  const sortedItems = itemGroup.slice().sort((a, b) => a.price - b.price);

  console.log("Expensive Items:", expensiveItems);
  console.log("Sorted Items:", sortedItems);
});

  