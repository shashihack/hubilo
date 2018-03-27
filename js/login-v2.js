function copyrightPos(){
    var windowHeight = $(window).height();
    if(windowHeight < 700) {
        $('.account-copyright').css('position', 'relative').css('margin-top', 40);
    }
    else {
        $('.account-copyright').css('position', '').css('margin-top', '');
    }
}

$(window).resize(function() {
    copyrightPos();
});

$(function() {

    copyrightPos();
    if($('body').data('page') == 'login'){

        /* Show / Hide Password Recover Form */
        $('#password').on('click', function(e) {
            e.preventDefault();
            $('.form-signin').slideUp(300, function() {
                $('.form-password').slideDown(300);
            });
        });
        $('#login').on('click', function(e) {
            e.preventDefault();
            $('.form-password').slideUp(300, function() {
                $('.form-signin').slideDown(300);
            });
        });
        /*$('#submit-form, #submit-password').click(function(e) {
            e.preventDefault();
            var l = Ladda.create(this);
            l.start();
            setTimeout(function() {
                window.location.href = "login.php";
            }, 2000);
        });*/


        /***** DEMO CONTENT, CAN BE REMOVED ******/
        $("#account-builder").on('mouseenter', function() {
            TweenMax.to($(this), 0.35, {
                css: {
                    height: 130,
                    width: 500,
                    left: '37%',
                    'border-bottom-left-radius': 0,
                    'border-top-right-radius': 0,
                    '-moz-border-bottom-left-radius': 0,
                    '-moz-border-top-right-radius': 0,
                    '-webkit-border-bottom-left-radius': 0,
                    '-webkit-border-top-right-radius': 0
                },
                ease: Circ.easeInOut
            });
        });
        $("#account-builder").on('mouseleave', function() {
            TweenMax.to($(this), 0.35, {
                css: {
                    height: 44,
                    width: 250,
                    left: '44%',
                    'border-bottom-left-radius': 20,
                    'border-top-right-radius': 20
                },
                ease: Circ.easeInOut
            });
        });
        /* Hide / Show Social Connect */
        $('#social-cb').change(function() {
            if ($(this).is(":checked")) {
                $('.social-btn').slideDown(function() {
                    $('body').removeClass('no-social');
                });
            }
            else {
                $('.social-btn').slideUp(function() {
                    $('body').addClass('no-social');
                });
            }
        });
        /* Hide / Show Background Image */
        $('#image-cb').change(function() {
            if ($(this).is(":checked")) {
                $.backstretch(["images/background/login.png"], {
                    fade: 600,
                    duration: 4000
                });
                $('#slide-cb').attr('checked', false);
            }
            else $.backstretch("destroy");
        });
        /* Add / Remove Slide Image */
        $('#slide-cb').change(function() {
            if ($(this).is(":checked")) {
                $.backstretch(["../assets/global/images/gallery/login4.jpg", "../assets/global/images/gallery/login3.jpg", "../assets/global/images/gallery/login2.jpg", "images/background/login.png"], {
                    fade: 600,
                    duration: 4000
                });
                $('#image-cb').attr('checked', false);
            }
            else {
                $.backstretch("destroy");
            }
        });
        /* Hide / Show User Image */
        $('#user-cb').change(function() {
            if ($(this).is(":checked")) {
                TweenMax.to($('.user-img'), 0.3, {
                    opacity: 0,
                    ease: Circ.easeInOut
                });
            }
            else {
                TweenMax.to($('.user-img'), 0.3, {
                    opacity: 1,
                    ease: Circ.easeInOut
                });
            }
        });

    }
    if($('body').data('page')== 'signup'){

        var form = $(".form-signup");
        
        $("#account-builder").on('mouseenter', function() {
            TweenMax.to($(this), 0.35, {
                css: {
                    height: 130,
                    width: 500,
                    left: '37%',
                    'border-bottom-left-radius': 0,
                    'border-top-right-radius': 0,
                    '-moz-border-bottom-left-radius': 0,
                    '-moz-border-top-right-radius': 0,
                    '-webkit-border-bottom-left-radius': 0,
                    '-webkit-border-top-right-radius': 0
                },
                ease: Circ.easeInOut
            });
        });
        $("#account-builder").on('mouseleave', function() {
            TweenMax.to($(this), 0.35, {
                css: {
                    height: 44,
                    width: 250,
                    left: '44%',
                    'border-bottom-left-radius': 20,
                    'border-top-right-radius': 20
                },
                ease: Circ.easeInOut
            });
        });
        /* Hide / Show Social Connect */
        $('#social-cb').change(function() {
            if ($(this).is(":checked")) {
                $('.social-btn').slideDown(function() {
                    $('body').removeClass('no-social');
                });
            }
            else {
                $('.social-btn').slideUp(function() {
                    $('body').addClass('no-social');
                });
            }
        });
        /* Hide / Show Background Image */
        $('#image-cb').change(function() {
            if ($(this).is(":checked")) {
                $.backstretch(["images/background/login.png"], {
                    fade: 600,
                    duration: 4000
                });
                $('#slide-cb').attr('checked', false);
            }
            else $.backstretch("destroy");
        });
        /* Add / Remove Slide Image */
        $('#slide-cb').change(function() {
            if ($(this).is(":checked")) {
                $.backstretch(["../assets/global/images/gallery/login4.jpg", "../assets/global/images/gallery/login3.jpg", "../assets/global/images/gallery/login2.jpg", "images/background/login.png"], {
                    fade: 600,
                    duration: 4000
                });
                $('#image-cb').attr('checked', false);
            }
            else {
                $.backstretch("destroy");
            }
        });
        /* Hide / Show User Image */
        $('#user-cb').change(function() {
            if ($(this).is(":checked")) {
                TweenMax.to($('.user-img'), 0.3, {
                    opacity: 0,
                    ease: Circ.easeInOut
                });
            }
            else {
                TweenMax.to($('.user-img'), 0.3, {
                    opacity: 1,
                    ease: Circ.easeInOut
                });
            }
        });
        $('#submit-form').click(function(e) {
            form.validate({
                rules: {
                    firstname:
                    {
                        required: true,
                        minlength: 2
                    },
                    gender:{
                        required:true
                    },
                    lastname:
                    {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 6,
                        maxlength: 16
                    },
                    dob: {
                        required: true,
                        minlength: 2
                    },
                    designation: {
                        required: true,
                        minlength: 2
                    },
                    password2: {
                        required: true,
                        equalTo: '#password'
                    },
                    terms: {
                        required: true
                    }
                },
                messages: {
                    firstname: {
                        required: 'Enter your first name please',
                        minlength: 'Enter at least 2 characters or more please'
                    },
                    lastname: {
                        required: 'Enter your last name please',
                        minlength: 'Enter at least 2 characters or more please'
                    },
                    email: {
                        required: 'Enter email address please',
                        email: 'Enter a valid email address'
                    },
                    password: {
                        required: 'Write your password please',
                        minlength: 'Minimum 6 characters',
                        maxlength: 'Maximum 16 characters'
                    },
                    gender: {
                        required: 'Select Gender please'
                    },
                    password2: {
                        required: 'Write your password please',
                        equalTo: 'Password doesn\'t match'
                    },
                    dob: {
                        required: 'Enter your Date of Birth please',
                        minlength: 'Minimum 2 characters'
                    },
                    designation: {
                        required: 'Enter your Designation please',
                        minlength: 'Minimum 2 characters'
                    },
                    terms:{
                        required: 'You must agree with terms'
                    }
                },
                errorPlacement: function(error, element) {
                    if (element.is(":radio") || element.is(":checkbox")) {
                        element.closest('.option-group').after(error);
                    }
                    else {
                        error.insertAfter(element);
                    }
                }
            });
            /*e.preventDefault();
            if (form.valid()) {
                $(this).addClass('ladda-button');
                var l = Ladda.create(this);
                l.start();
                setTimeout(function() {
                    window.location.href = "login.php";
                }, 2000);
            }*/
        });

    }
    
});
