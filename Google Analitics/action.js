(function () {
    //JS action
    var dialog = $("#dialog")[0];

    $("#open").on("click", function () {
        dialog.showModal();
        //yaCounter.reachGoal("open");

        window.ga('send', {
            hitType: 'event',
            eventCategory: 'dialog',
            eventAction: 'open',
            hitCallback: function () {
                console.log("dialog.open");
            }
        });
    });

    $("#button1").on("click", function () {
        //yaCounter.reachGoal("button_1");
        window.ga('send', {
            hitType: 'event',
            eventCategory: 'dialog',
            eventAction: 'button_1',
            hitCallback: function () {
                console.log("dialog.button_1");
                dialog.close();
                window.ga('send', {
                    hitType: 'event',
                    eventCategory: 'dialog',
                    eventAction: 'send',
                    hitCallback: function () {
                        console.log("dialog.send");
                    }
                });
            }
        });
        //yaCounter.reachGoal("send");
    });

    $("#button2").on("click", function () {
        //yaCounter.reachGoal("button_2");
        window.ga('send', {
            hitType: 'event',
            eventCategory: 'dialog',
            eventAction: 'button_2',
            hitCallback: function () {
                console.log("dialog.button_2");
                dialog.close();
                window.ga('send', {
                    hitType: 'event',
                    eventCategory: 'dialog',
                    eventAction: 'send',
                    hitCallback: function () {
                        console.log("dialog.send");
                    }
                });
            }
        });
        //yaCounter.reachGoal("send");
    });

}());