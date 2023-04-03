function mixColors() {
    // Get the values of the two color inputs
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;

    // Convert the values to RGB
    var rgb1 = hexToRgb(color1);
    var rgb2 = hexToRgb(color2);

    // Mix the colors
    var mixed = {
        r: Math.floor((rgb1.r + rgb2.r) / 2),
        g: Math.floor((rgb1.g + rgb2.g) / 2),
        b: Math.floor((rgb1.b + rgb2.b) / 2)
    };

    // Convert the mixed color back to hex
    var mixedHex = rgbToHex(mixed.r, mixed.g, mixed.b);

    // Set the value of the result input
    document.getElementById("result").value = mixedHex;
}

function hexToRgb(hex) {
    var r = parseInt(hex.substring(1, 3), 16);
    var g = parseInt(hex.substring(3, 5), 16);
    var b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    var hexR = r.toString(16).padStart(2, "0");
    var hexG = g.toString(16).padStart(2, "0");
    var hexB = b.toString(16).padStart(2, "0");
    return "#" + hexR + hexG + hexB;
}