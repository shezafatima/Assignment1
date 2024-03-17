var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Car(Manufacture, Model, Optional) {
    return __assign({ Manufacture: Manufacture, Model: Model }, Optional);
}
var myCar = Car("Kia", "Sportage", { color: "White", year: 2024 });
console.log(myCar);
