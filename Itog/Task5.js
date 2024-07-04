function openEditModal() {
    document.getElementById("editModal").style.display = "block";
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

function saveChanges() {
    document.getElementById("name").textContent = document.getElementById("edit-name").value;
    document.getElementById("surname").textContent = document.getElementById("edit-surname").value;
    document.getElementById("email").textContent = document.getElementById("edit-email").value;
    document.getElementById("phone").textContent = document.getElementById("edit-phone").value;
    document.getElementById("gender").textContent = document.getElementById("edit-gender").value;
    document.getElementById("city").textContent = document.getElementById("edit-city").value;
    document.getElementById("address").textContent = document.getElementById("edit-address").value;
    document.getElementById("country").textContent = document.getElementById("edit-country").value;
    document.getElementById("birthday").textContent = document.getElementById("edit-birthday").value;
    document.getElementById("education").textContent = document.getElementById("edit-education").value;
    document.getElementById("profession").textContent = document.getElementById("edit-profession").value;
    closeModal();
}