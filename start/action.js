(function () {
    //JS action
    var dialog = $("#dialog")[0];

    $("#open").on("click", function () {
        dialog.showModal();
        yaCounter.reachGoal("open");
        console.log('opened, sent open');
    });

    $("#button2").on("click", function () {
        yaCounter.reachGoal("right_button");
        console.log('sent right');
    });

    $("#button1").on("click", function () {
        yaCounter.reachGoal("left_button");
        console.log('sent left');
    });

    dialog.onclose = function () {
        yaCounter.reachGoal("close");
        console.log('closed, sent close');
    };

}());