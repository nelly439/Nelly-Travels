const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const bookingModal = document.getElementById("bookingModal");
const modalBookButton = document.getElementById("modalBookButton");

const bookingForm = document.getElementById("bookingForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const destinationInput = document.getElementById("destination");
const formMessage = document.getElementById("formMessage");

function showModal(){
    bookingModal.style.display="flex";
}

function hideModal(){
    bookingModal.style.display="none";
}

openModal.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

bookingModal.addEventListener("click", function(event){
    if(event.target === bookingModal){
        hideModal();
    }
});

function goToBookingForm(){
    hideModal();

    bookingForm.scrollIntoView({
        behavior: "smooth"
    });
}

modalBookButton.addEventListener("click", goToBookingForm);

bookingForm.addEventListener("submit", function(event){
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const destination = destinationInput.value;

    if(name ==="" || email === "" || destination === ""){
        formMessage.textContent=
        "Pls fill in all fields";

        formMessage.style.color = "red";

        return;
    }

    if(!emailInput.checkValidity()){
        formMessage.textContent =
            "Pleases enter a valid email";

        formMessage.style.color="red";

        return;
    }

    formMessage.textContent=
    "Thank you, "+ name + 
    "your trip to " + destination +
     "Has been booked Succesfully";

    formMessage.style.color= "green";

    bookingForm.reset();
});
