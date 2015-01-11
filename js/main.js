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

    function searchHex(hex) {
        var regexp = /[0-9a-f]{6}/;
        return hex.match(regexp);

    }

    var inputHex = $('#hexIn'),
        outputRGB = $('#rgbOut'),
        hex = '',
        rgb = '';


    $("button").on({
        click: function() {
            hex = inputHex.val().slice(0,6);
            if(searchHex(hex)) {
                rgb = 'rgb('+hexToR(hex)+','+hexToG(hex)+','+hexToB(hex)+')';
                $(outputRGB).val(rgb);
                $("body").css("background-color", '#' + hex);
                } else {
                alert('ERROR!');
            }
        }
    });
});