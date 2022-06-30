let items = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items"))
  : [
      {
        id: 1,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 2,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 3,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 4,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 5,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 6,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 7,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 8,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 9,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
      {
        id: 10,
        title: "Hello",
        product: "Hotel",
        location: "Los Angeles",
        size: "1000 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500000,
      },
    ];
function CallItems(items) {
  document.getElementById("tables").innerHTML = " ";
  items.forEach((property) => {
    console.log(property);
    document.getElementById("tables").innerHTML += `
        <tr>
         <td>${property.id}</td>
         <td>${property.title}</td>
         <td>${property.product}</td>
         <td>${property.bedrooms}</td>
         <td>${property.bathrooms}</td>
         <td>${property.location}</td>
         <td>${property.parking}</td>
         <td>R${property.price}</td>
         <td><i class="fa-solid fa-pen-to-square"></i>
        <button onclick="delitem(${property.id})"><i class="fa-solid fa-trash"></i></button>
         </td>
        </tr>
          `;
  });
}
CallItems(items);

// Adding Function
function add() {
  newItem = {
    id: items.length + 1,
    title: document.getElementById("T").value,
    product: document.getElementById("cat").value,
    location: document.getElementById("loc").value,
    size: document.getElementById("s").value,
    bedrooms: document.getElementById("be").value,
    bathrooms: document.getElementById("ba").value,
    parking: document.getElementById("pa").value,
    price: document.getElementById("pr").value,
  };
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
  CallItems(items);
  document.getElementById("tables").innerHTML += "";

  document.getElementById("tables").innerHTML += `
  <tr>
     <td>${newItem.id}</td>
     <td>${newItem.title}</td>
     <td>${newItem.product}</td>
     <td>${newItem.bedrooms}</td>
     <td>${newItem.bathrooms}</td>
     <td>${newItem.location}</td>
     <td>${newItem.parking}</td>
     <td>R${newItem.price}</td>
     <td><i class="fa-solid fa-pen-to-square"></i>
     <button onclick="delitem(${newItem.id})" > <i class="fa-solid fa-trash"></i></button> 
     </td>
    </tr>
  `;
}

function delitem(id) {
  items = items.filter((item) => item.id !== id);

  localStorage.setItem("items", JSON.stringify(items));
  CallItems(items);
}
