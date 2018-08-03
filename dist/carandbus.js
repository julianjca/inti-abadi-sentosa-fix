const car = document.getElementById('car');
const bus = document.getElementById('bus');
const carproduct = document.querySelector('.carproduct');
const busproduct = document.querySelector('.busproduct');


car.addEventListener('click', ()=>{
  carproduct.classList.add("active");
  car.classList.add("aktif");
  busproduct.classList.remove("active");
  bus.classList.remove("aktif");

});

bus.addEventListener('click', ()=>{
  busproduct.classList.add("active");
  car.classList.remove("aktif");
  carproduct.classList.remove("active");
  bus.classList.add('aktif');
});

