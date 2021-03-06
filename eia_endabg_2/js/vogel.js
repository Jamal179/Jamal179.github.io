"use strict";
var aufgabe13;
(function (aufgabe13) {
    class vogel extends aufgabe13.BewegteDinge {
        //malt den kleinen vogel
        constructor(_x, _y) {
            super();
            this.x = _x * (20 - 10) + 20;
            this.y = _y * (350 - 100) + 100;
            this.dx = _x * -10;
            this.dy = 0;
            this.ofType = "kleinerVogel";
        }
        draw() {
            let KörperV = new Path2D();
            KörperV.moveTo(this.x, this.y);
            KörperV.quadraticCurveTo(this.x - 7.5, this.y + 37.5, this.x - 75, this.y);
            KörperV.moveTo(this.x, this.y);
            KörperV.quadraticCurveTo(this.x - 25, this.y - 50, this.x - 75, this.y);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 3;
            aufgabe13.crc.fillStyle = "Peru";
            aufgabe13.crc.stroke(KörperV);
            aufgabe13.crc.fill(KörperV);
            let Flugel = new Path2D();
            Flugel.moveTo(this.x, this.y);
            Flugel.quadraticCurveTo(this.x - 7.5, this.y + 15, this.x - 75, this.y);
            Flugel.moveTo(this.x, this.y);
            Flugel.quadraticCurveTo(this.x - 25, this.y - 35, this.x - 75, this.y);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1.5;
            aufgabe13.crc.fillStyle = "SaddleBrown";
            aufgabe13.crc.stroke(Flugel);
            aufgabe13.crc.fill(Flugel);
            let schnabel = new Path2D();
            schnabel.moveTo(this.x, this.y);
            schnabel.lineTo(this.x + 57.5, this.y - 32.5);
            schnabel.lineTo(this.x + 32.5, this.y);
            schnabel.lineTo(this.x + 37.5, this.y + 3.5);
            aufgabe13.crc.fillStyle = "yellow";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1.5;
            aufgabe13.crc.fill(schnabel);
            schnabel.closePath();
            aufgabe13.crc.stroke(schnabel);
            let vogelchen = new Path2D();
            vogelchen.arc(this.x - 5, this.y, 22.5, 22.5, 22.5 * Math.PI);
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.lineWidth = 1.5;
            aufgabe13.crc.fillStyle = "Peru";
            aufgabe13.crc.stroke(vogelchen);
            aufgabe13.crc.fill(vogelchen);
            let VogelAuge = new Path2D();
            VogelAuge.arc(this.x - 7.5, this.y, 17.5, 0, 20 * Math.PI);
            aufgabe13.crc.fillStyle = "white";
            aufgabe13.crc.strokeStyle = "black";
            aufgabe13.crc.stroke(VogelAuge);
            aufgabe13.crc.fill(VogelAuge);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x - 7.5, this.y, 1, 0, 1 * Math.PI);
            aufgabe13.crc.fillStyle = "black";
            aufgabe13.crc.fill(augeInnen);
        }
        move() {
            this.x -= this.dx;
            this.y -= this.dy;
            if (this.x > 900) {
                this.x = 0 + this.dx;
            }
            if (this.x < 0 - 300) {
                this.x = 900 + this.dx;
            }
        }
    }
    aufgabe13.vogel = vogel;
})(aufgabe13 || (aufgabe13 = {}));
//# sourceMappingURL=vogel.js.map