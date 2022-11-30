const elCards = document.querySelector(".cards");
const elForm = document.querySelector("form");
const elName = document.querySelector("#name");
const elEmail = document.querySelector("#email");
const elUrl = document.querySelector("#url");
const elCity = document.querySelector("#from");
const elText = document.querySelector("#textarea");

const informations = [
  {
    name: "Shohjahon",
    email: "Suyunovshohjahon08@gmail.com",
    img: "./images/shoh.jpg",
    city: "Samarkand",
    info: "Iam future full-stack developer. I wanna work to Amazon Company",
  },
  {
    name: "MuhammadQodir",
    email: "MuhammadQodir@gmail.com",
    img: "./images/muhammadqodir.jpg",
    city: "Fergana",
    info: "Iam future full-stack developer. I wanna work to Google Company",
  },
];

// first rendering of the all Items
informations.forEach((item) => {
  const elCard = document.createElement("div");
  elCard.className = "card col-3";
  elCard.innerHTML = `
        <img class="card-img-top" width="322" height="322" src=${item.img} alt="Card image cap" />
        <div class="card-body">
          <h4 class="card-title">Name: ${item.name}</h4>
          <h6 class="card-title">Email: ${item.email}</h6>
          <h6 class="card-title">City: ${item.city}</h6>
          <p class="card-text">
            ${item.info}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
  
  `;
  elCards.appendChild(elCard);
});

function renderItems() {
  const elCards = document.querySelector(".cards");

  elCards.innerHTML = "";

  informations.forEach((item) => {
    const elCard = document.createElement("div");
    elCard.className = "card col-3";
    elCard.innerHTML = `
          <img class="card-img-top" width="322" height="322" src="${item.img}" alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">Name: ${item.name}</h4>
            <h6 class="card-title">Email: ${item.email}</h6>
            <h6 class="card-title">City: ${item.city}</h6>
            <p class="card-text">
              ${item.info}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    
    `;
    elCards.appendChild(elCard);
  });
}

const addItemsHandler = () => {
  let elName = document.querySelector("#name").value;
  let elEmail = document.querySelector("#email").value;
  let elUrl = document.querySelector("#url").value;
  let elCity = document.querySelector("#from").value;
  let elText = document.querySelector("#textarea").value;

  if (
    elName.trim() === "" ||
    elEmail.trim() === "" ||
    elUrl.trim() === "" ||
    elCity.trim() === "" ||
    elText.trim() === ""
  ) {
    return;
  }

  const newItem = {
    name: elName,
    email: elEmail,
    img: elUrl,
    city: elCity,
    info: elText,
  };

  informations.push(newItem);
  renderItems();
};

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addItemsHandler();
  console.log(informations);
  elName.value = "";
  elEmail.value = "";
  elUrl.value = "";
  elCity.value = "";
  elText.value = "";
});
