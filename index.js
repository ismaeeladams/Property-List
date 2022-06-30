const items = JSON.parse(localStorage.getItem("items"))
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

items.forEach((property) => {
  console.log(property);
  document.getElementById("propertiess").innerHTML += `
      <div class="card" style="width: 18rem">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${property.title}</h5>
                <p class="card-text">
                  <p>${property.location}</p>
                    <p><i class="fa-solid fa-bed"></i>${property.bedrooms}</p> 
                    <p><i class="fa-solid fa-shower"></i>${property.bathrooms}</p>    
                    <p><i class="fa-solid fa-car"></i>${property.parking}</p>   
                    <p><i class="fa-solid fa-ruler"></i>${property.size}</p>
                    <p>${property.product}</p>
                </p>
              </div>
            </div>
      `;
});
