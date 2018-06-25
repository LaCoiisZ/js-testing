import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

/** Import main SCSS */
import "./sass/style.scss";

import AppLayout from "./components/Layout";

class Application extends PureComponent
{
    render() {
        return (
            <AppLayout />
        );
    }
}
  
ReactDOM.render(<Application />, document.getElementById("shell"));

// require([
//     "esri/map",
//     "dojo/domReady!"
// ], function (Map) {
//     const map = new Map("divMap", {
//         center: [100.59145599279019, 13.304809171200462],
//         zoom: 6,
//         basemap: "streets"
//     });
// });