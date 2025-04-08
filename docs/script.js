function convertRGBToPercent() {
    var text = document.getElementById("inputRGB").value;
    var colors = text.split('\n');
    var result = "";

    if (!text.length)
        return;

    for (c of colors) {
        if (!c.trim().length)
            continue;
        var temp = c.replaceAll(',', ' ').split(' ');

        for (t of temp)
            if (t.trim().length)
                result += (parseFloat(t.trim()) / 255.0).toFixed(4) + ",";

        result = result.substring(0, result.length - 1);
        result += '\n';
    }

    document.getElementById("outputRGB").value = result;
}

function resetTextAreas() {
    document.getElementById("inputRGB").value = "";
    document.getElementById("outputRGB").value = "";
}
