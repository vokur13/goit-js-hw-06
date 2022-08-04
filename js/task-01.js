// const listItemEl = document.querySelectorAll('.item');
// console.log('Number of categories:', listItemEl.length);

// listItemEl.forEach(item => {
//   item.querySelectorAll('h2').forEach(title => {
//     console.log('Category:', title.textContent);
//   });
//   console.log('Elements:', item.querySelectorAll('li').length);
// });

//

const listItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', listItemEl.length);

const listItemTitleEl = listItemEl.children;
console.log(listItemTitleEl);

console.log(
  listItemEl.forEach(item => {
    item.firstElementChild;
  })
);

// listItemEl.forEach(item => {
//   item.querySelectorAll('h2').forEach(title => {
//     console.log('Category:', title.textContent);
//   });
//   console.log('Elements:', item.querySelectorAll('li').length);
// });

//

// const firstNavItem = navEl.firstElementChild;
// console.log(firstNavItem);
// console.log(navEl.children);
// console.log(navEl.children[2]);
