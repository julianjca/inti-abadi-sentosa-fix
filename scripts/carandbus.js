const car = document.getElementById('car');
const bus = document.getElementById('bus');
const carproduct = document.querySelector('.carproduct');
const busproduct = document.querySelector('.busproduct');


car.addEventListener('click', ()=>{
  carproduct.classList.add("active");
  busproduct.classList.remove("active");
});

bus.addEventListener('click', ()=>{
  busproduct.classList.add("active");
  carproduct.classList.remove("active");

});

