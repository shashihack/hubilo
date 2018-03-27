/****  Variables Initiation  ****/
var doc = document;
var docEl = document.documentElement;
var $body = $('body');
var $sidebar = $('.sidebar');
var $sidebarFooter = $('.sidebar .sidebar-footer');
var $mainContent = $('.main-content');
var $pageContent = $('.page-content');
var $topbar = $('.topbar');
var $logopanel = $('.logopanel');
var $sidebarWidth = $(".sidebar").width();
var content = document.querySelector('.page-content');
//var is_RTL = false;
var $loader = $('#preloader');
var docHeight = $(document).height();
var windowHeight = $(window).height();
var topbarWidth = $('.topbar').width();
var headerLeftWidth = $('.header-left').width();
var headerRightWidth = $('.header-right').width();
var start = delta = end = 0;
$(window).load(function() {
    "use strict";
    setTimeout(function() {
        $('.loader-overlay').addClass('loaded');
        $('body > section').animate({
            opacity: 1,
        }, 400);
    }, 500);
});


/* ==========================================================*/
/* APPLICATION SCRIPTS                                       */
/* ========================================================= */

/* Create Sidebar on Top */
function createSidebarTop() {
    $('#switch-sidebar-top').prop('checked', true);
    removeSidebarHover();
    $('body').removeClass('sidebar-collapsed');
    $.removeCookie('sidebar-collapsed');
    $('body').removeClass('sidebar-top').addClass('sidebar-top');
    $('.main-content').css('margin-left', '').css('margin-right', '');
    $('.topbar').css('left', '').css('right', '');
    if ($('body').hasClass('fixed-sidebar') && !$('body').hasClass('fixed-topbar')) {
        $('body').removeClass('fixed-topbar').addClass('fixed-topbar');
        $.removeCookie('fluid-topbar');
        $.removeCookie('fluid-topbar'), {
            path: '/'
        };
        $('#switch-topbar').prop('checked', true);
    }
    $('.sidebar').height('');
    $('#switch-sidebar-hover').prop('checked', false);
    $.cookie('sidebar-top', 1);
    $.cookie('sidebar-top', 1, {
        path: '/'
    });
    $.removeCookie('sidebar-hover');
    $.removeCookie('sidebar-hover', {
        path: '/'
    });
}

/* Remove Sidebar on Top */
function removeSidebarTop() {
    $('#switch-sidebar-top').prop('checked', false);
    $('body').removeClass('sidebar-top');
    $('#switch-sidebar-top').prop('checked', false);
    $.removeCookie('sidebar-top');
    $.removeCookie('sidebar-top', {
        path: '/'
    });
}

/* Toggle Sidebar on Top */
function toggleSidebarTop() {
    if ($('body').hasClass('sidebar-top')) removeSidebarTop();
    else createSidebarTop();
}

/* Create Sidebar only visible on Hover */
function createSidebarHover() {
    $('body').addClass('sidebar-hover');
    $('body').removeClass('fixed-sidebar').addClass('fixed-sidebar');
    $('.main-content').css('margin-left', '').css('margin-right', '');
    $('.topbar').css('left', '').css('right', '');
    $('body').removeClass('sidebar-top');
    removeSubmenuHover();
    removeBoxedLayout();
    removeCollapsedSidebar();
    sidebarHover();
    $('#switch-sidebar-hover').prop('checked', true);
    $('#switch-sidebar').prop('checked', true);
    $('#switch-sidebar-top').prop('checked', false);
    $('#switch-boxed').prop('checked', false);
    $.removeCookie('fluid-topbar');
    $.removeCookie('sidebar-top');
    $.removeCookie('fluid-topbar', {
        path: '/'
    });
    $.removeCookie('sidebar-top', {
        path: '/'
    });
    $.cookie('sidebar-hover', 1);
    $.cookie('sidebar-hover', 1, {
        path: '/'
    });
}

/* Remove Sidebar on Hover */
function removeSidebarHover() {
    $('#switch-sidebar-hover').prop('checked', false);
    $('body').removeClass('sidebar-hover');
    if (!$('body').hasClass('boxed')) $('.sidebar, .sidebar-footer').attr('style', '');
    $('.logopanel2').remove();
    $.removeCookie('sidebar-hover');
    $.removeCookie('sidebar-hover', {
        path: '/'
    });
}

/* Toggle Sidebar on Top */
function toggleSidebarHover() {
    if ($('body').hasClass('sidebar-hover')) removeSidebarHover();
    else createSidebarHover();
}

/* Create Sidebar Submenu visible on Hover */
function createSubmenuHover() {
    removeSidebarHover();
    removeSidebarTop();
    $('#switch-submenu-hover').prop('checked', true);
    $('body').addClass('submenu-hover');
    $('.nav-sidebar .children').css('display', '');
    $.cookie('submenu-hover', 1);
    $.cookie('submenu-hover', 1, {
        path: '/'
    });
    $('#switch-sidebar').prop('checked', false);
}

/* Remove Submenu on Hover */
function removeSubmenuHover() {
    $('#switch-submenu-hover').prop('checked', false);
    $('body').removeClass('submenu-hover');
    $('.nav-sidebar .nav-parent.active .children').css('display', 'block');
    $.removeCookie('submenu-hover');
    $.removeCookie('submenu-hover', {
        path: '/'
    });
}

/* Toggle Submenu on Hover */
function toggleSubmenuHover() {
    if ($('body').hasClass('submenu-hover')) removeSubmenuHover();
    else createSubmenuHover();
}

/* Create Topbar Fixed */
function handleTopbarFixed() {
    $('#switch-topbar').prop('checked', true);
    $('body').removeClass('fixed-topbar').addClass('fixed-topbar');
    $.removeCookie('fluid-topbar');
    $.removeCookie('fluid-topbar', {
        path: '/'
    });
}

/* Create Topbar Fluid / Remove Topbar Fixed */
function handleTopbarFluid() {
    $('#switch-topbar').prop('checked', false);
    $('body').removeClass('fixed-topbar');
    if ($('body').hasClass('sidebar-top') && $('body').hasClass('fixed-sidebar')) {
        $('body').removeClass('fixed-sidebar');
        $('#switch-sidebar').prop('checked', false);
    }
    $.cookie('fluid-topbar', 1);
    $.cookie('fluid-topbar', 1, {
        path: '/'
    });
}

/* Toggle Topbar Fixed / Fluid */
function toggleTopbar() {
    if ($('body').hasClass('fixed-topbar')) handleTopbarFluid();
    else handleTopbarFixed();
}


/* Create Boxed Layout */
function createBoxedLayout() {
    removeSidebarHover();
    $('body').addClass('boxed');
    $('#switch-boxed').prop('checked', true);
    $.cookie('boxed-layout', 1);
    $.cookie('boxed-layout', 1, {
        path: '/'
    });
}

/* Remove boxed layout */
function removeBoxedLayout() {
    if ($('body').hasClass('boxed')) {
        $('body').removeClass('boxed');
        $logopanel.css('left', '').css('right', '');
        $topbar.css('width', '');
        $sidebar.css('margin-left', '').css('margin-right', '');
        $sidebarFooter.css('left', '').css('right', '');
        $.removeCookie('boxed-layout');
        $.removeCookie('boxed-layout', {
            path: '/'
        });
        $('#switch-boxed').prop('checked', false);
        $.backstretch("destroy");
    }
}

function toggleboxedLayout() {
        if ($('body').hasClass('boxed')) removeBoxedLayout();
        else createBoxedLayout();
    }
    /* Toggle Sidebar Collapsed */
function collapsedSidebar() {
    if ($body.css('position') != 'relative') {
        if (!$body.hasClass('sidebar-collapsed')) createCollapsedSidebar();
        else removeCollapsedSidebar();
    } else {
        if ($body.hasClass('sidebar-show')) $body.removeClass('sidebar-show');
        else $body.addClass('sidebar-show');
    }
}

function createCollapsedSidebar() {
    $body.addClass('sidebar-collapsed');
    $('.sidebar').css('width', '').resizable().resizable('destroy');
    $('.sidebar').css('margin-top', '1.5%');
    $('.nav-sidebar ul').attr('style', '');
    $(this).addClass('menu-collapsed');
    $('#switch-sidebar').prop('checked');
}

function removeCollapsedSidebar() {
    $body.removeClass('sidebar-collapsed');
    $('.sidebar').css('margin-top', '');
    if (!$body.hasClass('submenu-hover')) $('.nav-sidebar li.active ul').css({
        display: 'block'
    });
    $(this).removeClass('menu-collapsed');
    if ($body.hasClass('sidebar-light') && !$body.hasClass('sidebar-fixed')) {
        $('.sidebar').height('');
    }
}
$('[data-toggle]').on('click', function(event) {
    event.preventDefault();
    var toggleLayout = $(this).data('toggle');
    if (toggleLayout == 'submenu') toggleSubmenuHover();
    if (toggleLayout == 'sidebar-collapsed') collapsedSidebar();
    if (toggleLayout == 'sidebar-top') toggleSidebarTop();
    if (toggleLayout == 'sidebar-hover') toggleSidebarHover();
    if (toggleLayout == 'boxed') toggleboxedLayout();
    if (toggleLayout == 'topbar') toggleTopbar();
});

/* Reset to Default Style, remove all cookie and custom layouts */
function resetStyle() {
    $('#reset-style').on('click', function(event) {
        event.preventDefault();
        removeBoxedLayout();
        removeSidebarTop();
        removeSidebarHover();
        removeSubmenuHover();
        removeCollapsedSidebar();
        $.removeCookie('rtl');
        $.removeCookie('main-color');
        $.removeCookie('main-name');
        $.removeCookie('theme');
        $.removeCookie('bg-name');
        $.removeCookie('bg-color');
        $.removeCookie('submenu-hover');
        $.removeCookie('sidebar-collapsed');
        $.removeCookie('app-language');
        $.removeCookie('app-language', { path: '/'});
        $.removeCookie('rtl', {
            path: '/'
        });
        $.removeCookie('main-color', {
            path: '/'
        });
        $.removeCookie('main-name', {
            path: '/'
        });
        $.removeCookie('theme', {
            path: '/'
        });
        $.removeCookie('bg-name', {
            path: '/'
        });
        $.removeCookie('bg-color', {
            path: '/'
        });
        $.removeCookie('submenu-hover', {
            path: '/'
        });
        $.removeCookie('sidebar-collapsed', {
            path: '/'
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)theme-\S+/g) || []).join(' ');
        });
        $('body').addClass('theme-sdtl').addClass('color-default');
        $('.builder .theme-color').removeClass('active');
        $('.theme-color').each(function() {
            if ($(this).data('color') == '#0bf') $(this).addClass('active');
        });
        $('.builder .theme').removeClass('active');
        $('.builder .theme-default').addClass('active');
        $('.builder .sp-replacer').removeClass('active');
    });
}


/******************** END LAYOUT API  ************************/
/* ========================================================= */
/****  Full Screen Toggle  ****/
function toggleFullScreen() {
    if (!doc.fullscreenElement && !doc.msFullscreenElement && !doc.webkitIsFullScreen && !doc.mozFullScreenElement) {
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullScreen) {
            docEl.webkitRequestFullscreen();
        } else if (docEl.webkitRequestFullScreen) {
            docEl.webkitRequestFullScreen();
        } else if (docEl.msRequestFullscreen) {
            docEl.msRequestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
            docEl.mozRequestFullScreen();
        }
    } else {
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen();
        } else if (doc.webkitCancelFullScreen) {
            doc.webkitCancelFullScreen();
        } else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
    }
}
$('.toggle_fullscreen').click(function() {
    toggleFullScreen();
});

/* Simulate Ajax call on Panel with reload effect */
function blockUI(item) {
    $(item).block({
        message: '<svg class="circular"><circle class="path" cx="40" cy="40" r="10" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>',
        css: {
            border: 'none',
            width: '14px',
            backgroundColor: 'none'
        },
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.6,
            cursor: 'wait'
        }
    });
}

function unblockUI(item) {
    $(item).unblock();
}

/**** PANEL ACTIONS ****/
function handlePanelAction() {
    /* Create Portlets Controls automatically: reload, fullscreen, toggle, remove, popout */
    function handlePanelControls() {
        $('.panel-controls').each(function() {
            var controls_html = '<div class="control-btn">' + '<a href="#" class="panel-reload hidden"><i class="icon-reload"></i></a>' + '<a class="hidden" id="dropdownMenu1" data-toggle="dropdown">' + '<i class="icon-settings"></i>' + '</a>' + '<ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">' + '<li><a href="#">Action</a>' + '</li>' + '<li><a href="#">Another action</a>' + '</li>' + '<li><a href="#">Something else here</a>' + '</li>' + '</ul>' + '<a href="#" class="panel-popout hidden tt" title="Pop Out/In"><i class="icons-office-58"></i></a>' + '<a href="#" class="panel-maximize hidden"><i class="icon-size-fullscreen"></i></a>' + '<a href="#" class="panel-toggle"><i class="fa fa-angle-down"></i></a>' + '<a href="#" class="panel-close"><i class="icon-trash"></i></a>' + '</div>';
            $(this).append(controls_html);
        });
    }
    handlePanelControls();
    // Remove Panel 
    $(".panel-header .panel-close").on("click", function(event) {
        event.preventDefault();
        $item = $(this).parents(".panel:first");
        bootbox.confirm("Are you sure to remove this panel?", function(result) {
            if (result === true) {
                $item.addClass("animated bounceOutRight");
                window.setTimeout(function() {
                    $item.remove();
                }, 300);
            }
        });
    });
    // Toggle Panel Content
    $(document).on("click", ".panel-header .panel-toggle", function(event) {
        event.preventDefault();
        $(this).toggleClass("closed").parents(".panel:first").find(".panel-content").slideToggle();
    });
    // Popout / Popin Panel
    $(document).on("click", ".panel-header .panel-popout", function(event) {
        event.preventDefault();
        var panel = $(this).parents(".panel:first");
        if (panel.hasClass("modal-panel")) {
            $("i", this).removeClass("icons-office-55").addClass("icons-office-58");
            panel.removeAttr("style").removeClass("modal-panel");
            panel.find(".panel-maximize,.panel-toggle").removeClass("nevershow");
            panel.draggable("destroy").resizable("destroy");
        } else {
            panel.removeClass("maximized");
            panel.find(".panel-maximize,.panel-toggle").addClass("nevershow");
            $("i", this).removeClass("icons-office-58").addClass("icons-office-55");
            var w = panel.width();
            var h = panel.height();
            panel.addClass("modal-panel").removeAttr("style").width(w).height(h);
            $(panel).draggable({
                handle: ".panel-header",
                containment: ".page-content"
            }).css({
                "left": panel.position().left - 10,
                "top": panel.position().top + 2
            }).resizable({
                minHeight: 150,
                minWidth: 200
            });
        }
        window.setTimeout(function() {
            $("body").trigger("resize");
        }, 300);
    });
    // Reload Panel Content
    $(document).on("click", '.panel-header .panel-reload', function(event) {
        event.preventDefault();
        var el = $(this).parents(".panel:first");
        blockUI(el);
        window.setTimeout(function() {
            unblockUI(el);
        }, 1800);
    });
    // Maximize Panel Dimension 
    $(document).on("click", ".panel-header .panel-maximize", function(event) {
        event.preventDefault();
        var panel = $(this).parents(".panel:first");
        $body.toggleClass("maximized-panel");
        panel.removeAttr("style").toggleClass("maximized");
        maximizePanel();
        if (panel.hasClass("maximized")) {
            panel.parents(".portlets:first").sortable("destroy");
            $(window).trigger('resize');
        }
        else {
            $(window).trigger('resize');
            sortablePortlets();
        }
        $("i", this).toggleClass("icon-size-fullscreen").toggleClass("icon-size-actual");
        panel.find(".panel-toggle").toggleClass("nevershow");
        $("body").trigger("resize");
        return false;
    });
}

function maximizePanel(){
    if($('.maximized').length){
        var panel = $('.maximized');
        var windowHeight = $(window).height() - 2;
        panelHeight = panel.find('.panel-header').height() + panel.find('.panel-content').height() + 100;
        if(panel.hasClass('maximized')){
            if(windowHeight > panelHeight) panel.parent().height(windowHeight);
            else{
                if($('.main-content').height() > panelHeight) {
                    panel.parent().height($('.main-content').height()); 
                }
                else{
                    panel.parent().height(panelHeight); 
                }
            } 
        }
        else {
            panel.parent().height('');
        }
    }
}


/* ==========================================================*/
/* BEGIN SIDEBAR                                             */

/**** Handle Sidebar Widgets ****/

// Add class everytime a mouse pointer hover over it
var hoverTimeout;
$('.nav-sidebar > li').hover(function() {
    clearTimeout(hoverTimeout);
    $(this).siblings().removeClass('nav-hover');
    $(this).addClass('nav-hover');
}, function() {
    var $self = $(this);
    hoverTimeout = setTimeout(function() {
        $self.removeClass('nav-hover');
    }, 200);
});
$('.nav-sidebar > li .children').hover(function() {
    clearTimeout(hoverTimeout);
    $(this).closest('.nav-parent').siblings().removeClass('nav-hover');
    $(this).closest('.nav-parent').addClass('nav-hover');
}, function() {
    var $self = $(this);
    hoverTimeout = setTimeout(function() {
        $(this).closest('.nav-parent').removeClass('nav-hover');
    }, 200);
});
/* END SIDEBAR                                               */
/* ========================================================= */

// Check if sidebar is collapsed
if ($('body').hasClass('sidebar-collapsed')) $('.nav-sidebar .children').css({
    display: ''
});
// Handles form inside of dropdown 
$('.dropdown-menu').find('form').click(function(e) {
    e.stopPropagation();
});
/***** Scroll to top button *****/
function scrollTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
}

function sidebarBehaviour() {
    windowWidth = $(window).width();
    windowHeight = $(window).height() - $('.topbar').height();
    sidebarMenuHeight = $('.nav-sidebar').height();
    if (windowWidth < 1024) {
        $('body').removeClass('sidebar-collapsed');
    }
    if ($('body').hasClass('sidebar-collapsed') && sidebarMenuHeight > windowHeight) {
        $('body').removeClass('fixed-sidebar');
    }
}

/* Function for datables filter in head */
function stopPropagation(evt) {
    if (evt.stopPropagation !== undefined) {
        evt.stopPropagation();
    } else {
        evt.cancelBubble = true;
    }
}

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    var edge = ua.indexOf('Edge/');
    if (msie > 0 || trident > 0 || edge > 0) {
        $('html').addClass('ie-browser');   
    }
}

/****  Initiation of Main Functions  ****/
$(document).ready(function() {
    handlePanelAction();
    scrollTop();
    sidebarBehaviour();
    detectIE();

    if ($('body').hasClass('sidebar-hover')) sidebarHover();
});

/****  Resize Event Functions  ****/

$(window).resize(function() {
    setTimeout(function() {
        if (!$('body').hasClass('fixed-sidebar') && !$('body').hasClass('builder-admin')) sidebarBehaviour();
        maximizePanel();
    }, 100);
});
