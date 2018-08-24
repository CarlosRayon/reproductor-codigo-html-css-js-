$(".button").click(function () {
    // $(".button").removeClass("marcado");
    $(this).toggleClass("marcado");
    var panelId = $(this).attr("id") + "-panel";
    $("#" + panelId).toggleClass("oculto");

})


$("textarea").on('change keyup paste', function () {
    $("iframe").contents().find("html").html("<html> <head> <style type='text/css'>" + $("#css-panel").val() + "</style></head><body>" + $("#html-panel").val()) + "<body></html>";
    document.getElementById("output-panel").contentWindow.eval($("#js-panel").val());;
})


