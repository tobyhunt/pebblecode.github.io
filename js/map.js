!function o(e,n,t){function a(r,l){if(!n[r]){if(!e[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(i)return i(r,!0);var p=new Error("Cannot find module '"+r+"'");throw p.code="MODULE_NOT_FOUND",p}var g=n[r]={exports:{}};e[r][0].call(g.exports,function(o){var n=e[r][1][o];return a(n?n:o)},g,g.exports,o,e,n,t)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<t.length;r++)a(t[r]);return a}({1:[function(o,e,n){"use strict";!function(){if($("[class*=map-container").length){var o,e,n,t;!function(){var a=function(){s("map",51.485672,-.118554)},i=function(){s("healthmap",51.5148475,-.1269898)},r=function(){s("insuremap",51.5144918,-.0803065)},l=function(){s("digitalmap",51.5074754,-.1389263)},s=function(n,t,a){var i={center:new google.maps.LatLng(t,a),zoom:15,panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!0,streetViewControl:!1,overviewMapControl:!1,rotateControl:!0,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP};e=new google.maps.Map(document.getElementById(n),i),o=new google.maps.Marker({position:new google.maps.LatLng(t,a),animation:google.maps.Animation.DROP}),o.setMap(e),e.panTo(o.position),google.maps.event.addListener(o,"click",function(){})};$("#london-btn").click(function(){var n=new google.maps.LatLng(51.485672,-.118554);o.setPosition(n),e.panTo(n)}),$("#sofia-btn").click(function(){var n=new google.maps.LatLng(42.6742392,23.3543577);o.setPosition(n),e.panTo(n)}),n=document.getElementsByTagName("head")[0],t=n.insertBefore,n.insertBefore=function(o,e){o.href&&0===o.href.indexOf("http://fonts.googleapis.com/css?family=Roboto")||t.call(n,o,e)},$("#map").length&&google.maps.event.addDomListener(window,"load",a),$("#healthmap").length&&google.maps.event.addDomListener(window,"load",i),$("#insuremap").length&&google.maps.event.addDomListener(window,"load",r),$("#digitalmap").length&&google.maps.event.addDomListener(window,"load",l)}()}}()},{}]},{},[1]);