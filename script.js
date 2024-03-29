let cards = document.querySelector(".cards");
let input = document.querySelector("input");
let data = [
  {
    name: "piyush",
    src: "https://images.unsplash.com/photo-1552337480-48918be048b9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rohan",
    src: "https://images.unsplash.com/photo-1553504040-d9b4e31ff3c3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rahul",
    src: "https://images.unsplash.com/photo-1496346963603-742fe8640cf8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "manya",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let person = "";
data.forEach((elem) => {
  person += ` <div class="person">
    <img src="${elem.src}" alt="">
    <p>${elem.name}</p>
</div>
`;
});

cards.innerHTML = person;

input.addEventListener("input", (inp) => {
  var matching = data.filter((e) => {
    return e.name.startsWith(input.value);
  });

  let newperson = "";
  matching.forEach((elem) => {
    newperson += ` <div class="person">
    <img src="${elem.src}" alt="">
    <p>${elem.name}</p>
</div>
`;
  });

  cards.innerHTML = newperson;
});
