const statementStart = document.querySelector('.statement_start');

const for_statement_1 = document.querySelector('.for_statement_1');
const for_statement_2 = document.querySelector('.for_statement_2');

statementStart.onclick = function() {
  for_statement_1.classList.add("for_statement_none");
  for_statement_2.classList.remove("for_statement_none");
}

const burger = document.querySelector('.burger');
const burger_window = document.querySelector('.burger_window');

burger.onclick = function() {
  burger_window.classList.toggle("burger_window_opened");
}
