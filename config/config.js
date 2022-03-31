// CONTENT

/*
CONFIGURABLE
Text Content

logoText: The name to be displayed on the header, also used as a link back to the homepage
bioText: displayed on the contact page
emailAddress: internet tube street address
*/
const strings = {
  logoText: "Rebecca Brook", //Amatic
  bioText: "Rebecca Brook is an artist and animator who graduated with distinction from the BFA Drawing & Painting program at OCADU in 2014. In 2018, she earned an advanced diploma from Loyalist College in Animation and Game Development.<br><br>Rebecca has worked many roles at Taqqut Productions since 2018 including designer and storyboard artist. Currently, she is the pre-production supervisor for the studio’s in-house animation projects.",
  emailAddress: "rebecca.c.brook@gmail.com",
}

/*
CONFIGURABLE
Filenames of images to display, no path required.

homeImageDesktop: The homepage splash image to display in the desktop layout
homeImageMobile: The homepage splash image to display in the mobile layout
contactImage: The contact page image to display alongside the bio

-* images must be placed in the "/assets/images/design" folder
designImages: An array of filenames of images to display on the design page gallery (seperated by comma)

-* images must be placed in the "/assets/images/sketchbook" folder
sketchbookImages: An array of filenames of images to display on the sketchbook page gallery (seperated by comma)

-* images must be placed in the "/assets/images/fineart" folder
fineArtImages: An array of objects {} for images & descriptions to display on the fine art page gallery (seperated by comma)
- Required Attributes:
- - filename: the filename of the image to display
- - title: the title to be displayed on the fullsize image
- - description: the description to be displayed on the fullsize image, can contain line breaks <br>
*/
const images = {
  homeImageDesktop: "title_v02.png",
  homeImageMobile: "title_v02-placeholder-flipped.png",
  contactImage: "contact_splash.png",
  designImages: [
    "beclay01.jpg",
    "final_charactersheet01.jpg",
    "beclay010.jpg",
    "final_charactersheet010.jpg",
    "beclay011.jpg",
    "final_charactersheet011.jpg",
  ],
  sketchbookImages: [
    "CharacterSheet_Alvyn_solo.png",
    "sam_card_rbrook.png",
    "valentines02_v02.png",
    "sam_card_rbrook0.png",
    "valentines02_v020.png",
    "CharacterSheet_Alvyn_solo0.png",
    "christie_bday_2020_ver040.png",
    "christie_bday_2020_ver04.png",
    "CharacterSheet_Alvyn_solo1.png",
    "christie_bday_2020_ver041.png",
    "sam_card_rbrook1.png",
    "valentines02_v021.png",
  ],
  fineArtImages: [
    {
      filename: "ex01.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "editIMG_6714a-copy1.png",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "editIMG_6714a-copy.png",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "stu8.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "editIMG_6714a-copy0.png",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "ex08.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "ex081.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "ex010.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "stu81.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "ex080.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "stu80.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
    {
      filename: "ex011.jpg",
      title: 'Example Title',
      description: 'A nice long example description about whatever you want including but not limited to the most obvious subject, this image'
    },
  ],
}

/*
CONFIGURABLE: an array of objects {} to build the video sections

Required attributes:
url: The embed link, supports Vimeo & Youtube, any others are untested
title: text
subtitle: text
description: text, can contain html line breaks, just put a <br> where you want the line to break
*/
const videos = [
  {
    url: 'https://player.vimeo.com/video/253989945?h=c6db007fe5&color=ef0800&title=0&byline=0&portrait=0',
    title: 'El Vimeo Example',
    subtitle: 'A Video (Summer 1792)',
    description: 'This is a video from a time before videos. Check it out, lol',
  },
  {
    url: 'https://www.youtube.com/embed/_j7IzrDTx0o',
    title: 'Tengen Toppa Gurren Lagann',
    subtitle: 'Youtube Example (Autumn 2007)',
    description: 'This is a youtube example video about piercing the heavens, etc.<br>おまえをしんじるおれをしんじろ',
  },
]

/*
CONFIGURABLE: an array of objects {} to build the slideshow sections, seperated by commas

-* images must be placed in the "/assets/images/storyboards" folder

Required attributes:
key: used to properly build the page elements this should be unique, not spaces or special characters other than underscore and hyphen
title: text
subtitle: text
description: text, can contain html line breaks, just put a <br> where you want the line to break
images: an array of filenames including extension (png, jpg, gif, etc.), seperated by commas.
        Min: 1, Max: 14-15(ideal), but technically infinite
*/
const slideshows = [
  {
    key: 'title',
    title: 'Title',
    subtitle: 'A Slideshow (Winter 1349)',
    description: 'This is a slideshow from some year or whatever lol',
    images: [
      'heist1.png',
      'hiest2.png',
      'hiest3.png',
      'hiest4.png',
      'hiest5.png',
      'hiest6.png',
    ]
  },
  {
    key: 'testy-test',
    title: 'Testy test',
    subtitle: 'A test slidey show (Autumn 2007)',
    description: 'This sure is a test, plus more text to make it longer for design placeholder purposes etc.',
    images: [
      'heist1.png',
      'hiest2.png',
      'hiest3.png',
      'hiest4.png',
      'hiest5.png',
    ]
  },
]

/*
CONFIGURABLE, accepted types:
Instagram: instagram
LinkedIn: linkedin, linkedin-in
Facebook: facebook, facebook-f, facebook-square
Twitter: twitter, twitter-square
Google Plus: google-plus, google-plus-g, google-plus-square
Vimeo: vimeo, vimeo-v, vimeo-square
Youtube: youtube
*/
const socialMedia = [
  {
    type: 'instagram',
    url: 'https://www.instagram.com/beckbrook.art/',
  },
  {
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/rebecca-brook-art',
  },
  // {
  //   type: 'facebook',
  //   url: 'example',
  // },
  // {
  //   type: 'twitter',
  //   url: 'example',
  // },
  // {
  //   type: 'google-plus',
  //   url: 'example',
  // },
  // {
  //   type: 'vimeo',
  //   url: 'example',
  // },
  // {
  //   type: 'youtube',
  //   url: 'example',
  // },
]
// END CONTENT

// NAVIGATION
/*
Used to populated the top and mobile menus
*/
const menuItems = [
  {
    text: "Storyboards",
    path: "/storyboards",
  },
  {
    text: "Design",
    path: "/design",
  },
  {
    text: "Sketchbook",
    path: "/sketchbook",
  },
  {
    text: "Fine Art",
    path: "/fineart",
  },
  {
    text: "Contact",
    path: "/contact",
  },
]
// END NAVIGATION
