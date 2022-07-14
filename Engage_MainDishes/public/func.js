$(document).ready(function () {

    $('.main .arrow-right').click(function () {
        $('.d1').hide(500);
        $('.d2').hide(800);
        $('.d3').hide(1000);

        $('.d4').show(600);
        $('.d5').show(900);
        $('.d6').show(1100);
    });

    $('.main .arrow-left').click(function () {
        $('.d4').hide(500);
        $('.d5').hide(800);
        $('.d6').hide(1000);

        $('.d1').show(600);
        $('.d2').show(900);
        $('.d3').show(1100);
    });


    $(document).on('click', '.Donation_list .donate', function () {

        $('.dnt_form1_holder').show(1000);
    });
    $(document).on('click', '.dnt_form1_holder > div .exit', function () {

        $('.dnt_form1_holder').fadeOut(1000);
    });
    $(document).on('click', '.why_donate .exit', function () {

        $('.why_donate').fadeOut(1000);
        $('.box_open').fadeOut(1000);
    });

    $(document).on('click', '.click-box', function () {
       
        $(".box_open").css({ "display":"flex", "animation-name": "box_open" });
        $(".box_open .f-box").fadeIn(1000);
        $(".box_open .f-box").fadeOut(300);
        setTimeout(function () {
            $(".why_donate").slideDown(1000);
        },1100);
        // $(".box_open .s-box").slideDown(2000);
        // $(".box_open .s-box").slideUp(2500);

    });






    // const myTimeout = setTimeout(myGreeting, 5000);

    // function myGreeting() {
    //     document.getElementsByClassName("box_open")[0].innerHTML = "Happy Birthday!";
    // }







});