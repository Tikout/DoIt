var name = ['tak', 'nie', 4];
var person = 'steve';
var heightInCentimeters = 182.2131;
var names = ['tak', 'nie'];
var num = [4, 3, 2, 1];
var bool = [true, false, false];
var tuple = ['xyz mzg', 4, true];
var DoorStats;
(function (DoorStats) {
    DoorStats[DoorStats["Open"] = 0] = "Open";
    DoorStats[DoorStats["Closed"] = 1] = "Closed";
    DoorStats[DoorStats["Ajar"] = 2] = "Ajar";
})(DoorStats || (DoorStats = {}));
function log(val) {
    console.log(val);
}
function tellJoke() {
    return 'this is a joke';
}
log(tellJoke());
