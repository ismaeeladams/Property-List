const items = JSON.parse(localStorage.getItem("items"))
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

localStorage.setItem("items", JSON.stringify(items))
items.forEach((property) => {
  console.log(property);
  document.getElementById("propertiess").innerHTML += `
      <div class="card" style="width: 18rem">
              <img src="${property.image}" class="card-img-top" alt="..." />
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
