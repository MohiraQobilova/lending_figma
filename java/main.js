"use strict";

$(function () {
  $(".acc_ctrl").on("click", function (e) {
    e.preventDefault();
    var $panel = $(this).next(".acc_panel");

    if ($panel.hasClass("active")) {
      $panel.removeClass("active").slideUp(300);
      $(this).removeClass("active"); // - bosilganda + belgisini qo'shishni olib tashlash
    } else {
      $(".acc_panel").removeClass("active").slideUp(300);
      $(".acc_ctrl").removeClass("active"); // Barcha accordionlarni yopish uchun + belgilarni o'chirish
      $(this).addClass("active"); // Bosilgan accordionni ochish uchun + belgisini qo'shish
      $panel.addClass("active").slideDown(300);
    }
  });
});


let cards = document.querySelectorAll(".card"),
  numbers = document.querySelectorAll("number"),
  title = document.querySelectorAll(".title"),
  texts = document.querySelectorAll(".text"),
  arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    cards.forEach((e) => e.classList.remove("active"));
    arrow.parentElement.classList.add("active");
  })
);



// let cards = document.querySelectorAll(".card"),
//   numbers = document.querySelectorAll(".number"),
//   names = document.querySelectorAll(".name"),
//   texts = document.querySelectorAll(".text"),
//   btns = document.querySelectorAll(".rotet");

// btns.forEach((rotet) =>
//   rotet.addEventListener("click", () => {
//     cards.forEach((e) => e.classList.remove("active"));
//     rotet.parentElement.classList.add("active");
//   })
// );



// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // modal1


// var modal1 = document.getElementById("myModal1");

// // Get the button that opens the modal
// var btn1 = document.getElementById("myBtn1");

// // Get the <span> element that closes the modal
// var span1 = document.getElementsByClassName("close1")[0];

// // When the user clicks the button, open the modal 
// btn1.onclick = function() {
//   modal1.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span1.onclick = function() {
//   modal1.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }



// // modal2

// var modal2 = document.getElementById("myModal2");

// // Get the button that opens the modal
// var btn2 = document.getElementById("myBtn2");

// // Get the <span> element that closes the modal
// var span2 = document.getElementsByClassName("close2")[0];

// // When the user clicks the button, open the modal 
// btn2.onclick = function() {
//   modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span2.onclick = function() {
//   modal2.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
// }


// // modal3

// var modal3 = document.getElementById("myModal3");

// // Get the button that opens the modal
// var btn3 = document.getElementById("myBtn3");

// // Get the <span> element that closes the modal
// var span3 = document.getElementsByClassName("close3")[0];

// // When the user clicks the button, open the modal 
// btn3.onclick = function() {
//   modal3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span3.onclick = function() {
//   modal3.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal3) {
//     modal3.style.display = "none";
//   }
// }

// // modal4

// var modal4 = document.getElementById("myModal4");

// // Get the button that opens the modal
// var btn4 = document.getElementById("myBtn4");

// // Get the <span> element that closes the modal
// var span4 = document.getElementsByClassName("close4")[0];

// // When the user clicks the button, open the modal 
// btn4.onclick = function() {
//   modal4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span4.onclick = function() {
//   modal4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal4) {
//     modal4.style.display = "none";
//   }
// }


// // modal5

// var modal5 = document.getElementById("myModal5");

// // Get the button that opens the modal
// var btn5 = document.getElementById("myBtn5");

// // Get the <span> element that closes the modal
// var span5 = document.getElementsByClassName("close5")[0];

// // When the user clicks the button, open the modal 
// btn5.onclick = function() {
//   modal5.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span5.onclick = function() {
//   modal5.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal5) {
//     modal5.style.display = "none";
//   }
// }


// // modal6

// var modal6 = document.getElementById("myModal6");

// // Get the button that opens the modal
// var btn6= document.getElementById("myBtn6");

// // Get the <span> element that closes the modal
// var span6 = document.getElementsByClassName("close6")[0];

// // When the user clicks the button, open the modal 
// btn6.onclick = function() {
//   modal6.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span6.onclick = function() {
//   modal6.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal6) {
//     modal6.style.display = "none";
//   }
// }