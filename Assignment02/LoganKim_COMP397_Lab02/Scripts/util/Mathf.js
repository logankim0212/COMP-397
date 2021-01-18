"use strict";
var util;
(function (util) {
    class Mathf {
        // angle = aiming angle in degrees
        // for x coordinate = bullet speed * cos(angle * util.Deg2Rad);
        // for y coordinate = bullet speed * sin(angle * util.Deg2Rad);
        static Clamp(value, min, max) {
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        }
        static Clamp01(value) {
            if (value < 0.0) {
                return 0.0;
            }
            if (value > 1.0) {
                return 1.0;
            }
            return value;
        }
        static Lerp(a, b, t) {
            return a + (b - a) * Mathf.Clamp01(t);
        }
        static LerpUnclamped(a, b, t) {
            return a + (b - a) * t;
        }
        static RandomRange(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
    }
    Mathf.Deg2Rad = 0.01745329;
    util.Mathf = Mathf;
})(util || (util = {}));
//# sourceMappingURL=Mathf.js.map