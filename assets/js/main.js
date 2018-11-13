
// $('.navbar-toggler').click((event) => {
//   $(event.currentTarget).find('.navbar-toggler-icon').toggleClass('toggler-close-icon');
// });

// function autocomplete(inp, arr) {
//   let currentFocus;

//   function closeAllLists(elmnt) {
//     const x = document.getElementsByClassName('autocomplete-items');
//     for (let i = 0; i < x.length; i++) {
//       if (elmnt !== x[i] && elmnt !== inp) {
//         x[i].parentNode.removeChild(x[i]);
//       }
//     }
//   }
//   function addActive(x) {
//     /* a function to classify an item as "active": */
//     if (!x) return false;
//     /* start by removing the "active" class on all items: */
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0;
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     /* add class "autocomplete-active": */
//     x[currentFocus].classList.add('autocomplete-active');
//   }

//   function removeActive(x) {
//     /* a function to remove the "active" class from all autocomplete items: */
//     for (let i = 0; i < x.length; i++) {
//       x[i].classList.remove('autocomplete-active');
//     }
//   }

//   inp.addEventListener('input', function inputEventListner(e) {
//     let a;
//     let b;
//     let i;
//     const val = this.value;
//     closeAllLists();
//     if (!val) {
//       return false;
//     }
//     currentFocus = -1;
//     a = document.createElement('DIV');
//     a.setAttribute('id', `${this.id}autocomplete-list`);
//     a.setAttribute('class', 'autocomplete-items');

//     this.parentNode.appendChild(a);

//     for (i = 0; i < arr.length; i++) {
//       if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
//         b = document.createElement('DIV');
//         b.innerHTML = `<strong>${arr[i].substr(0, val.length)}</strong>`;
//         b.innerHTML += arr[i].substr(val.length);
//         b.innerHTML += `<input type='hidden' value='${arr[i]}'>`;
//         b.addEventListener('click', function clickEventListner(e) {
//           inp.value = this.getElementsByTagName('input')[0].value;
//           closeAllLists();
//         });
//         a.appendChild(b);
//       }
//     }
//     return true;
//   });

//   inp.addEventListener('keydown', function keyDown(e) {
//     let x = document.getElementById(`${this.id}autocomplete-list`);
//     if (x) x = x.getElementsByTagName('div');
//     if (e.keyCode == 40) {
//       currentFocus++;
//       addActive(x);
//     } else if (e.keyCode == 38) {
//       currentFocus--;
//       addActive(x);
//     } else if (e.keyCode == 13) {
//       e.preventDefault();
//       if (currentFocus > -1) {
//         if (x) x[currentFocus].click();
//       }
//     }
//   });

//   document.addEventListener('click', (e) => {
//     closeAllLists(e.target);
//   });
// }
