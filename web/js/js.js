$(document).ready(function(){var d=0;function c(){if($(window).scrollTop()>"160"){if(d>$(window).scrollTop()){$("#headbar").addClass("show")}else{$("#headbar").removeClass("show")}d=$(window).scrollTop()}else{$("#headbar").removeClass("show")}if($(window).scrollTop()>"900"){$("a.scroll-top").css("display","block")}else{$("a.scroll-top").css("display","none")}}$(window).scroll(c);function b(f){f+="";x=f.split(".");x1=x[0];x2=x.length>1?"."+x[1]:"";var e=/(\d+)(\d{3})/;while(e.test(x1)){x1=x1.replace(e,"$1 $2")}return x1+x2}function a(){$(".cabin-row").each(function(){sum1=0;summ=0;var e="";$(this).find(".cabin-form .price-variants .price-var-li").each(function(){price=$(this).find("input.varprice").val();quant=$(this).find("select").val();sum1=price*quant;summ+=sum1;if(quant>0){e=e+$(this).find(".var-name").text()+": "+quant+"; "}});$(this).find(".price-result .summ").html(b(summ));$(this).find(".price-but a.order-button").data("ccost",summ);if(e>""){$(this).find(".price-but a.order-button").data("tickets",e)}else{$(this).find(".price-but a.order-button").data("tickets","не выбрано")}})}$(".navbar-toggle.collapsed").click(function(){$(".navbar-collapse").addClass("show")});$(".navbar .navbar-hide").click(function(){$(".navbar-collapse").removeClass("show")});$(".main-page .owl-carousel").owlCarousel({loop:true,nav:true,items:1,autoplay:true,autoplayTimeout:10000,navText:[]});$(".chosen-select").chosen({disable_search:true,no_results_text:"Не найдено: ",placeholder_text_multiple:"Что посетить",placeholder_text_single:"Выберите"});$(".cruise-row .cruise-options-switch").click(function(){$(this).toggleClass("expanded");$(this).next(".cruise-options").toggleClass("expanded");$(this).parent().toggleClass("expanded")});$(".cabin-row .expand-lnk").click(function(){$(this).addClass("hidden");$(this).parent().parent().addClass("expanded");$(this).parent().find(".close-lnk").removeClass("hidden");$(this).parent().find(".cabin-photo .photo-prev").css("display","none");$(this).parent().find(".cabin-photo .owl-carousel").addClass("owl-loaded");$(this).parent().find(".cabin-photo .owl-carousel").owlCarousel({loop:false,nav:false,items:1,autoplay:false,navText:[]})});$(".cabin-row .close-lnk").click(function(){$(this).addClass("hidden");$(this).parent().parent().removeClass("expanded");$(this).parent().find(".expand-lnk").removeClass("hidden");$(this).parent().find(".cabin-photo .photo-prev").css("display","block");$(this).parent().find(".cabin-photo .owl-carousel").removeClass("owl-loaded")});$(".shipteam-row .expand-lnk").click(function(){$(this).addClass("hidden");$(this).parent().find(".shipteam-descr").removeClass("hidden");$(this).parent().find(".close-lnk").removeClass("hidden")});$(".shipteam-row .close-lnk").click(function(){$(this).addClass("hidden");$(this).parent().find(".shipteam-descr").addClass("hidden");$(this).parent().find(".expand-lnk").removeClass("hidden")});a();$(".price-var-li select").on("change",function(){var f=0;var g=0;var e="";$(this).parent().parent().find(".price-var-li").each(function(){price=$(this).find("input.varprice").val();quant=$(this).find("select").val();f=price*quant;g+=f;if(quant>0){e=e+$(this).find(".var-name").text()+": "+quant+"; "}});$(this).parent().parent().parent().find(".price-result").find(".summ").html(b(g));$(this).parent().parent().parent().find(".price-but a.order-button").data("ccost",g);if(e>""){$(this).parent().parent().parent().find(".price-but a.order-button").data("tickets",e)}else{$(this).parent().parent().parent().find(".price-but a.order-button").data("tickets","не выбрано")}});$(".order-button").click(function(){var e=$(this).data("cname");var f=$(this).data("tickets");var g=$(this).data("ccost");$("#callback-form .cabin-name").text(e);$("#callback-form .tickets").text(f);$("#callback-form .cabin-cost .summ").text(b(g));$("#callback-form #ih-cabin").attr("value",e);$("#callback-form #ih-tickets").attr("value",f);$("#callback-form #ih-cost").attr("value",g);$("#callback-form").css("display","block")});$("#callback-form").click(function(e){e.stopPropagation();$("#callback-form").css("display","none")});$("#callback-form .cbf-container").click(function(e){e.stopPropagation()});$("#callback-form .closeform").click(function(){$("#callback-form").css("display","none")});$(".contacts-item .name").click(function(){$(".lbox-mask").css("display","block")});$(".play-button").click(function(){var e="https://www.youtube.com/embed/"+$(this).data("video")+"?rel=0&amp;controls=0&amp;showinfo=0&enablejsapi=1";var f=$(this).data("width");var g=$(this).data("height");var h=f/g;if((f+80)>$(window).width()){f=$(window).width()-80;g=f/h}if((g+80)>$(window).height()){g=$(window).height()-80;f=g*h}$(".lbox-mask .lbox-container").css({width:f+"px",height:g+"px"});$(".lbox-mask .lbox-container iframe").attr({width:f,height:g,src:e});$(".lbox-mask").css("display","block")});$(".lbox-mask").click(function(e){e.stopPropagation();$(this).find("iframe").attr("src","back.html");$(this).css("display","none")});$(".lbox-mask .lbox-container").click(function(e){e.stopPropagation()});$(".lbox-mask .closeform").click(function(){$(this).parent().find("iframe").attr("src","back.html");$(this).parent().parent().css("display","none")});$(".more-but button").click(function(){$(this).parent().parent().find(".hidden").removeClass("hidden");$(this).parent().css("display","none")});$(".scroll-top").click(function(){$("html, body").animate({scrollTop:680},700,"swing")});$(".photos-list .list").owlCarousel({loop:true,nav:true,items:1,autoplay:false,navText:[]})});
/*!
 * Lightbox v2.8.2
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright 2007, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],b)}else{if(typeof exports==="object"){module.exports=b(require("jquery"))}else{a.lightbox=b(a.jQuery)}}}(this,function(a){function b(c){this.album=[];this.currentImageIndex=void 0;this.init();this.options=a.extend({},this.constructor.defaults);this.option(c)}b.defaults={albumLabel:"Фото %1 из %2",alwaysShowNavOnTouchDevices:false,fadeDuration:500,fitImagesInViewport:true,positionFromTop:50,resizeDuration:700,showImageNumberLabel:true,wrapAround:false,disableScrolling:false};b.prototype.option=function(c){a.extend(this.options,c)};b.prototype.imageCountLabel=function(d,c){return this.options.albumLabel.replace(/%1/g,d).replace(/%2/g,c)};b.prototype.init=function(){this.enable();this.build()};b.prototype.enable=function(){var c=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(d){c.start(a(d.currentTarget));return false})};b.prototype.build=function(){var c=this;a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body"));this.$lightbox=a("#lightbox");this.$overlay=a("#lightboxOverlay");this.$outerContainer=this.$lightbox.find(".lb-outerContainer");this.$container=this.$lightbox.find(".lb-container");this.containerTopPadding=parseInt(this.$container.css("padding-top"),10);this.containerRightPadding=parseInt(this.$container.css("padding-right"),10);this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10);this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10);this.$overlay.hide().on("click",function(){c.end();return false});this.$lightbox.hide().on("click",function(d){if(a(d.target).attr("id")==="lightbox"){c.end()}return false});this.$outerContainer.on("click",function(d){if(a(d.target).attr("id")==="lightbox"){c.end()}return false});this.$lightbox.find(".lb-prev").on("click",function(){if(c.currentImageIndex===0){c.changeImage(c.album.length-1)}else{c.changeImage(c.currentImageIndex-1)}return false});this.$lightbox.find(".lb-next").on("click",function(){if(c.currentImageIndex===c.album.length-1){c.changeImage(0)}else{c.changeImage(c.currentImageIndex+1)}return false});this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){c.end();return false})};b.prototype.start=function(g){var o=this;var c=a(window);c.on("resize",a.proxy(this.sizeOverlay,this));a("select, object, embed").css({visibility:"hidden"});this.sizeOverlay();this.album=[];var n=0;function l(i){o.album.push({link:i.attr("href"),title:i.attr("data-title")||i.attr("title")})}var k=g.attr("data-lightbox");var m;if(k){m=a(g.prop("tagName")+'[data-lightbox="'+k+'"]');for(var f=0;f<m.length;f=++f){l(a(m[f]));if(m[f]===g[0]){n=f}}}else{if(g.attr("rel")==="lightbox"){l(g)}else{m=a(g.prop("tagName")+'[rel="'+g.attr("rel")+'"]');for(var e=0;e<m.length;e=++e){l(a(m[e]));if(m[e]===g[0]){n=e}}}}var h=c.scrollTop()+this.options.positionFromTop;var d=c.scrollLeft();this.$lightbox.css({top:h+"px",left:d+"px"}).fadeIn(this.options.fadeDuration);if(this.options.disableScrolling){a("body").addClass("lb-disable-scrolling")}this.changeImage(n)};b.prototype.changeImage=function(f){var d=this;this.disableKeyboardNav();var e=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration);a(".lb-loader").fadeIn("slow");this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide();this.$outerContainer.addClass("animating");var c=new Image();c.onload=function(){var k;var h;var i;var m;var g;var l;var j;e.attr("src",d.album[f].link);k=a(c);e.width(c.width);e.height(c.height);if(d.options.fitImagesInViewport){j=a(window).width();l=a(window).height();g=j-d.containerLeftPadding-d.containerRightPadding-20;m=l-d.containerTopPadding-d.containerBottomPadding-120;if(d.options.maxWidth&&d.options.maxWidth<g){g=d.options.maxWidth}if(d.options.maxHeight&&d.options.maxHeight<g){m=d.options.maxHeight}if((c.width>g)||(c.height>m)){if((c.width/g)>(c.height/m)){i=g;h=parseInt(c.height/(c.width/i),10);e.width(i);e.height(h)}else{h=m;i=parseInt(c.width/(c.height/h),10);e.width(i);e.height(h)}}}d.sizeContainer(e.width(),e.height())};c.src=this.album[f].link;this.currentImageIndex=f};b.prototype.sizeOverlay=function(){this.$overlay.width(a(document).width()).height(a(document).height())};b.prototype.sizeContainer=function(g,c){var f=this;var e=this.$outerContainer.outerWidth();var j=this.$outerContainer.outerHeight();var i=g+this.containerLeftPadding+this.containerRightPadding;var d=c+this.containerTopPadding+this.containerBottomPadding;function h(){f.$lightbox.find(".lb-dataContainer").width(i);f.$lightbox.find(".lb-prevLink").height(d);f.$lightbox.find(".lb-nextLink").height(d);f.showImage()}if(e!==i||j!==d){this.$outerContainer.animate({width:i,height:d},this.options.resizeDuration,"swing",function(){h()})}else{h()}};b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(true).hide();this.$lightbox.find(".lb-image").fadeIn("slow");this.updateNav();this.updateDetails();this.preloadNeighboringImages();this.enableKeyboardNav()};b.prototype.updateNav=function(){var c=false;try{document.createEvent("TouchEvent");c=(this.options.alwaysShowNavOnTouchDevices)?true:false}catch(d){}this.$lightbox.find(".lb-nav").show();if(this.album.length>1){if(this.options.wrapAround){if(c){this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1")}this.$lightbox.find(".lb-prev, .lb-next").show()}else{if(this.currentImageIndex>0){this.$lightbox.find(".lb-prev").show();if(c){this.$lightbox.find(".lb-prev").css("opacity","1")}}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find(".lb-next").show();if(c){this.$lightbox.find(".lb-next").css("opacity","1")}}}}};b.prototype.updateDetails=function(){var c=this;if(typeof this.album[this.currentImageIndex].title!=="undefined"&&this.album[this.currentImageIndex].title!==""){this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(e){if(a(this).attr("target")!==undefined){window.open(a(this).attr("href"),a(this).attr("target"))}else{location.href=a(this).attr("href")}})}if(this.album.length>1&&this.options.showImageNumberLabel){var d=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(d).fadeIn("fast")}else{this.$lightbox.find(".lb-number").hide()}this.$outerContainer.removeClass("animating");this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return c.sizeOverlay()})};b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var d=new Image();d.src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){var c=new Image();c.src=this.album[this.currentImageIndex-1].link}};b.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))};b.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")};b.prototype.keyboardAction=function(f){var h=27;var g=37;var d=39;var c=f.keyCode;var e=String.fromCharCode(c).toLowerCase();if(c===h||e.match(/x|o|c/)){this.end()}else{if(e==="p"||c===g){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)}else{if(this.options.wrapAround&&this.album.length>1){this.changeImage(this.album.length-1)}}}else{if(e==="n"||c===d){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)}else{if(this.options.wrapAround&&this.album.length>1){this.changeImage(0)}}}}}};b.prototype.end=function(){this.disableKeyboardNav();a(window).off("resize",this.sizeOverlay);this.$lightbox.fadeOut(this.options.fadeDuration);this.$overlay.fadeOut(this.options.fadeDuration);a("select, object, embed").css({visibility:"visible"});if(this.options.disableScrolling){a("body").removeClass("lb-disable-scrolling")}};return new b()}));
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function(l,o,i,e){var p=i("html"),d=i(l),a=i(o),q=i.fancybox=function(){q.open.apply(this,arguments)},k=navigator.userAgent.match(/msie/i),c=null,f=o.createTouch!==e,j=function(r){return r&&r.hasOwnProperty&&r instanceof i},b=function(r){return r&&i.type(r)==="string"},m=function(r){return b(r)&&r.indexOf("%")>0},h=function(r){return(r&&!(r.style.overflow&&r.style.overflow==="hidden")&&((r.clientWidth&&r.scrollWidth>r.clientWidth)||(r.clientHeight&&r.scrollHeight>r.clientHeight)))},n=function(t,s){var r=parseInt(t,10)||0;if(s&&m(t)){r=q.getViewport()[s]/100*r}return Math.ceil(r)},g=function(r,s){return n(r,s)+"px"};i.extend(q,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!f,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(k?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(s,r){if(!s){return}if(!i.isPlainObject(r)){r={}}if(false===q.close(true)){return}if(!i.isArray(s)){s=j(s)?i(s).get():[s]}i.each(s,function(x,y){var w={},t,B,z,A,v,C,u;if(i.type(y)==="object"){if(y.nodeType){y=i(y)}if(j(y)){w={href:y.data("fancybox-href")||y.attr("href"),title:y.data("fancybox-title")||y.attr("title"),isDom:true,element:y};if(i.metadata){i.extend(true,w,y.metadata())}}else{w=y}}t=r.href||w.href||(b(y)?y:null);B=r.title!==e?r.title:w.title||"";z=r.content||w.content;A=z?"html":(r.type||w.type);if(!A&&w.isDom){A=y.data("fancybox-type");if(!A){v=y.prop("class").match(/fancybox\.(\w+)/);A=v?v[1]:null}}if(b(t)){if(!A){if(q.isImage(t)){A="image"}else{if(q.isSWF(t)){A="swf"}else{if(t.charAt(0)==="#"){A="inline"}else{if(b(y)){A="html";z=y}}}}}if(A==="ajax"){C=t.split(/\s+/,2);t=C.shift();u=C.shift()}}if(!z){if(A==="inline"){if(t){z=i(b(t)?t.replace(/.*(?=#[^\s]+$)/,""):t)}else{if(w.isDom){z=y}}}else{if(A==="html"){z=t}else{if(!A&&!t&&w.isDom){A="inline";z=y}}}}i.extend(w,{href:t,type:A,content:z,title:B,selector:u});s[x]=w});q.opts=i.extend(true,{},q.defaults,r);if(r.keys!==e){q.opts.keys=r.keys?i.extend({},q.defaults.keys,r.keys):false}q.group=s;return q._start(q.opts.index)},cancel:function(){var r=q.coming;if(!r||false===q.trigger("onCancel")){return}q.hideLoading();if(q.ajaxLoad){q.ajaxLoad.abort()}q.ajaxLoad=null;if(q.imgPreload){q.imgPreload.onload=q.imgPreload.onerror=null}if(r.wrap){r.wrap.stop(true,true).trigger("onReset").remove()}q.coming=null;if(!q.current){q._afterZoomOut(r)}},close:function(r){q.cancel();if(false===q.trigger("beforeClose")){return}q.unbindEvents();if(!q.isActive){return}if(!q.isOpen||r===true){i(".fancybox-wrap").stop(true).trigger("onReset").remove();q._afterZoomOut()}else{q.isOpen=q.isOpened=false;q.isClosing=true;i(".fancybox-item, .fancybox-nav").remove();q.wrap.stop(true,true).removeClass("fancybox-opened");q.transitions[q.current.closeMethod]()}},play:function(t){var r=function(){clearTimeout(q.player.timer)},v=function(){r();if(q.current&&q.player.isActive){q.player.timer=setTimeout(q.next,q.current.playSpeed)}},s=function(){r();a.unbind(".player");q.player.isActive=false;q.trigger("onPlayEnd")},u=function(){if(q.current&&(q.current.loop||q.current.index<q.group.length-1)){q.player.isActive=true;a.bind({"onCancel.player beforeClose.player":s,"onUpdate.player":v,"beforeLoad.player":r});v();q.trigger("onPlayStart")}};if(t===true||(!q.player.isActive&&t!==false)){u()}else{s()}},next:function(s){var r=q.current;if(r){if(!b(s)){s=r.direction.next}q.jumpto(r.index+1,s,"next")}},prev:function(s){var r=q.current;if(r){if(!b(s)){s=r.direction.prev}q.jumpto(r.index-1,s,"prev")}},jumpto:function(s,u,r){var t=q.current;if(!t){return}s=n(s);q.direction=u||t.direction[(s>=t.index?"next":"prev")];q.router=r||"jumpto";if(t.loop){if(s<0){s=t.group.length+(s%t.group.length)}s=s%t.group.length}if(t.group[s]!==e){q.cancel();q._start(s)}},reposition:function(u,r){var t=q.current,s=t?t.wrap:null,v;if(s){v=q._getPosition(r);if(u&&u.type==="scroll"){delete v.position;s.stop(true,true).animate(v,200)}else{s.css(v);t.pos=i.extend({},t.dim,v)}}},update:function(t){var r=(t&&t.type),s=!r||r==="orientationchange";if(s){clearTimeout(c);c=null}if(!q.isOpen||c){return}c=setTimeout(function(){var u=q.current;if(!u||q.isClosing){return}q.wrap.removeClass("fancybox-tmp");if(s||r==="load"||(r==="resize"&&u.autoResize)){q._setDimension()}if(!(r==="scroll"&&u.canShrink)){q.reposition(t)}q.trigger("onUpdate");c=null},(s&&!f?0:300))},toggle:function(r){if(q.isOpen){q.current.fitToView=i.type(r)==="boolean"?r:!q.current.fitToView;if(f){q.wrap.removeAttr("style").addClass("fancybox-tmp");q.trigger("onUpdate")}q.update()}},hideLoading:function(){a.unbind(".loading");i("#fancybox-loading").remove()},showLoading:function(){var s,r;q.hideLoading();s=i('<div id="fancybox-loading"><div></div></div>').click(q.cancel).appendTo("body");a.bind("keydown.loading",function(t){if((t.which||t.keyCode)===27){t.preventDefault();q.cancel()}});if(!q.defaults.fixed){r=q.getViewport();s.css({position:"absolute",top:(r.h*0.5)+r.y,left:(r.w*0.5)+r.x})}},getViewport:function(){var r=(q.current&&q.current.locked)||false,s={x:d.scrollLeft(),y:d.scrollTop()};if(r){s.w=r[0].clientWidth;s.h=r[0].clientHeight}else{s.w=f&&l.innerWidth?l.innerWidth:d.width();s.h=f&&l.innerHeight?l.innerHeight:d.height()}return s},unbindEvents:function(){if(q.wrap&&j(q.wrap)){q.wrap.unbind(".fb")}a.unbind(".fb");d.unbind(".fb")},bindEvents:function(){var s=q.current,r;if(!s){return}d.bind("orientationchange.fb"+(f?"":" resize.fb")+(s.autoCenter&&!s.locked?" scroll.fb":""),q.update);r=s.keys;if(r){a.bind("keydown.fb",function(v){var t=v.which||v.keyCode,u=v.target||v.srcElement;if(t===27&&q.coming){return false}if(!v.ctrlKey&&!v.altKey&&!v.shiftKey&&!v.metaKey&&!(u&&(u.type||i(u).is("[contenteditable]")))){i.each(r,function(w,x){if(s.group.length>1&&x[t]!==e){q[w](x[t]);v.preventDefault();return false}if(i.inArray(t,x)>-1){q[w]();v.preventDefault();return false}})}})}if(i.fn.mousewheel&&s.mouseWheel){q.wrap.bind("mousewheel.fb",function(y,z,u,t){var x=y.target||null,v=i(x),w=false;while(v.length){if(w||v.is(".fancybox-skin")||v.is(".fancybox-wrap")){break}w=h(v[0]);v=i(v).parent()}if(z!==0&&!w){if(q.group.length>1&&!s.canShrink){if(t>0||u>0){q.prev(t>0?"down":"left")}else{if(t<0||u<0){q.next(t<0?"up":"right")}}y.preventDefault()}}})}},trigger:function(s,u){var r,t=u||q.coming||q.current;if(!t){return}if(i.isFunction(t[s])){r=t[s].apply(t,Array.prototype.slice.call(arguments,1))}if(r===false){return false}if(t.helpers){i.each(t.helpers,function(w,v){if(v&&q.helpers[w]&&i.isFunction(q.helpers[w][s])){q.helpers[w][s](i.extend(true,{},q.helpers[w].defaults,v),t)}})}a.trigger(s)},isImage:function(r){return b(r)&&r.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(r){return b(r)&&r.match(/\.(swf)((\?|#).*)?$/i)},_start:function(s){var t={},x,r,u,v,w;s=n(s);x=q.group[s]||null;if(!x){return false}t=i.extend(true,{},q.opts,x);v=t.margin;w=t.padding;if(i.type(v)==="number"){t.margin=[v,v,v,v]}if(i.type(w)==="number"){t.padding=[w,w,w,w]}if(t.modal){i.extend(true,t,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(t.autoSize){t.autoWidth=t.autoHeight=true}if(t.width==="auto"){t.autoWidth=true}if(t.height==="auto"){t.autoHeight=true}t.group=q.group;t.index=s;q.coming=t;if(false===q.trigger("beforeLoad")){q.coming=null;return}u=t.type;r=t.href;if(!u){q.coming=null;if(q.current&&q.router&&q.router!=="jumpto"){q.current.index=s;return q[q.router](q.direction)}return false}q.isActive=true;if(u==="image"||u==="swf"){t.autoHeight=t.autoWidth=false;t.scrolling="visible"}if(u==="image"){t.aspectRatio=true}if(u==="iframe"&&f){t.scrolling="scroll"}t.wrap=i(t.tpl.wrap).addClass("fancybox-"+(f?"mobile":"desktop")+" fancybox-type-"+u+" fancybox-tmp "+t.wrapCSS).appendTo(t.parent||"body");i.extend(t,{skin:i(".fancybox-skin",t.wrap),outer:i(".fancybox-outer",t.wrap),inner:i(".fancybox-inner",t.wrap)});i.each(["Top","Right","Bottom","Left"],function(z,y){t.skin.css("padding"+y,g(t.padding[z]))});q.trigger("onReady");if(u==="inline"||u==="html"){if(!t.content||!t.content.length){return q._error("content")}}else{if(!r){return q._error("href")}}if(u==="image"){q._loadImage()}else{if(u==="ajax"){q._loadAjax()}else{if(u==="iframe"){q._loadIframe()}else{q._afterLoad()}}}},_error:function(r){i.extend(q.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:r,content:q.coming.tpl.error});q._afterLoad()},_loadImage:function(){var r=q.imgPreload=new Image();r.onload=function(){this.onload=this.onerror=null;q.coming.width=this.width/q.opts.pixelRatio;q.coming.height=this.height/q.opts.pixelRatio;q._afterLoad()};r.onerror=function(){this.onload=this.onerror=null;q._error("image")};r.src=q.coming.href;if(r.complete!==true){q.showLoading()}},_loadAjax:function(){var r=q.coming;q.showLoading();q.ajaxLoad=i.ajax(i.extend({},r.ajax,{url:r.href,error:function(s,t){if(q.coming&&t!=="abort"){q._error("ajax",s)}else{q.hideLoading()}},success:function(s,t){if(t==="success"){r.content=s;q._afterLoad()}}}))},_loadIframe:function(){var r=q.coming,s=i(r.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",f?"auto":r.iframe.scrolling).attr("src",r.href);i(r.wrap).bind("onReset",function(){try{i(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}});if(r.iframe.preload){q.showLoading();s.one("load",function(){i(this).data("ready",1);if(!f){i(this).bind("load.fb",q.update)}i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();q._afterLoad()})}r.content=s.appendTo(r.inner);if(!r.iframe.preload){q._afterLoad()}},_preloadImages:function(){var w=q.group,v=q.current,r=w.length,t=v.preload?Math.min(v.preload,r-1):0,u,s;for(s=1;s<=t;s+=1){u=w[(v.index+s)%r];if(u.type==="image"&&u.href){new Image().src=u.href}}},_afterLoad:function(){var s=q.coming,u=q.current,z="fancybox-placeholder",w,x,y,t,r,v;q.hideLoading();if(!s||q.isActive===false){return}if(false===q.trigger("afterLoad",s,u)){s.wrap.stop(true).trigger("onReset").remove();q.coming=null;return}if(u){q.trigger("beforeChange",u);u.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()}q.unbindEvents();w=s;x=s.content;y=s.type;t=s.scrolling;i.extend(q,{wrap:w.wrap,skin:w.skin,outer:w.outer,inner:w.inner,current:w,previous:u});r=w.href;switch(y){case"inline":case"ajax":case"html":if(w.selector){x=i("<div>").html(x).find(w.selector)}else{if(j(x)){if(!x.data(z)){x.data(z,i('<div class="'+z+'"></div>').insertAfter(x).hide())}x=x.show().detach();w.wrap.bind("onReset",function(){if(i(this).find(x).length){x.hide().replaceAll(x.data(z)).data(z,false)}})}}break;case"image":x=w.tpl.image.replace("{href}",r);break;case"swf":x='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>';v="";i.each(w.swf,function(A,B){x+='<param name="'+A+'" value="'+B+'"></param>';v+=" "+A+'="'+B+'"'});x+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+v+"></embed></object>";break}if(!(j(x)&&x.parent().is(w.inner))){w.inner.append(x)}q.trigger("beforeShow");w.inner.css("overflow",t==="yes"?"scroll":(t==="no"?"hidden":t));q._setDimension();q.reposition();q.isOpen=false;q.coming=null;q.bindEvents();if(!q.isOpened){i(".fancybox-wrap").not(w.wrap).stop(true).trigger("onReset").remove()}else{if(u.prevMethod){q.transitions[u.prevMethod]()}}q.transitions[q.isOpened?w.nextMethod:w.openMethod]();q._preloadImages()},_setDimension:function(){var U=q.getViewport(),Q=0,W=false,Y=false,C=q.wrap,O=q.skin,Z=q.inner,L=q.current,M=L.width,J=L.height,F=L.minWidth,y=L.minHeight,S=L.maxWidth,K=L.maxHeight,E=L.scrolling,w=L.scrollOutside?L.scrollbarWidth:0,I=L.margin,x=n(I[1]+I[3]),v=n(I[0]+I[2]),t,s,P,R,H,G,N,A,z,V,u,X,r,B,D;C.add(O).add(Z).width("auto").height("auto").removeClass("fancybox-tmp");t=n(O.outerWidth(true)-O.width());s=n(O.outerHeight(true)-O.height());P=x+t;R=v+s;H=m(M)?(U.w-P)*n(M)/100:M;G=m(J)?(U.h-R)*n(J)/100:J;if(L.type==="iframe"){B=L.content;if(L.autoHeight&&B.data("ready")===1){try{if(B[0].contentWindow.document.location){Z.width(H).height(9999);D=B.contents().find("body");if(w){D.css("overflow-x","hidden")}G=D.outerHeight(true)}}catch(T){}}}else{if(L.autoWidth||L.autoHeight){Z.addClass("fancybox-tmp");if(!L.autoWidth){Z.width(H)}if(!L.autoHeight){Z.height(G)}if(L.autoWidth){H=Z.width()}if(L.autoHeight){G=Z.height()}Z.removeClass("fancybox-tmp")}}M=n(H);J=n(G);z=H/G;F=n(m(F)?n(F,"w")-P:F);S=n(m(S)?n(S,"w")-P:S);y=n(m(y)?n(y,"h")-R:y);K=n(m(K)?n(K,"h")-R:K);N=S;A=K;if(L.fitToView){S=Math.min(U.w-P,S);K=Math.min(U.h-R,K)}X=U.w-x;r=U.h-v;if(L.aspectRatio){if(M>S){M=S;J=n(M/z)}if(J>K){J=K;M=n(J*z)}if(M<F){M=F;J=n(M/z)}if(J<y){J=y;M=n(J*z)}}else{M=Math.max(F,Math.min(M,S));if(L.autoHeight&&L.type!=="iframe"){Z.width(M);J=Z.height()}J=Math.max(y,Math.min(J,K))}if(L.fitToView){Z.width(M).height(J);C.width(M+t);V=C.width();u=C.height();if(L.aspectRatio){while((V>X||u>r)&&M>F&&J>y){if(Q++>19){break}J=Math.max(y,Math.min(K,J-10));M=n(J*z);if(M<F){M=F;J=n(M/z)}if(M>S){M=S;J=n(M/z)}Z.width(M).height(J);C.width(M+t);V=C.width();u=C.height()}}else{M=Math.max(F,Math.min(M,M-(V-X)));J=Math.max(y,Math.min(J,J-(u-r)))}}if(w&&E==="auto"&&J<G&&(M+t+w)<X){M+=w}Z.width(M).height(J);C.width(M+t);V=C.width();u=C.height();W=(V>X||u>r)&&M>F&&J>y;Y=L.aspectRatio?(M<N&&J<A&&M<H&&J<G):((M<N||J<A)&&(M<H||J<G));i.extend(L,{dim:{width:g(V),height:g(u)},origWidth:H,origHeight:G,canShrink:W,canExpand:Y,wPadding:t,hPadding:s,wrapSpace:u-O.outerHeight(true),skinSpace:O.height()-J});if(!B&&L.autoHeight&&J>y&&J<K&&!Y){Z.height("auto")}},_getPosition:function(t){var x=q.current,s=q.getViewport(),v=x.margin,u=q.wrap.width()+v[1]+v[3],r=q.wrap.height()+v[0]+v[2],w={position:"absolute",top:v[0],left:v[3]};if(x.autoCenter&&x.fixed&&!t&&r<=s.h&&u<=s.w){w.position="fixed"}else{if(!x.locked){w.top+=s.y;w.left+=s.x}}w.top=g(Math.max(w.top,w.top+((s.h-r)*x.topRatio)));w.left=g(Math.max(w.left,w.left+((s.w-u)*x.leftRatio)));return w},_afterZoomIn:function(){var r=q.current;if(!r){return}q.isOpen=q.isOpened=true;q.wrap.css("overflow","visible").addClass("fancybox-opened");q.update();if(r.closeClick||(r.nextClick&&q.group.length>1)){q.inner.css("cursor","pointer").bind("click.fb",function(s){if(!i(s.target).is("a")&&!i(s.target).parent().is("a")){s.preventDefault();q[r.closeClick?"close":"next"]()}})}if(r.closeBtn){i(r.tpl.closeBtn).appendTo(q.skin).bind("click.fb",function(s){s.preventDefault();q.close()})}if(r.arrows&&q.group.length>1){if(r.loop||r.index>0){i(r.tpl.prev).appendTo(q.outer).bind("click.fb",q.prev)}if(r.loop||r.index<q.group.length-1){i(r.tpl.next).appendTo(q.outer).bind("click.fb",q.next)}}q.trigger("afterShow");if(!r.loop&&r.index===r.group.length-1){q.play(false)}else{if(q.opts.autoPlay&&!q.player.isActive){q.opts.autoPlay=false;q.play()}}},_afterZoomOut:function(r){r=r||q.current;i(".fancybox-wrap").trigger("onReset").remove();i.extend(q,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});q.trigger("afterClose",r)}});q.transitions={getOrigPosition:function(){var u=q.current,s=u.element,x=u.orig,w={},r=50,y=50,v=u.hPadding,z=u.wPadding,t=q.getViewport();if(!x&&u.isDom&&s.is(":visible")){x=s.find("img:first");if(!x.length){x=s}}if(j(x)){w=x.offset();if(x.is("img")){r=x.outerWidth();y=x.outerHeight()}}else{w.top=t.y+(t.h-y)*u.topRatio;w.left=t.x+(t.w-r)*u.leftRatio}if(q.wrap.css("position")==="fixed"||u.locked){w.top-=t.y;w.left-=t.x}w={top:g(w.top-v*u.topRatio),left:g(w.left-z*u.leftRatio),width:g(r+z),height:g(y+v)};return w},step:function(s,t){var v,x,y,r=t.prop,u=q.current,w=u.wrapSpace,z=u.skinSpace;if(r==="width"||r==="height"){v=t.end===t.start?1:(s-t.start)/(t.end-t.start);if(q.isClosing){v=1-v}x=r==="width"?u.wPadding:u.hPadding;y=s-x;q.skin[r](n(r==="width"?y:y-(w*v)));q.inner[r](n(r==="width"?y:y-(w*v)-(z*v)))}},zoomIn:function(){var v=q.current,s=v.pos,t=v.openEffect,u=t==="elastic",r=i.extend({opacity:1},s);delete r.position;if(u){s=this.getOrigPosition();if(v.openOpacity){s.opacity=0.1}}else{if(t==="fade"){s.opacity=0.1}}q.wrap.css(s).animate(r,{duration:t==="none"?0:v.openSpeed,easing:v.openEasing,step:u?this.step:null,complete:q._afterZoomIn})},zoomOut:function(){var u=q.current,s=u.closeEffect,t=s==="elastic",r={opacity:0.1};if(t){r=this.getOrigPosition();if(u.closeOpacity){r.opacity=0.1}}q.wrap.animate(r,{duration:s==="none"?0:u.closeSpeed,easing:u.closeEasing,step:t?this.step:null,complete:q._afterZoomOut})},changeIn:function(){var w=q.current,t=w.nextEffect,s=w.pos,r={opacity:1},v=q.direction,x=200,u;s.opacity=0.1;if(t==="elastic"){u=v==="down"||v==="up"?"top":"left";if(v==="down"||v==="right"){s[u]=g(n(s[u])-x);r[u]="+="+x+"px"}else{s[u]=g(n(s[u])+x);r[u]="-="+x+"px"}}if(t==="none"){q._afterZoomIn()}else{q.wrap.css(s).animate(r,{duration:w.nextSpeed,easing:w.nextEasing,complete:q._afterZoomIn})}},changeOut:function(){var t=q.previous,s=t.prevEffect,r={opacity:0.1},u=q.direction,v=200;if(s==="elastic"){r[u==="down"||u==="up"?"top":"left"]=(u==="up"||u==="left"?"-":"+")+"="+v+"px"}t.wrap.animate(r,{duration:s==="none"?0:t.prevSpeed,easing:t.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}};q.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!f,fixed:true},overlay:null,fixed:false,el:i("html"),create:function(r){r=i.extend({},this.defaults,r);if(this.overlay){this.close()}this.overlay=i('<div class="fancybox-overlay"></div>').appendTo(q.coming?q.coming.parent:r.parent);this.fixed=false;if(r.fixed&&q.defaults.fixed){this.overlay.addClass("fancybox-overlay-fixed");this.fixed=true}},open:function(s){var r=this;s=i.extend({},this.defaults,s);if(this.overlay){this.overlay.unbind(".overlay").width("auto").height("auto")}else{this.create(s)}if(!this.fixed){d.bind("resize.overlay",i.proxy(this.update,this));this.update()}if(s.closeClick){this.overlay.bind("click.overlay",function(t){if(i(t.target).hasClass("fancybox-overlay")){if(q.isActive){q.close()}else{r.close()}return false}})}this.overlay.css(s.css).show()},close:function(){var r,s;d.unbind("resize.overlay");if(this.el.hasClass("fancybox-lock")){i(".fancybox-margin").removeClass("fancybox-margin");r=d.scrollTop();s=d.scrollLeft();this.el.removeClass("fancybox-lock");d.scrollTop(r).scrollLeft(s)}i(".fancybox-overlay").remove().hide();i.extend(this,{overlay:null,fixed:false})},update:function(){var s="100%",r;this.overlay.width(s).height("100%");if(k){r=Math.max(o.documentElement.offsetWidth,o.body.offsetWidth);if(a.width()>r){s=a.width()}}else{if(a.width()>d.width()){s=a.width()}}this.overlay.width(s).height(a.height())},onReady:function(s,t){var r=this.overlay;i(".fancybox-overlay").stop(true,true);if(!r){this.create(s)}if(s.locked&&this.fixed&&t.fixed){if(!r){this.margin=a.height()>d.height()?i("html").css("margin-right").replace("px",""):false}t.locked=this.overlay.append(t.wrap);t.fixed=false}if(s.showEarly===true){this.beforeShow.apply(this,arguments)}},beforeShow:function(t,u){var r,s;if(u.locked){if(this.margin!==false){i("*").filter(function(){return(i(this).css("position")==="fixed"&&!i(this).hasClass("fancybox-overlay")&&!i(this).hasClass("fancybox-wrap"))}).addClass("fancybox-margin");this.el.addClass("fancybox-margin")}r=d.scrollTop();s=d.scrollLeft();this.el.addClass("fancybox-lock");d.scrollTop(r).scrollLeft(s)}this.open(t)},onUpdate:function(){if(!this.fixed){this.update()}},afterClose:function(r){if(this.overlay&&!q.coming){this.overlay.fadeOut(r.speedOut,i.proxy(this.close,this))}}};q.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(s){var u=q.current,w=u.title,r=s.type,v,t;if(i.isFunction(w)){w=w.call(u.element,u)}if(!b(w)||i.trim(w)===""){return}v=i('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+w+"</div>");switch(r){case"inside":t=q.skin;break;case"outside":t=q.wrap;break;case"over":t=q.inner;break;default:t=q.skin;v.appendTo("body");if(k){v.width(v.width())}v.wrapInner('<span class="child"></span>');q.current.margin[2]+=Math.abs(n(v.css("margin-bottom")));break}v[(s.position==="top"?"prependTo":"appendTo")](t)}};i.fn.fancybox=function(t){var s,u=i(this),r=this.selector||"",v=function(z){var y=i(this).blur(),w=s,x,A;if(!(z.ctrlKey||z.altKey||z.shiftKey||z.metaKey)&&!y.is(".fancybox-wrap")){x=t.groupAttr||"data-fancybox-group";A=y.attr(x);if(!A){x="rel";A=y.get(0)[x]}if(A&&A!==""&&A!=="nofollow"){y=r.length?i(r):u;y=y.filter("["+x+'="'+A+'"]');w=y.index(this)}t.index=w;if(q.open(y,t)!==false){z.preventDefault()}}};t=t||{};s=t.index||0;if(!r||t.live===false){u.unbind("click.fb-start").bind("click.fb-start",v)}else{a.undelegate(r,"click.fb-start").delegate(r+":not('.fancybox-item, .fancybox-nav')","click.fb-start",v)}this.filter("[data-fancybox-start=1]").trigger("click");return this};a.ready(function(){var s,r;if(i.scrollbarWidth===e){i.scrollbarWidth=function(){var u=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),v=u.children(),t=v.innerWidth()-v.height(99).innerWidth();u.remove();return t}}if(i.support.fixedPosition===e){i.support.fixedPosition=(function(){var u=i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=(u[0].offsetTop===20||u[0].offsetTop===15);u.remove();return t}())}i.extend(q.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")});s=i(l).width();p.addClass("fancybox-lock-test");r=i(l).width();p.removeClass("fancybox-lock-test");i("<style type='text/css'>.fancybox-margin{margin-right:"+(r-s)+"px;}</style>").appendTo("head")})}(window,document,jQuery));