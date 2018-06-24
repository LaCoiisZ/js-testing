require([
    "esri/map",
    "dojo/domReady!"
], function (Map) {
    const map = new Map("divMap", {
        center: [100.59145599279019, 13.304809171200462],
        zoom: 6,
        basemap: "streets"
    });
});