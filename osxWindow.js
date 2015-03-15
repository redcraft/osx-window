(function( $ ) {
    $('head')
        .append('<style id="osx-style"></style>')
        .find("#osx-style").html(
        ".osx-window-bar .osx-circle {width: 10px;  height: 10px;  float: left;  border-radius: 50%;  margin: 10px 4px 0 4px;  border: 1px solid;}  " +
        ".osx-window-bar .osx-red {background-color: #f55f5c; border-color: #e64143;}  " +
        ".osx-window-bar .osx-yellow {background-color: #f9c038; border-color: #e3a042;}  " +
        ".osx-window-bar .osx-green {background-color: #3ace41; border-color: #13ab47;}  " +
        ".osx-content {border: 1px solid #dddddd; border-top-color: #aeacae; box-sizing: border-box;}" +
        ".osx-window-bar {padding-left:8px; background-color: #e5e2e5; clear: both; height: 32px; border-top-left-radius: 5px; border-top-right-radius: 5px;}" );

    $.fn.osxWindow = function() {

        return this.each(function() {
            var element = $(this);
            element
                .addClass("osx-content")
                .wrap('<div></div>').parent()
                .width(element.width() + 2)
                .prepend('<div class="osx-window-bar"><div class="osx-circle osx-red"></div><div class="osx-circle osx-yellow"></div><div class="osx-circle osx-green"></div></div>');
        }).parent();

    };

}( jQuery ));