console.log('hello world');
[ ...document.querySelectorAll('.item') ].forEach(elem => {
  console.log(elem.childNodes);
});