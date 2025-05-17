// js/include.js
function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(el => {
    const file = el.getAttribute('include-html');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error("File not found: " + file);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute('include-html');
        includeHTML(); // Recursively handle nested includes
      })
      .catch(error => console.error(error));
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
