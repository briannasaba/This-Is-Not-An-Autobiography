$(document).ready(function(){


$(window).scroll(function(){
    var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
    var div_top = $('#month').offset().top;
        if (window_top > div_top) {
            $('palettes').addClass('stick');
        } else {
            $('palettes').removeClass('stick');
        }
});

$("menu a").click(function(evn){
    evn.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash);
});

/**
 * This part handles the highlighting functionality.
 * We use the scroll functionality again, some array creation and
 * manipulation, class adding and class removing, and conditional testing
 */
var aChildren = $("col li").children(); // find the a children of the list items
var aArray = []; // create the empty aArray
for (var i=0; i < aChildren.length; i++) {
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    aArray.push(ahref);
} // this for loop fills the aArray with attribute href values

$(window).scroll(function(){
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();

    for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i];
        var divPos = $(theID).offset().top; // get the offset of the div from the top of page
        var divHeight = $(theID).height(); // get the height of the div in question
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
            $("a[href='" + theID + "']").addClass("menu-active");
        } else {
            $("a[href='" + theID + "']").removeClass("menu-active");
        }
    }

    if(windowPos + windowHeight == docHeight) {
        if (!$("menu li:last-child a").hasClass("menu-active")) {
            var colActiveCurrent = $(".menu-active").attr("href");
            $("a[href='" + navActiveCurrent + "']").removeClass("menu-active");
            $("menu li:last-child a").addClass("menu-active");
        }
    }
});
});
