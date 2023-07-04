let elements = [];
let btn = document.getElementById("btn");
elements.push(document.getElementById("rating1"));
elements.push(document.getElementById("rating2"));
elements.push(document.getElementById("rating3"));
elements.push(document.getElementById("rating4"));
elements.push(document.getElementById("rating5"));

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', () => {
    elements.forEach(element => element.classList.remove('selected'));    
    // Add 'selected' class to the clicked element
    elements[i].classList.add('selected');
  });
}

btn.addEventListener('click', () => {
  let filepath = btn.getAttribute("data-filepath");
  window.location.href = filepath;
});
