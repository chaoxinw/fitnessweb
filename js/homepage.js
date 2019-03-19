jQuery(document).ready(function( $ ) {
  // var bar = document.createElement('div');
  // bar.setAttribute('class', 'js-moving-bar-left');
  // $('#info-bar-2').append(bar);

  (function recuringMove() {
    setInterval(function() {
      barMove();
      barMove_left();
      setTimeout(function(){
        barMove2(2);
        barMove2_left(2);
      }, 200);
    }, 2000);
  })();


  function barMove(){
    var bar = document.createElement('div');
    bar.setAttribute('class', 'js-moving-bar');
    $('#info-bar-1').append(bar);

    var o = $('.js-moving-bar');
    var right = o.css('right');         //492.477px
    var totalWidth = $('.info-bar').css('width')        //1368px
    //alert(totalWidth)
    var num = parseInt(right, 10);
    var totalWidth_num = parseInt(totalWidth, 10);
    var limit = 0.38 * totalWidth_num;

    var motionInterval = setInterval(function() {
      num = num + 2;
      o.css('right', num+'px');
      if (num > limit) {
        removeMoveBar();
        clearInterval(motionInterval);
      }
    }, 16);
  }

  function removeMoveBar(){
    $('.js-moving-bar').fadeOut(400, function(){
      $('.js-moving-bar').remove();
    });
  }
//--------------
  function barMove2(n){
    var bar = document.createElement('div');
    bar.setAttribute('class', 'js-moving-bar-'+n);
    $('#info-bar-1').append(bar);

    var o = $('.js-moving-bar-'+n);
    var right = o.css('right');         //492.477px
    var totalWidth = $('.info-bar').css('width')        //1368px
    //alert(totalWidth)
    var num = parseInt(right, 10);
    var totalWidth_num = parseInt(totalWidth, 10);
    var limit = 0.38 * totalWidth_num;

    var motionInterval = setInterval(function() {
      num = num + 2;
      o.css('right', num+'px');
      if (num > limit) {
        removeMoveBar2(n);
        clearInterval(motionInterval);
      }
    }, 16);
  }

  function removeMoveBar2(n){
    $('.js-moving-bar-'+n).fadeOut(400, function(){
      $('.js-moving-bar-'+n).remove();
    });
  }

  //----------------------------------------barmove from left to right
  function barMove_left(){
    var bar = document.createElement('div');
    bar.setAttribute('class', 'js-moving-bar-left');
    $('#info-bar-2').append(bar);

    var o = $('.js-moving-bar-left');
    var left = o.css('left');
    var totalWidth = $('.info-bar').css('width')
    var num = parseInt(left, 10);
    var totalWidth_num = parseInt(totalWidth, 10);
    var limit = 0.38 * totalWidth_num;

    var motionInterval = setInterval(function() {
      num = num + 2;
      o.css('left', num+'px');
      if (num > limit) {
        removeMoveBar_left();
        clearInterval(motionInterval);
      }
    }, 16);
  }

  function removeMoveBar_left(){
    $('.js-moving-bar-left').fadeOut(400, function(){
      $('.js-moving-bar-left').remove();
    });
  }
  function barMove2_left(n){
    var bar = document.createElement('div');
    bar.setAttribute('class', 'js-moving-bar-left-'+n);
    $('#info-bar-2').append(bar);

    var o = $('.js-moving-bar-left-'+n);
    var left = o.css('left');
    var totalWidth = $('.info-bar').css('width')
    var num = parseInt(left, 10);
    var totalWidth_num = parseInt(totalWidth, 10);
    var limit = 0.38 * totalWidth_num;

    var motionInterval = setInterval(function() {
      num = num + 2;
      o.css('left', num+'px');
      if (num > limit) {
        removeMoveBar2_left(n);
        clearInterval(motionInterval);
      }
    }, 16);
  }

  function removeMoveBar2_left(n){
    $('.js-moving-bar-left-'+n).fadeOut(400, function(){
      $('.js-moving-bar-left-'+n).remove();
    });
  }


  // load video
  
  $('#neo-front-page-video').prettyEmbed({
				videoID: '6r690JpZPmM',
				previewSize: 'hd',				// use either this option...
				customPreviewImage: "./assets/fitness4.png",			// ...or this option

				// Embed controls
				showInfo: false,
				showControls: true,
				loop: false,

				colorScheme: 'dark',
				showRelated: false,

				useFitVids: true
			});
  

    window.sr = ScrollReveal({origin: 'left', reset: false, duration: 1500});
    sr.reveal('.info-block-inner');

    // $('.carousel').carousel({interval: 5000});
    // jQuery(function ($) {
      $('#slider').rbtSlider({
  				height: '700px',
  				'dots': true,
  				'arrows': true,
  				'auto': 6
  			})
    // })


    $('#slick-carousel').slick({
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 1,
				dots: true,
				// slidesToShow: 1
			});


      // particlesJS.load('free-trial-container', 'particlesjs-config.json', function() {
			// });

      // $(".trial-button").click(function (e) {
			// 	const shape = new mojs.Shape({
			// 	  left: 0, top: 0,
			// 	  radius:           10,
			// 	  stroke:           'white',
			// 	  fill:             'none',
			// 	  strokeWidth:      { 10 : 0, easing:           'cubic.out' },
			// 	  strokeLinecap:    'round',
			// 	  scale:            { 0: 3 },
			// 	  duration:         600,
			// 	  easing:           'quad.out',
      //     onComplete() {
			// 	  	$('div[data-name="mojs-shape"]').remove();
			// 	  },
			// 	});
      //
			//   shape
			//     .tune({ x: e.pageX, y: e.pageY })
			//     .replay();
			// });

      function signupHookScroll() {
        if ($('#free-trial-container').length) {
          var signupHook = $('#free-trial-container')
          var signupHookContent = $('.free-trial-content');
          var ypos = window.pageYOffset;
          var wid = window.innerWidth;
          if (wid >= 1024) {
            if (ypos > 1) {
              signupHook.css('height', '50px');
              signupHookContent.css('top', '5px');
              signupHookContent.css('width', '700px');
              window.pJSDom[0].pJS.particles.number.value = 0;
              // window.pJSDom[0].pJS.particles.move.enable = false;
              window.pJSDom[0].pJS.fn.particlesRefresh();
            } else {
              signupHook.css('height', '120px');
              signupHookContent.css('top', '10px');
              if (wid >= 350){
                signupHookContent.css('width', '350px');
              } else {
                signupHookContent.css('width', '300px');
              }
              window.pJSDom[0].pJS.particles.number.value = 80;
              // window.pJSDom[0].pJS.particles.move.enable = true;
              window.pJSDom[0].pJS.fn.particlesRefresh();
            }
          }
        }
      }
      window.addEventListener("scroll", signupHookScroll);

      $('nav.fixed').midnight();


})
