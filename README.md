# repeat-no-crop-x #

Jquery plugin. Set a repeat background image for a element without crop it.

## Objetive ##

Provide a simple jquery plugin to allow set a background image without crop it.

Traditional CSS background-image and its property 'repeat' (in this case repeat-x) repeat an image along its complete width. This means that if the total width of the element and the image are not equals the background image will be crop it at the end.

With this plugin applied in a specified element the background will be completed with a number of images that fit completely in the available width. 

The container element must not have any child and should be for an aesthetic purpose only, such as a separator.
```html
<div id="midSeparator"></div>
```

This jquery plugin is a particular solution to very specific problems.

## Instructions ##

Download the plugin. Link to it after jquery. Call it.

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.repeat-no-crop-x.min.js"></script>
```

```html
<script>
  var urlImage="/imgs/imageBk.png";
  var widthImage=30;
  var options={};

  window.onload = function(event) {
    $("#midSeparator").repeatImage(urlImage,widthImage,options);
  }
</script>
```

If you want to use it in responsive sites you must implement onresize event for the window. In the future this will not be necessary.

```html
<script>
  var urlImage="/imgs/imageBk.png";
  var widthImage=30;
  var options={};

  window.onload = function(event) {
    $("#midSeparator").repeatImage(urlImage,widthImage,options);
  }
  window.onresize = function(event) {
    $("#midSeparator").repeatImage(urlImage,widthImage,options);
  } 
</script>
```

## Arguments ##

### Required ###
 - urlImage: url to the background image
 - widthImage: total width of the background image in pixels

### Optional ###
- imageSpace: space between repetitions of images
- imageMarginLeft : margin left to the parent container
- imageMarginRight : margin right to the parent container
- floatImage : align the images to the "left" or "right" of the parent.

## Considerations ##

- Container element must have a width
- Container element must be a block
- Container element must not have any child.
