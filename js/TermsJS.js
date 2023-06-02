document.addEventListener("DOMContentLoaded", function() {

  var checkbox = document.getElementById("consent-checkbox");
  var submitButton = document.querySelector(".accept_btn");

  submitButton.disabled = true;

  checkbox.addEventListener("change", function() {
        submitButton.disabled = !checkbox.checked;
  });
});
