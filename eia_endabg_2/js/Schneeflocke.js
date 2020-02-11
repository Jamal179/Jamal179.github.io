"use strict";
var aufgabe13;
(function (aufgabe13) {
    class SchneeFall extends aufgabe13.BewegteDinge {
        constructor(_x, _y) {
            super();
            this.x = _x * 1000;
            this.y = _y * 5000;
            this.dx = 0;
            this.dy = 0.1 * +10; //geschwindigkeit blase nach oben // von wo (+ oben)
            this.ofType = "blubberblasen";
        }
        draw() {
            let blubaußen = new Path2D();
            blubaußen.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.fill(blubaußen);
            let blub = new Path2D();
            blub.arc(this.x, this.y, 7, 0, 2 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.fill(blub);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y < 0) {
                this.y = 900 + this.dy;
            }
        }
    }
    aufgabe13.SchneeFall = SchneeFall;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=Schneeflocke.js.map