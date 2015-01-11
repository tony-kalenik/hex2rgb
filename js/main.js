$(function () {

// базовые функции для работы с HEX
    function hexToR(h) {
        return parseInt((cutHex(h)).substring(0, 2), 16)
    }

    function hexToG(h) {
        return parseInt((cutHex(h)).substring(2, 4), 16)
    }

    function hexToB(h) {
        return parseInt((cutHex(h)).substring(4, 6), 16)
    }

    function cutHex(h) {
        return (h.charAt(0) == "#") ? h.substring(1, 7) : h
    }

    var inputHex = $('#hexIn'),
        outputRGB = $('#rgbOut'),
        hex = '',
        rgb = '';


    $("button").on({
        click: function() {
            hex = inputHex.val();
            rgb = 'rgb('+hexToR(hex)+','+hexToG(hex)+','+hexToB(hex)+')';
            $(outputRGB).val(rgb);
            $("body").css("background-color", '#' + hex);
        }
    });
});