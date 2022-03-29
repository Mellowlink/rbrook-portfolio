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
    break;
    case 'storyboards':
      $('#mobile-page-title').html('Storyboards');
    break;
    case 'design':
      $('#mobile-page-title').html('Design');
    break;
    case 'sketchbook':
      $('#mobile-page-title').html('Sketchbook');
    break;
    case 'fineart':
      $('#mobile-page-title').html('Fine Art');
    break;
    case 'contact':
      $('#mobile-page-title').html('Contact');
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
    case 'storyboards':
      break;
    case 'design':
      var gridImages = '';
      images.designImages.map((image) => {
        gridImages = gridImages.concat('<div class="inner"><a href="../assets/images/design/'+image+'" class="glightbox" data-gallery="designImages"><img src="../assets/images/design/'+
          image+'" alt="'+image+'"></a></div>');
      });
      $('#masonry-grid').html(gridImages);
      FlexMasonry.init('.grid',{
        responsive: true,
        breakpointCols: {
          'min-width: 980px': 4,
          'min-width: 800px': 3,
          'min-width: 576px': 2
        },
      });
      var lightbox = GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: false,
          autoplayVideos: false
      });

      break;
    case 'sketchbook':
      var gridImages = '';
      images.sketchbookImages.map((image) => {
        gridImages = gridImages.concat('<div class="inner"><a href="../assets/images/sketchbook/'+image+'" class="glightbox" data-gallery="sketchbookImages"><img src="../assets/images/sketchbook/'+
          image+'" alt="'+image+'"></a></div>');
      });
      $('#masonry-grid').html(gridImages);
      FlexMasonry.init('.grid',{
        responsive: true,
        breakpointCols: {
          'min-width: 980px': 4,
          'min-width: 800px': 3,
          'min-width: 576px': 2
        },
      });
      var lightbox = GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: false,
          autoplayVideos: false
      });
      break;
    case 'fineart':
      var gridImages = '';
      images.fineArtImages.map((image) => {
        gridImages = gridImages.concat('<div class="inner"><a href="../assets/images/fineart/'+
        image.filename+'" class="glightbox" data-gallery="fineArtImages" data-glightbox="title: '+
        image.title+'; description: '+image.description+';"><img src="../assets/images/fineart/'+
          image.filename+'" alt="'+image.filename+'"></a></div>');
      });
      $('#masonry-grid').html(gridImages);
      FlexMasonry.init('.grid',{
        responsive: true,
        breakpointCols: {
          'min-width: 980px': 4,
          'min-width: 800px': 3,
          'min-width: 576px': 2
        },
      });
      var lightbox = GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: false,
          autoplayVideos: false
      });
      break;
    case 'contact':
      break;
  }
}

const updateVideos = (videos) => {
  var videoContent = '';
  videos.map((video) => {
    videoContent = videoContent.concat('<h5 class="video-title">'+
    video.title+'</h5><p class="video-subtitle">'+
    video.subtitle+'</p><p class="video-description">'+
    video.description+'</p><iframe class="iframe-video"src="'+
    video.url+'"title="'+
    video.title+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>');
  });
  $('#video-wrapper').html(videoContent);
  /*
  <h5 class="video-title"></h5>
  <p class="video-subtitle"></p>
  <p class="video-description"></p>
  <iframe class="iframe-video"
    src=""
    title="El Title"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    */
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
