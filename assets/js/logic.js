const emailInput = document.getElementById("email_address");
const submitButton = document.querySelector('input[type="submit"]');
const pattern = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(">+"))@((\[[0-9]{1,3}\.[0-9]\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
document.forms[0].onsubmit = (e) => {
  if (emailInput.value === "" || pattern.test(emailInput.value) === false) {
    emailInput.parentElement.querySelector(".error").style.visibility =
      "visible";
    emailInput.style.cssText = `
    background-color:hsl(0, 100%, 63%, 20%);
    color: hsl(0, 100%, 63%);
    border-color: hsl(0, 100%, 63%);
    `;
    e.preventDefault();
  } else {
    emailInput.parentElement.querySelector(".error").style.visibility =
      "hidden";
    emailInput.style.cssText = `
    background-color:transparent;
    color:white;
    border-color: hsl(231, 7%, 60%);
    `;
  }
};
