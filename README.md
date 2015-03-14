# osx-window
This is a jQuery plugin which styles DOM container as OS X window. If you need to style some screenshot as if it was displayed in OS X window you will find this plugin very helpful. Example can be found below:

![osx-window example](https://dl.dropboxusercontent.com/u/5856793/osx-window-plugin-example.png "Plugin example")

To use the plugin please follow these steps:

* Load osxWindow.js 
```html
<script src="osxWindow.js"></script>
```
* Wrap some screenshot or DOM elements with div container
```html
<div class="osx-window">
  <img src="some-image.png">
</div>
```
* Apply plugin for wrapers
```javascript
$(".osx-window").osxWindow();
```
