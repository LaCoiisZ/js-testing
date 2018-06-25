import React, { PureComponent } from "react";

import HeaderSection from "./view-fragments/header-section";
import LayerSection from "./view-fragments/layer-section"
import StatisticSection from "./view-fragments/statistic-section";
import MapView from "./map/map";

class AppLayout extends PureComponent {
    render() {
        return (
            <main className="main-content">
                <HeaderSection />
                <section className="section-content">
                    <LayerSection />
                    <StatisticSection />
                    <MapView />
                </section>
            </main>
        );
    }
}

export default AppLayout;