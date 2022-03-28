const updatePageContent = (strings, page) => {
  $('#brand-desktop').html(strings.logoText);
  $('#brand-desktop-small').html(strings.logoText);
  $('#brand-mobile').html(strings.logoText);

  //always show the current year in the copyright information
  var year = new Date().getFullYear();
  $('#copyright-footer').html('© '+year+' Rebecca Brook');
  $('#copyright-mobile-text').html('© '+year+' Rebecca Brook');

  switch(page){
    case 'home':
    console.log('ah');
    break;
  }
}

const updateImages = (images, page) => {
  switch(page){
    case 'home':
      $('#home-image-desktop').attr("src","./assets/images/"+images.homeImageDesktop);
      $('#home-image-desktop').attr("alt",images.homeImageDesktop);
      $('#home-image-mobile').attr("src","./assets/images/"+images.homeImageMobile);
      $('#home-image-mobile').attr("alt",images.homeImageMobile);
      break;
  }
}

const updateMenuItems = (menuItems, page) => {
  var rootUrl = '.';
  var pathUrl = window.location.pathname;

  if (pathUrl != '/'){
    rootUrl = '..'
  }
  //loop through the configured menu items and populate the navbar
  var items = '';
  menuItems.map((item) => {
    var disabledClass = '';
    if (pathUrl == item.path){
      disabledClass = ' disabled';
    }
    items = items.concat('<li class="nav-item"><a class="nav-link'+disabledClass+'" href="'
    + rootUrl + item.path + '">' + item.text + '</a></li>');
  });
  document.getElementById("nav-items").innerHTML = items;
  document.getElementById("nav-items-top").innerHTML = items;
  document.getElementById("nav-items-mobile").innerHTML = items;
}

const updateSocials = (socialMedia) => {
  //loop through the configured social media items and populate the icon links
  var items = '';
  socialMedia.map((item) => {
    items = items.concat('<a href="'+item.url+'" class="me-4"><i class="fab fa-'+item.type+' fa-lg"></i></a>');
  });
  document.getElementById("mobile-socials").innerHTML = items;
  document.getElementById("footer-socials").innerHTML = items;
}

const showMenu = () => {
  $('#navbar-side-menu').toggleClass('show');
  $('#menu-icon').toggleClass('fa-bars');
  $('#menu-icon').toggleClass('fa-times');
}

jQuery($ => {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $('.navbar-drop-out').toggleClass('navbar-dropped', scroll >= 250);
  });
});
//©
