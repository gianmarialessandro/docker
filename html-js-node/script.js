function editProfile() {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".container-edit").style.display = "block";

  const name = document.querySelector("#name").textContent;
  document.querySelector("#input-name").value = name;

  const email = document.querySelector("#email").textContent;
  document.querySelector("#input-email").value = email;

  const interest = document.querySelector("#interest").textContent;
  document.querySelector("#input-interest").value = interest;
}

function saveProfile() {
  document.querySelector("#name").textContent =
    document.querySelector("#input-name").value;
  document.querySelector("#email").textContent =
    document.querySelector("#input-email").value;
  document.querySelector("#interest").textContent =
    document.querySelector("#input-interest").value;

  document.querySelector(".container").style.display = "block";
  document.querySelector(".container-edit").style.display = "none";
}
