const users = [
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1759221778524-69d10f928aed?w=600&auto=format&fit=crop&q=60https://images.unsplash.com/photo-1759221778524-69d10f928aed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    bio: "Silence creates peace in a loud world."
  },
  {
    name: "Riya Sen",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    bio: "Dreamer. Believer. Storyteller."
  },
  {
    name: "Arjun Mehta",
    pic: "https://images.unsplash.com/photo-1755090281929-2f027ee94c98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    bio: "Chasing moments, not perfection."
  },
  {
    name: "Neha Kapoor",
    pic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60",
    bio: "A smile can change the whole vibe."
  },
  {
    name: "Rohan Das",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
    bio: "Coding my way through creativity."
  },
  {
    name: "Ishita Sharma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    bio: "Lost in music, found in moments."
  },
  {
    name: "Kabir Verma",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=60",
    bio: "Calm mind. Brave soul. Open heart."
  },
  {
    name: "Meera Joshi",
    pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&auto=format&fit=crop&q=60",
    bio: "Finding beauty in small things every day."
  }
];


function debounce(func, delay) {
  let timeout; // stores the timer ID
  return function(...args) { 
    clearTimeout(timeout); // clear any previous timer
    timeout = setTimeout(() => func.apply(this, args), delay); // set a new timer
  }
}

function showUser(arr) {
  const container = document.querySelector(".user-container");

  arr.forEach(elem => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = elem.pic;
    img.classList.add("bg-img");

    let blurred = document.createElement("div");
    blurred.style.backgroundImage=`url(${elem.pic})`
    blurred.classList.add("blurred-layer");

    let content = document.createElement("div");
    content.classList.add("content");

    let heading = document.createElement("h3");
    heading.textContent = elem.name;

    let description = document.createElement("p");
    description.textContent = elem.bio;

    content.appendChild(heading);
    content.appendChild(description);

    card.appendChild(img);
    card.appendChild(blurred);
    card.appendChild(content);


    
    container.appendChild(card);
  });
}

showUser(users);


const input = document.querySelector(".inp");

const debouncedSearch = debounce(() => {
  let newUser = users.filter((user) => {
    return user.name.toLowerCase().startsWith(input.value.toLowerCase());
  });

  document.querySelector(".user-container").innerHTML = "";
  showUser(newUser);
}, 200);

input.addEventListener("input", debouncedSearch);

