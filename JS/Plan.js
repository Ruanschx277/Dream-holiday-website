
$(document).ready(function(){

  $("#cardText").toggle();

  $(".card-img-top").toggleClass("small");

 function load(){

 }
  console.log;

const itemGroups = [
  {
    title: 'Item Group 1',
    items: [
      'Water proof phone bag',
      'Card holders',
      'Charging hub',
      'Bags',
      'Swim suits',
      'Sun block',
    ],
  },
  {
    title: 'Item Group 2',
    items: [
      'Comfortable shoes',
      'Power bank',
      'Towel bag',
      'Water proof phone bag',
      'Charging hub',
    ],
  },
  {
    title: 'Item Group 3',
    items: [
      'Comfortable cloths',
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

  formContainer.insertAdjacentHTML('beforeend', submitButtonHtml);


console.log(checkboxesToForm);

});


  