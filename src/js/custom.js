var i = 1;
var rotate = 0;
var currPos = 2;
var newRotate = 0;
var rotationX = 0;
var rotationDifference = 0;
var totalRotation = 0;

function rotateCube(num, nav, rotate) {
    nav = nav || false;
    rotate = rotate || 0;
    i = num;
    var panel = $('.detail');
    var cube = $('#details');
    var navItem = $('.navItems li');
    var activeDetail = $('.detail[data-index=' + num + ']');
    var activeNav = $('.navItems li[data-index=' + num + ']');

    panel.addClass('shadow');
    rotationX = rotationX + rotate;
    navItem.removeClass('active');
    panel.removeClass('active');

    if(nav) {
        num = num;
        cube.attr('data-index', num);
        newRotate = rotationX -(rotationX);
        rotationX = newRotate;
    } else {
        rotationDifference = 360 - (360 - rotationX);
        if(rotate == 90) {
            newRotate = rotationDifference;
        }
        if(rotate == -90) {
            newRotate = 360 - (360 - rotationX);
        }
    }
    cube.attr('data-index', num);
    activeNav.addClass('active');
    activeDetail.addClass('active');
    cube.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
      panel.removeClass('shadow');
    });
}

$(document).ready(function(){
    $('.detail').attr('data-index', function (index) {
        $(this).prepend( "<div class='up'></div><div class='down'></div>" );
        return index + 1;
    });
    $('.portfolio li').attr('data-index', function (index) {
        return index + 1;
    });
    $('.case-studies li').attr('data-index', function (index) {
        return index + 1;
    });
    $('.up').click(function() {
        $('#details').addClass('rotateDown').removeClass('rotateUp');
      if( 1 > i - 1) { i = 4; } else { --i; }
      rotateCube(i, false, -90);
    });
    $('.down').click(function() {
        $('#details').addClass('rotateUp').removeClass('rotateDown');
        if (i > 3 ) { i = 1; } else { i++; }
        rotateCube(i, false, 90);
    });
    $('.exit-case-studies, .header').click(function(){
        $('body').attr('id', '');
        $('.detail').each(function(){
            $(this).prepend( "<div class='up'></div><div class='down'></div>" )
        });
    });
    $('.menu').click(function(){
        $('.nav').toggleClass('active');
    });
    $('.detail[data-index=4] li').hover(function(){
        $(this).toggleClass('active');
    });
    $('.view-case-studies').click(function(){
        $('body').attr('id', 'case-studies');
        $('.detail .up, .detail .down').remove();
        i = 1;
        rotateCube(i, true, rotate);
    });
});