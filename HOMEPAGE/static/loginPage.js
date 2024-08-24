/**
 * This script styles a login form, handles cookie consent, and manages errors and sign-up links.
 */

// Cookie Consent Message
const CookieConsentMessage = "We use cookies to enhance your experience on our website, analyze site traffic, and improve our services. By continuing to use our banking app, you consent to our use of cookies in accordance with our Cookie Policy and Privacy Policy. You can manage your cookie preferences at any time through your browser settings.";

// Setup form and main container
const form = document.querySelector("form");
let mainContainer = document.createElement("div");
mainContainer.appendChild(form);
document.body.appendChild(mainContainer);
mainContainer.classList.add("form-signin", "m-auto", "w-100");

// Style form button
form.querySelector("button").className = "btn btn-primary w-100 py-2 mt-5";

// Style body and form
document.body.className = "d-flex align-items-center py-4 bg-body-tertiary container bg-light";
form.classList.add("w-25", "mx-auto", "shadow", "px-4", "py-5", "d-flex", "flex-column");

// Style form fields
let elements = form.childNodes[3].querySelectorAll("p").forEach((element) => {
  element.className = "d-flex flex-column";
  let inputField = element.querySelector("input");
  inputField.className = "form-control";
  inputField.placeholder = element.querySelector("label").textContent.slice(0, -1);
});

// Add logo to form
let logo = document.createElement("img");
logo.src = "https://www.svgrepo.com/show/418523/banking-business-cash.svg";
logo.className = "w-50 mx-auto mb-5";
form.insertBefore(logo, form.firstChild);

// Handle form errors
let errors = document.querySelector(".errorlist.nonfield");
if (errors) {
  errors.childNodes.forEach(element => {
    errors.textContent = element.textContent;
    errors.className = "m-0 p-0 mb-3 text-danger";
  });
}

// Display cookie consent message after 3 seconds
setTimeout(() => {
  mTitle.innerText = "🍪 Cookie Consent";
  mBody.textContent = CookieConsentMessage;
  // mButton.click(); // Uncomment to trigger button click
}, 3000);

// Add sign-up link to form
let signUpLink = document.createElement("div");
signUpLink.classList.add("text-center", "mt-3");
signUpLink.innerHTML = 'Need An Account? <a href="/register/">Register</a>';
form.appendChild(signUpLink);
