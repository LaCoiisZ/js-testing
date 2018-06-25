import React, { PureComponent } from "react";
import esriLoader from "esri-loader";

import AppConstants from "../../constants/app-constant";

class MapView extends PureComponent {

    constructor() {
        super();

        this.map = null;
    }

    componentDidMount() {
        esriLoader.loadModules([
            "esri/map"
        ], AppConstants.EsriLoaderConfig).then(([Map]) => {
            this.map = new Map("divMap", {
                center: [100.59145599279019, 13.304809171200462],
                zoom: 6,
                basemap: "streets"
            });
        });
    }

    render() {
        return (
            <section className="section-map">
                <div className="div-map" id="divMap"></div>
            </section>
        );
    }
}

export default MapView;