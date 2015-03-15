# osx-window
This is a jQuery plugin which wraps DOM elements into OS X styled frame.

If you need to style some screenshots as if they were displayed in OS X window you will find this plugin very helpful. Example can be found below:

![osx-window example](https://github.com/redcraft/osx-window/blob/master/demo.png "Plugin example")

####Usage
To use the plugin please follow these steps:

* Install osx-window plugin using bower
```bash
bower install osx-window
```
* Load osx-window.js
```html
<script src="bower_components/osx-window/osx-window.js"></script>
```
* Mark screenshot or DIV container with some class. Don't forget to set element width:
```html
<img class="osx-window" src="some-image.png" style="width: 700px">
```
* Apply plugin for elements
```javascript
$(document).ready(function(){
     $(".osx-window").osxWindow();
});
```

Plugin returnes list of wrapers so you may continue the chain and apply another modifications on them (add margins for example):
```javascript
$(document).ready(function(){
     $(".osx-window").osxWindow().css("margin", "10px 10px 10px 10px");
});
```
####Example
Usage example can be found in example.html file. Just checkout repository and open it in browser.

####Feedback
If you have questions or would like to suggest something don't hesitate to contact me. 
