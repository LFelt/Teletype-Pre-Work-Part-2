var cities = [
  "Denver",
  "Boulder",
  "Black Hawk",
  "Aurora"
];

for (var i = 0; i < cities.length; i++) {
  var bullet = '<li>' + cities[i] + '</li>';
  document.querySelector('ul.list-cities').append(bullet);
};


console.log(document.querySelector('ul.list-cities'));
