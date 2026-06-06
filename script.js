let users = [
  {name:"Anjali", age:22, bio:"Love food & travel ❤️"},
  {name:"Priya", age:21, bio:"Coffee + long drives ☕"},
  {name:"Neha", age:23, bio:"Simple & happy 😊"},
  {name:"Simran", age:24, bio:"Music lover 🎧"}
];

function loadProfiles(){
  let box=document.getElementById("cards");
  box.innerHTML="";

  users.forEach(u=>{
    let div=document.createElement("div");
    div.className="profile-card";

    div.innerHTML=`
      <h3>${u.name}, ${u.age}</h3>
      <p>${u.bio}</p>
      <button onclick="like()">❤️ Like</button>
      <button onclick="skip()">❌ Skip</button>
    `;

    box.appendChild(div);
  });
}

function like(){
  alert("💘 Match Found!");
}

function skip(){
  alert("Skipped");
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}