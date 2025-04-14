function convertColor() {
    var text = document.getElementById("inputRGB").value;
    var colors = text.split('\n');
    var result = "";

    if (!text.length)
        return;

    for (c of colors) {
        if (!c.trim().length)
            continue;
        var temp = c.replaceAll(',', ' ').split(' ');

        var inputType = document.getElementById("inputType").value;
        var outputType = document.getElementById("outputType").value;

        if (inputType == outputType)
            return;

        console.log(temp);
        switch (inputType) {
            case "RGB":
                break;
            case "RGB%":
                temp = convertPerecentToRGB(temp);
                break;
            case "HEX":
                temp = convertHexToRgb(temp);
                break;
        }

        temp = temp.replaceAll(',', ' ').split(' ');

        switch (outputType) {
            case "RGB":
                break;
            case "RGB%":
                temp = convertRGBToPercent(temp);
                break;
            case "HEX":
                temp = convertRGBToHex(temp);
                break;
        }

        result += temp.substring(0, temp.length - 1);
        result += '\n';
    }

    document.getElementById("outputRGB").value = result;
}

function convertRGBToPercent(values) {
    var result = "";
    for (t of values)
        if (t.trim().length)
            result += (parseFloat(t.trim()) / 255.0).toFixed(4) + ",";

    return result;
}

function convertRGBToHex(values) {
    var result = "";
    for (t of values)
        if (t.trim().length)
            result += (parseFloat(t.trim())).toString(16);

    return result + ' ';
}

function convertPerecentToRGB(values) {
    var result = "";
    for (t of values)
        if (t.trim().length)
            result += (parseFloat(t.trim()) * 255).toFixed(1) + ",";

    return result;
}

function convertHexToRgb(values) {
    var result = "";

    for (var i = 0; i + 1 < values[0].trim().length; i += 2)
        result += (parseInt(values[0].substring(i, i + 2), 16)).toString() + ",";

    return result;
}

function resetTextAreas() {
    document.getElementById("inputRGB").value = "";
    document.getElementById("outputRGB").value = "";
}
