"use strict";
function make_car(manufacturer, modelName, optional) {
    return Object.assign({ manufacturer,
        modelName }, optional);
}
const mycar = make_car("Honda", "civic", { color: "white", year: "2024" });
console.log(mycar);
