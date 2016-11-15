"use strict";
exports.showModal = function (header, body) {
    console.log("show modal");
    var show = true;
    return {
        type: "SHOW_MODAL",
        payload: { show: show, header: header, body: body }
    };
};
exports.hideModal = function () {
    console.log("hide modal");
    return {
        type: "HIDE_MODAL"
    };
};
//# sourceMappingURL=ModalActions.js.map