const loadProduct = () => {
  fetch("./product.json")
    .then((response) => response.json())
    .then((data) => displayProduct(data));
};

const displayProduct = (data) => {
  const cards = document.getElementById("cards");
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card", "m-2");
    card.innerHTML = `
  <div class="bookmark-icon">
            <i class="fa-solid fa-bookmark"></i>
            <i onclick="handleBookmark('${product.name}', '${product.id}','${product.price}')" class="fa-regular fa-bookmark"></i>
          </div>
          <div class="product-img-container">
            <img
              class="product-img"
              src=${product.image}
              alt=""
            />
          </div>
          <h3>${product.name}</h3>
          <p>The Widget 3000 is the latest and greatest in widget</p>
          <div class="priceAndButtons">
            <h2 class="text-primary">${product.price}</h2>
            <button class="btn btn-primary">Buy Now</button>
          </div> 
   
   `;



    cards.appendChild(card);
  });
};
// handle bookmark function

const handleBookmark = (name, id, price) => {
  const product = {name, id, price, bookmark: true};
  console.log(product );
}


loadProduct();