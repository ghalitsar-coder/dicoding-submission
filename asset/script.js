const burger = document.querySelector(".menu-toggle");
burger.addEventListener("click", function (e) {
  this.classList.toggle("change");

  const navUl = document.querySelector("nav ul");

  navUl.classList.toggle("slide");
});


const clickme = document.querySelector('.clickme');
clickme.addEventListener('click',function (e) {
    e.preventDefault();
    alert("Note : untuk piagam tolong pakai nama Galitsar Gyasi Elfariss agar sesuai dengan kartu prakerja *apabila lolos review dari dicoding")
})