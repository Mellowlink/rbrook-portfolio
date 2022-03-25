const updatePageContent = (strings, page) => {
  console.log('Hey Sneed');
}
const updateMenuItems = (menuItems, page) => {
  var rootUrl = window.location.origin;
  var pathUrl = window.location.pathname;
  //loop through the configured menu items and populate the navbar
  var items = '';
  menuItems.map((item) => {
    var disabledClass = '';
    if ('/contact' == '/'+item.path){
      disabledClass = ' disabled';
    }
    items = items.concat('<li class="nav-item"><a class="nav-link'+disabledClass+'" href="'
    + rootUrl + '/' + item.path + '">' + item.text + '</a></li>');
  });
  document.getElementById("nav-items").innerHTML = items;
  document.getElementById("nav-items-top").innerHTML = items;
}
