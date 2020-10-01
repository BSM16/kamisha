jQuery(document).ready(function (_0x83517) {
    _0x83517('.dropdown-menu.dua').click(function (_0x12fa4e) {
        _0x12fa4e.stopPropagation();
    }), _0x83517('.theme-switch').click(function () {
        _0x83517('.theme-switch').toggleClass('active'), _0x83517('body').toggleClass('dark-mode');
        if (_0x83517(this).attr('class') == 'theme-switch active') {
            var _0x439351 = 'on';
            localStorage.setItem('darkMode', _0x439351);
        } else {
            var _0x439351 = 'off';
            localStorage.setItem('darkMode', _0x439351);
        };
    });
    var _0x5864e8 = localStorage.getItem('darkMode');
    _0x5864e8 == 'on' && (_0x83517('.theme-switch').addClass('active'), _0x83517('body').addClass('dark-mode'));;
    location.hash != null && location.hash != '' && _0x83517(location.hash + '.collapse').collapse('show');
    if (window.location.hash) {
        var _0x97b1da = window.location.hash;
        _0x83517('html, body').animate({
            'scrollTop': _0x83517(_0x97b1da).offset().top
        }, 500);
    };
    var _0x44e3cb = _0x83517('.to-top');
    _0x83517(window).on('scroll', function () {
        _0x83517(this).scrollTop() > 500 ? _0x44e3cb.fadeIn() : _0x44e3cb.fadeOut();
    });
