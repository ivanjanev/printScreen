/**
 * Created by ivanj on 22-Mar-17.
 */

var picId = 1;
var interval;

$(document).ready(function () {

    $("#btnStart").click(function (e) {
        e.preventDefault();

        var timer = $("#srcTimer").val();

        interval = setInterval(function () {
            $.ajax({
                url: "function.php",
                type: "POST",
                data: {
                    "timer": timer,
                    "numberId": picIdFormat(picId)
                },
                success: function (response) {
                    //Do nothing
                }
            });
            picId += 1;
        },timer*1000);
    });

    $("#btnStop").click(function () {
        clearInterval(interval);
        alert("It's stopped.");
    });
});

var picIdFormat = function (number) {
    if(number < 10)
    {
        return "00"+number;
    }
    if(number > 9 && number < 100)
    {
        return "0"+number;
    }
    if(number > 100)
    {
        return number;
    }
};