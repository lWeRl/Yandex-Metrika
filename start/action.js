(function () {
    //JS action
    var dialog = $("#dialog")[0];

    $("#open").on("click", function () {
        dialog.showModal();
        yaCounter.reachGoal("open");
    });

    $("#button2").on("click", function () {
        yaCounter.reachGoal("button2", function(){dialog.close()});
    });

    $("#button1").on("click", function () {
        yaCounter.reachGoal("button1", function(){dialog.close()});
    });

    dialog.onclose = function () {
        yaCounter.reachGoal("send");
    };

}());