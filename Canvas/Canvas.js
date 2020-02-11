"use strict";
var Canvas_Test;
(function (Canvas_Test) {
    console.log("Es lädt");
    window.addEventListener("load", handleload);
    function handleload() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        console.log(crc2);
    }
})(Canvas_Test || (Canvas_Test = {}));
//# sourceMappingURL=Canvas.js.map