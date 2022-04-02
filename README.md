# RB Portfolio Website
This is the portfolio website for Rebecca Brook, built to showcase personal and professional materials for career development at the time of this writing.

The purpose of this guide is to support future maintenance of this portfolio website.

## General Information
You can use your favorite text editor to work with this project, but I highly recommend [Atom](https://atom.io/) as it comes preconfigured with most popular language's syntax highlighting, and it contains its own markdown viewer for viewing `.md` files such as this Readme.

All quoted code locations for updating images and text are located in `/config/config.js` unless otherwise stated.

Most configuration is stored as javascript objects (eg: `{}`), or arrays of javascript objects (eg: `[{},{},{}]`, separated by commas).

  Values used for text and file names of images are stored as properties of these objects for dynamically building each page on load. This will be explained in more detail below, and the config file is heavily commented for future reference.

  At the start of each section you'll find the name of the variable used for the relevant content, which you can use to quickly search.

## Updating Text
Updating text is very straightforward, simply paste or type the text you wish into the appropriate value. You can use HTML tags in your text, though it's best to stick with simple tags such as `<br>` for line breaks, as the stylesheet is already set up to accommodate most layouts and using too many HTML containers may result in unexpected behaviour.

### Menu Items
###### Variable: `const menuItems`
###### Object:
```
{
  text: "Example",
  path: "/example",
}
```
###### Properties:
`text`: The value shown on the nav menu

`path`: The path used for navigation, requires a folder with matching name containing an `index.html` of the page you want to go to.


### Other
###### Variable: `const strings`
###### Properties:
`logoText`: The text used for your brand logo, used for headers and the mobile menu.

`bioText`: The bio displayed on the contact page.

`emailAddress`: Your email address.


## Updating Images & Videos
Images require nothing more than the filename, provided they've been put in the correct folder. Filenames should not contain any spaces. Most image formats should be fine, including `.gif` but only unanimated images have been tested.

### Home Page
###### Variable: `const images`
###### Properties:
`homeImageDesktop`: The splash image used for widths above 800px.

`homeImageMobile`: The splash image used for widths below 800px, which would be most mobile devices displaying vertically with the exception of some tablets.

### Storyboards Page
#### Videos
###### Variable: `const videos`
An array of objects, separated by commas.
###### Object:
```
url: 'https://video.link',
title: 'Title',
subtitle: 'Subtitle',
description: 'Example description',
```
###### Properties:
`url`: The link to your video. Tested with both Youtube & Vimeo, but theoretically any embed link should work.

`title`: The title displayed above the video.

`subtitle`: The subtitle displayed above the video before the description.

`description`: A description of your video. Can contain basic HTML such as line breaks `<br>`


#### Slideshows
###### Variable: `const slideshows`
An array of objects, separated by commas.
###### Object:
```
{
  key: 'uniqueValue',
  title: 'Title',
  subtitle: 'Subtitle',
  description: 'Example description',
  images: [
    'example1.png',
    'example2.png',
    'example3.png',
  ]
}
```
###### Properties:
`key`: A unique value, used to properly build the slideshow container. Must be unique, and contain no spaces.

`title`: The title displayed above the slideshow.

`subtitle`: The subtitle displayed above the slideshow before the description.

`description`: A description of your slideshow. Can contain basic HTML such as line breaks `<br>`

`images`: An array of filenames, separated by commas. Images must be placed in the `/assets/images/storyboards` folder.


### Design Page
###### Variable: `const images`
###### Properties:
`designImages`: An array of filenames, separated by commas. These images must be placed in the `/assets/images/design` folder.

### Sketchbook Page
###### Variable: `const images`
###### Properties:
`sketchbookImages`: An array of filenames, separated by commas. These images must be placed in the `/assets/images/sketchbook` folder.


### Fine Art Page
###### Variable: `const images`
###### Properties:
`fineArtImages`: An array of objects, separated by commas.
###### Object:
```
{
  filename: "example.jpg",
  title: 'Example Title',
  description: 'The description displayed in the lightbox'
}
```
`filename`: The filename of the image. This image must be placed in the `/assets/images/fineart` folder.

`title`: Regular text.

`description`: Regular text, can contain line breaks `<br>`


### Contact Page
###### Variable: `const images`
###### Properties:
`contactImage`: The image displayed alongside your bio (or above it in the mobile layouts).


## Adding & Removing Social Media
Supported social media has been configured to display using [Font Awesome](https://fontawesome.com/) icons, making it easy to update the colors & size or swap out the icons for other variations. CSS has already been written to color all supported icons and their variations.

You can use the icon variations if you wish. For example, you can use the standalone Facebook "F" rather than the blue square with the "F" inside. For more detail check the type list below, in the properties section.

Icons will display in the order they appear in the config.

Currently supported:
- Instagram
- LinkedIn
- Facebook
- Twitter
- Google Plus
- Vimeo
- Youtube

### Updating Items
###### Variable: `const socialMedia`
###### Object:
```
{
  type: "Example",
  url: "/example",
}
```
###### Properties:
`type`: The type used, must be one of the following to display correctly:
```
instagram
linkedin, linkedin-in
facebook, facebook-f, facebook-square
twitter, twitter-square
google-plus, google-plus-g, google-plus-square
vimeo, vimeo-v, vimeo-square
youtube
```

`url`: The url to your social media profile/page.

## Updating your favicon
Use this [favicon generator](https://favicon.io/favicon-converter/) to convert an image of your choice into all the various files you'll need to properly serve up your favicon. These can just be dropped into the root of your website, overwriting the old images. No need to do anything else, the links are already placed in the `<head>` of your pages.

You do not need the `site.manifest` file, you can delete it.

## Extras
### Adding or removing the random colours of the loading icon
File: `/js/script.js`
Variable: `var loadingColors`

An array of hex values used as the pool from which a random colour is chosen every time the page loads, which is then used to colour the loading icon.

You can add or remove as many colours as you wish from this.

### Change the colours of your social media icons
File: `/css/styles.css`
Search for: `/* SOCIAL MEDIA */`

This block of CSS contains the colour codes used for each of the supported social media types and their variations, neatly grouped together. You can use either hex values or RGB.

## Libraries used
[GLightbox](https://biati-digital.github.io/glightbox/): Lightbox used in the image galleries for the smooth performance and Title/Description support.

[FlexMasonry](https://github.com/gilbitron/flexmasonry): Used for the masonry grid layouts, chosen for its ease of setup and customization.

[MDBootstrap](https://mdbootstrap.com/): Lightly used for a few things like buttons, a few CSS classes, pre-styled Font Awesome icons, etc.

## License
This is not an open source project, and all content contained herein is the intellectual property of the original creators. Nothing in this repository may be used for personal or commercial purposes, except by the original developer and owner of the images.
