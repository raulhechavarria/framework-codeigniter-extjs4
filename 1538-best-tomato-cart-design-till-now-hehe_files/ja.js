sfHover=function(){var b=document.getElementById("toc-cssmenu").getElementsByTagName("li");for(var a=0;a<b.length;++a){b[a].onmouseover=function(){clearTimeout(this.timer);if(this.className.indexOf("s")==-1){this.className+="s"}};b[a].onmouseout=function(){this.timer=setTimeout(sfHoverOut.bind(this),20)}}};function sfHoverOut(){clearTimeout(this.timer);this.className=this.className.replace(new RegExp("s\\b"),"")}if(window.attachEvent){window.attachEvent("onload",sfHover)};