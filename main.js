// get the  form element
const formEl = document.getElementById("sign-up");

formEl.addEventListener("submit", function (event) {
  // prevents the default form submit behaviour
  event.preventDefault();

  // get input values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNo").value;

  console.log("fullName: ", fullName);
  console.log("email: ", email);
  console.log("phoneNumber: ", phoneNumber);

  alert(
    "FullName: " + fullName + "\nEmail: " + email + "\nPhone: " + phoneNumber
  );
});
