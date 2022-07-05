let items = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items"))
  : [
      {
        id: 1,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/hotel.jpg",
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
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/apartment.jpg",
        title: "Excal",
        product: "Apartment",
        location: "Las Vegas",
        size: "2500 m2",
        bedrooms: 2,
        bathrooms: 2,
        parking: 1,
        price: 30000,
      },
      {
        id: 3,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/hotel2.jpg",
        title: "Popping",
        product: "Hotel",
        location: "Amsterdam",
        size: "10000 m2",
        bedrooms: 5,
        bathrooms: 3,
        parking: 6,
        price: 880000,
      },
      {
        id: 4,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/scott-webb-1ddol8rgUH8-unsplash.jpg",
        title: "Axil",
        product: "House",
        location: "Los Angeles",
        size: "100 m2",
        bedrooms: 3,
        bathrooms: 1,
        parking: 2,
        price: 1500,
      },
      {
        id: 5,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/hotel3.jpg",
        title: "HeelLoop",
        product: "Hotel",
        location: "Canada",
        size: "10000 m2",
        bedrooms: 9,
        bathrooms: 10,
        parking: 5,
        price: 7900000,
      },
      {
        id: 6,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/apartment2.jpg",
        title: "Zeelo",
        product: "Apartment",
        location: "Los Angeles",
        size: "4500 m2",
        bedrooms: 1,
        bathrooms: 2,
        parking: 0,
        price: 1500,
      },
      {
        id: 7,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/apartment3.jpg",
        title: "Quell",
        product: "Apartment",
        location: "Washington",
        size: "100 m2",
        bedrooms: 4,
        bathrooms: 2,
        parking: 1,
        price: 15000,
      },
      {
        id: 8,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/will-funfun-bAK9wQghnHI-unsplash.jpg",
        title: "Veowla",
        product: "Hotel",
        location: "Singapore",
        size: "100000 m2",
        bedrooms: 10,
        bathrooms: 15,
        parking: 30,
        price: 3000000,
      },
      {
        id: 9,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg",
        title: "Deelo",
        product: "House",
        location: "Alabama",
        size: "20000 m2",
        bedrooms: 4,
        bathrooms: 2,
        parking: 1,
        price: 1500000,
      },
      {
        id: 10,
        image:
          "https://raw.githubusercontent.com/ismaeeladams/Property-List/main/Pictures/ralph-ravi-kayden-FqqiAvJejto-unsplash.jpg",
        title: "Resh",
        product: "Hotel",
        location: "Los Angeles",
        size: "10000 m2",
        bedrooms: 7,
        bathrooms: 3,
        parking: 2,
        price: 150000,
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

// delete function
function delitem(id) {
  items = items.filter((item) => item.id !== id);

  localStorage.setItem("items", JSON.stringify(items));
  CallItems(items);
}

// sort function
const byProduct = items.sort((a, b) => {
  if (a.product < b.product) return -1;
  return 1;
});
console.log(byProduct);

const byBedroom = items.sort((a, b) => {
  return a.bedrooms - b.bedrooms;
});
console.log(byBedroom);

const byBathroom = items.sort((a, b) => {
  return a.bathrooms - b.bathrooms;
});
console.log(byBathroom);

const byPrice = items.sort((a, b) => {
  return a.price - b.price;
});
console.log(byPrice);

// edit function
function editItem() {
  document.getElementById("product").value = productID;
  document.getElementById("title").value = productID;
  document.getElementById("size").value = productID;
  document.getElementById("location").value = productID;
  document.getElementById("bathroom").value = product_desc;
  document.getElementById("bedroom").value = qty;
  document.getElementById("price").value = price;
}
