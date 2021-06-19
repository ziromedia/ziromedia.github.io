$(".home_banner").scroll(function(){
    $(".home_banner").slideUp();
    $(".info_section").slideDown();
});
$(".menu_bars").click(function(){
    $(".menu_items").slideToggle();
});
$(document).mouseup(function(e){
    var container = $(".main_menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $(".menu_items").slideUp();
    }
});
$(".page-scroll").click(function(){
	$(this).find("span").addClass("anim");
	$(this).parent().siblings().find("span").removeClass("anim");
});
var scrollLink = $('.page-scroll');
// Active link switching
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
            $(this).find("span").addClass("anim");
			$(this).parent().siblings().find("span").removeClass("anim");
        }
    });
});
$(document).ready(function(){
  $(".info a").click(function(){
    window.scrollTo(0, 0);
  });
  $(".next_page").click(function(){
    $(".home_banner").fadeOut();
    $(".info_section").fadeIn();
  });
  $(".home_screen").click(function(){
    $(".info_section").slideUp();
    $(".home_banner").fadeIn();
  });
  if ($('.slider').length > 0) {  
    const $slider = $(".slider");
    $slider.
    on('init', () => {
      mouseWheel($slider);
    }).
    slick({
      // dots: true,
      vertical: true,
      infinite: false });
    function mouseWheel($slider) {
      $(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
    }
    function mouseWheelHandler(event) {
      event.preventDefault();
      const $slider = event.data.$slider;
      const delta = event.originalEvent.deltaY;
      if (delta > 0) {
        $slider.slick('slickPrev');
      } else
      {
        $slider.slick('slickNext');
      }
    }
  }
  // aside js
    var screen_width = $(window).width();
    var body_width = $('body').width();
    var requir_val = (screen_width - body_width)/2 + 50;
    $(".social_web").css("right",requir_val);
  $(window).resize(function(){
    var screen_width = $(window).width();
    var body_width = $('body').width();
    var requir_val = (screen_width - body_width)/2 + 50;
    $(".social_web").css("right",requir_val);
  });
  if ($(window).width() < 768) {
   $(".info a").click(function(){
    $(".home_banner").slideUp();
    $(".info_section").slideDown();
    $(".navbar-toggler").trigger("click");
   });
  }


// modal script
$(".modal_box .close").click(function(){
  $("body").css("overflow","auto");
});
$(".modal_1").click(function(){
  $(".modal1").show();
  $(".modal2").hide();
});
$(".modal_2").click(function(){
  $(".modal2").show();
  $(".modal1").hide();
});
$(".open_modal").click(function(){
  $("body").css("overflow","hidden");
  $(".bodymovin").find("svg").remove();
// Declare the animation container and parameter to be used in the animation
var animContainer = document.getElementById("bodymovin");
// The animation data exported from Adobe After Effects
var animationData = {
    assets: [],
    v: "4.3.0",
    ddd: 0,
    layers: [
        {
            ddd: 0,
            ind: 0,
            ty: 1,
            nm: "blob__yellow",
            ks: {
                o: { k: 100 },
                r: { k: 0 },
                p: { k: [540, 540, 0] },
                a: { k: [540, 540, 0] },
                s: {
                    k: [
                        {
                            i: { x: [0.222, 0.222, 0.667], y: [1, 1, 0.667] },
                            o: {
                                x: [0.167, 0.167, 0.167],
                                y: [0.167, 0.167, 0.167]
                            },
                            n: [
                                "0p222_1_0p167_0p167",
                                "0p222_1_0p167_0p167",
                                "0p667_0p667_0p167_0p167"
                            ],
                            t: 4,
                            s: [0, 0, 100],
                            e: [100, 100, 100]
                        },
                        { t: 15 }
                    ]
                }
            },
            hasMask: true,
            masksProperties: [
                {
                    cl: true,
                    inv: false,
                    mode: "a",
                    pt: {
                        k: [
                            {
                                i: { x: 0.833, y: 0.833 },
                                o: { x: 0.167, y: 0.167 },
                                n: "0p833_0p833_0p167_0p167",
                                t: 4,
                                s: [
                                    {
                                        i: [
                                            [26.858, -3.247],
                                            [25.249, -14.754],
                                            [-5.297, -33],
                                            [-16.249, -9.037],
                                            [-28.885, -3.379],
                                            [-21, -2.703],
                                            [-40.627, 14.108],
                                            [-1.297, 12],
                                            [7.283, 17.874],
                                            [17.465, 10.855]
                                        ],
                                        o: [
                                            [-19, 2.297],
                                            [-25.249, 14.754],
                                            [5.297, 33],
                                            [14.667, 8.157],
                                            [28.885, 3.379],
                                            [21, 2.703],
                                            [17.679, -6.139],
                                            [3.22, -29.802],
                                            [-8.734, -21.435],
                                            [-22.887, -14.224]
                                        ],
                                        v: [
                                            [476, 432.703],
                                            [431.249, 460.246],
                                            [379.703, 490],
                                            [426.333, 512.843],
                                            [462.115, 534.621],
                                            [501, 518.297],
                                            [551.321, 547.139],
                                            [565.297, 516],
                                            [575.717, 473.126],
                                            [521.887, 477.224]
                                        ]
                                    }
                                ],
                                e: [
                                    {
                                        i: [
                                            [145.748, 0],
                                            [141.126, -140.618],
                                            [22.297, -160],
                                            [-7.41, -117.525],
                                            [-128.115, -71.621],
                                            [-127.399, 0],
                                            [-141.321, 102.861],
                                            [0, 194.556],
                                            [64.283, 87.874],
                                            [138.363, 82.457]
                                        ],
                                        o: [
                                            [-214.963, 0],
                                            [-141.795, 141.284],
                                            [-17.361, 124.581],
                                            [3.667, 58.158],
                                            [116.055, 64.879],
                                            [236.39, 0],
                                            [145.858, -106.163],
                                            [0, -112.43],
                                            [-95.835, -131.005],
                                            [-116.724, -69.561]
                                        ],
                                        v: [
                                            [506, 3.703],
                                            [219.249, 247.246],
                                            [9.703, 488],
                                            [92.333, 749.842],
                                            [72.115, 1023.621],
                                            [526, 936.297],
                                            [953.321, 953.139],
                                            [978.297, 592],
                                            [1063.717, 236.126],
                                            [768.887, 177.224]
                                        ]
                                    }
                                ]
                            },
                            {
                                i: { x: 0.833, y: 0.833 },
                                o: { x: 0.167, y: 0.167 },
                                n: "0p833_0p833_0p167_0p167",
                                t: 21,
                                s: [
                                    {
                                        i: [
                                            [145.748, 0],
                                            [141.126, -140.618],
                                            [22.297, -160],
                                            [-7.41, -117.525],
                                            [-128.115, -71.621],
                                            [-127.399, 0],
                                            [-141.321, 102.861],
                                            [0, 194.556],
                                            [64.283, 87.874],
                                            [138.363, 82.457]
                                        ],
                                        o: [
                                            [-214.963, 0],
                                            [-141.795, 141.284],
                                            [-17.361, 124.581],
                                            [3.667, 58.158],
                                            [116.055, 64.879],
                                            [236.39, 0],
                                            [145.858, -106.163],
                                            [0, -112.43],
                                            [-95.835, -131.005],
                                            [-116.724, -69.561]
                                        ],
                                        v: [
                                            [506, 3.703],
                                            [219.249, 247.246],
                                            [9.703, 488],
                                            [92.333, 749.842],
                                            [72.115, 1023.621],
                                            [526, 936.297],
                                            [953.321, 953.139],
                                            [978.297, 592],
                                            [1063.717, 236.126],
                                            [768.887, 177.224]
                                        ]
                                    }
                                ],
                                e: [
                                    {
                                        i: [
                                            [281.812, 0],
                                            [0, 0],
                                            [0, -256],
                                            [0, -126.158],
                                            [0, 0],
                                            [-271.5, 0],
                                            [0, 0],
                                            [0, 148.875],
                                            [0, 156.126],
                                            [0, 0]
                                        ],
                                        o: [
                                            [-281.812, 0],
                                            [0, 0],
                                            [0, 256],
                                            [0, 126.158],
                                            [0, 0],
                                            [271.5, 0],
                                            [0, 0],
                                            [0, -148.875],
                                            [0, -156.126],
                                            [0, 0]
                                        ],
                                        v: [
                                            [501.812, 0.016],
                                            [-0.001, -0.004],
                                            [-0.297, 416],
                                            [0, 845.842],
                                            [0.115, 1079.621],
                                            [532.5, 1080.297],
                                            [1080.036, 1079.997],
                                            [1080.047, 652.875],
                                            [1079.967, 268.126],
                                            [1080.012, -0.026]
                                        ]
                                    }
                                ]
                            },
                            { t: 32 }
                        ]
                    },
                    o: { k: 100 },
                    x: { k: 0 },
                    nm: "Mask 1"
                }
            ],
            sw: 1080,
            sh: 1080,
            sc: "#ffffff",
            ip: 4,
            op: 33,
            st: 4,
            bm: 0,
            sr: 1
        },
        {
            ddd: 0,
            ind: 1,
            ty: 1,
            nm: "blob__white",
            ks: {
                o: { k: 100 },
                r: { k: 0 },
                p: { k: [540, 540, 0] },
                a: { k: [540, 540, 0] },
                s: {
                    k: [
                        {
                            i: { x: [0.222, 0.222, 0.667], y: [1, 1, 0.667] },
                            o: {
                                x: [0.167, 0.167, 0.167],
                                y: [0.167, 0.167, 0.167]
                            },
                            n: [
                                "0p222_1_0p167_0p167",
                                "0p222_1_0p167_0p167",
                                "0p667_0p667_0p167_0p167"
                            ],
                            t: 0,
                            s: [0, 0, 100],
                            e: [100, 100, 100]
                        },
                        { t: 11 }
                    ]
                }
            },
            hasMask: true,
            masksProperties: [
                {
                    cl: true,
                    inv: false,
                    mode: "a",
                    pt: {
                        k: [
                            {
                                i: { x: 0.833, y: 0.833 },
                                o: { x: 0.167, y: 0.167 },
                                n: "0p833_0p833_0p167_0p167",
                                t: 0,
                                s: [
                                    {
                                        i: [
                                            [26.858, -3.247],
                                            [25.249, -14.754],
                                            [-5.297, -33],
                                            [-16.249, -9.037],
                                            [-28.885, -3.379],
                                            [-21, -2.703],
                                            [-40.627, 14.108],
                                            [-1.297, 12],
                                            [7.283, 17.874],
                                            [17.465, 10.855]
                                        ],
                                        o: [
                                            [-19, 2.297],
                                            [-25.249, 14.754],
                                            [5.297, 33],
                                            [14.667, 8.157],
                                            [28.885, 3.379],
                                            [21, 2.703],
                                            [17.679, -6.139],
                                            [3.22, -29.802],
                                            [-8.734, -21.435],
                                            [-22.887, -14.224]
                                        ],
                                        v: [
                                            [476, 432.703],
                                            [431.249, 460.246],
                                            [379.703, 490],
                                            [426.333, 512.843],
                                            [462.115, 534.621],
                                            [501, 518.297],
                                            [551.321, 547.139],
                                            [565.297, 516],
                                            [575.717, 473.126],
                                            [521.887, 477.224]
                                        ]
                                    }
                                ],
                                e: [
                                    {
                                        i: [
                                            [145.748, 0],
                                            [141.126, -140.618],
                                            [22.297, -160],
                                            [-7.41, -117.525],
                                            [-128.115, -71.621],
                                            [-127.399, 0],
                                            [-141.321, 102.861],
                                            [0, 194.556],
                                            [64.283, 87.874],
                                            [138.363, 82.457]
                                        ],
                                        o: [
                                            [-214.963, 0],
                                            [-141.795, 141.284],
                                            [-17.361, 124.581],
                                            [3.667, 58.158],
                                            [116.055, 64.879],
                                            [236.39, 0],
                                            [145.858, -106.163],
                                            [0, -112.43],
                                            [-95.835, -131.005],
                                            [-116.724, -69.561]
                                        ],
                                        v: [
                                            [506, 3.703],
                                            [219.249, 247.246],
                                            [9.703, 488],
                                            [92.333, 749.842],
                                            [72.115, 1023.621],
                                            [526, 936.297],
                                            [953.321, 953.139],
                                            [978.297, 592],
                                            [1063.717, 236.126],
                                            [768.887, 177.224]
                                        ]
                                    }
                                ]
                            },
                            {
                                i: { x: 0.833, y: 0.833 },
                                o: { x: 0.167, y: 0.167 },
                                n: "0p833_0p833_0p167_0p167",
                                t: 17,
                                s: [
                                    {
                                        i: [
                                            [145.748, 0],
                                            [141.126, -140.618],
                                            [22.297, -160],
                                            [-7.41, -117.525],
                                            [-128.115, -71.621],
                                            [-127.399, 0],
                                            [-141.321, 102.861],
                                            [0, 194.556],
                                            [64.283, 87.874],
                                            [138.363, 82.457]
                                        ],
                                        o: [
                                            [-214.963, 0],
                                            [-141.795, 141.284],
                                            [-17.361, 124.581],
                                            [3.667, 58.158],
                                            [116.055, 64.879],
                                            [236.39, 0],
                                            [145.858, -106.163],
                                            [0, -112.43],
                                            [-95.835, -131.005],
                                            [-116.724, -69.561]
                                        ],
                                        v: [
                                            [506, 3.703],
                                            [219.249, 247.246],
                                            [9.703, 488],
                                            [92.333, 749.842],
                                            [72.115, 1023.621],
                                            [526, 936.297],
                                            [953.321, 953.139],
                                            [978.297, 592],
                                            [1063.717, 236.126],
                                            [768.887, 177.224]
                                        ]
                                    }
                                ],
                                e: [
                                    {
                                        i: [
                                            [281.812, 0],
                                            [0, 0],
                                            [0, -256],
                                            [0, -126.158],
                                            [0, 0],
                                            [-271.5, 0],
                                            [0, 0],
                                            [0, 148.875],
                                            [0, 156.126],
                                            [0, 0]
                                        ],
                                        o: [
                                            [-281.812, 0],
                                            [0, 0],
                                            [0, 256],
                                            [0, 126.158],
                                            [0, 0],
                                            [271.5, 0],
                                            [0, 0],
                                            [0, -148.875],
                                            [0, -156.126],
                                            [0, 0]
                                        ],
                                        v: [
                                            [501.812, 0.016],
                                            [-0.001, -0.004],
                                            [-0.297, 416],
                                            [0, 845.842],
                                            [0.115, 1079.621],
                                            [532.5, 1080.297],
                                            [1080.036, 1079.997],
                                            [1080.047, 652.875],
                                            [1079.967, 268.126],
                                            [1080.012, -0.026]
                                        ]
                                    }
                                ]
                            },
                            { t: 28 }
                        ]
                    },
                    o: { k: 100 },
                    x: { k: 0 },
                    nm: "Mask 1"
                }
            ],
            sw: 1080,
            sh: 1080,
            sc: "#ffffff",
            ip: 0,
            op: 33,
            st: 0,
            bm: 0,
            sr: 1
        }
    ],
    ip: 0,
    op: 33,
    fr: 60,
    w: 1080,
    h: 1080
};
var params = {
    container: animContainer,
    renderer: "svg",
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "none"
    }
};

// Load the bodyMovin animation
var anim = bodymovin.loadAnimation(params);

// Add class to the body to use some transition on the text in CSS
var body = document.getElementById("modal_box");
var close = document.getElementById("close");
body.classList.add("open");

anim.addEventListener("complete", function () {
    if (anim.playDirection == -1) {
        // The modal is closed,
        // so we restart the animation
        // instead of having an extra trigger
        // to open the modal again (just for demo purpose)

        // anim.setDirection(1);
        // anim.play();
        // body.classList.remove("completed");
    } else {
        // The modal is open, which triggers the content transitions
        body.classList.add("open");
        body.classList.add("completed");
    }
});

// When clicking the cross,
// the animation reverses to close the modal
close.addEventListener("click", function () {
    anim.setDirection(-1);
    anim.play();
    
    setTimeout(function(){
      body.classList.remove("open");
    }, 300);
});

  });
});


