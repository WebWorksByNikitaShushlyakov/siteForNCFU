// console.log('Hi!');

const formStatus = document.querySelector('.form_status');
const sectionCollection = document.querySelectorAll('.section_status');

formStatus.addEventListener('change', function() {
  let status = formStatus.value;
  // console.log(sectionCollection);

  for (let i = 0; i < sectionCollection.length; i++) {
    if (sectionCollection[i].classList.contains(status)) {
      console.log(status);
      sectionCollection[i].classList.add("section_active");
    }
    else {
      sectionCollection[i].classList.remove("section_active");
    }
  }
})

const burger = document.querySelector('.burger');
const burger_window = document.querySelector('.burger_window');

burger.onclick = function() {
  burger_window.classList.toggle("burger_window_opened");
}
