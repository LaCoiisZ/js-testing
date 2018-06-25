import React, { PureComponent } from "react";

import HeaderSection from "./HeaderSection";
import LayerSection from "./LayerSection"
import StatisticSection from "./StatisticLayout";
import MapView from "../Map";

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