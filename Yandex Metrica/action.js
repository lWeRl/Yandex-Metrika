(function () {
    //JS action
    var dialog = $("#dialog")[0];

    $("#open").on("click", function () {
        dialog.showModal();
        yaCounter.reachGoal("open");
    });

    $("#button1").on("click", function () {
        yaCounter.reachGoal("button_1", function() {
            dialog.close();
            yaCounter.reachGoal("send");
        });
    });

    $("#button2").on("click", function () {
        yaCounter.reachGoal("button_2", function() {
            dialog.close();
            yaCounter.reachGoal("send");
        });
    });

}());