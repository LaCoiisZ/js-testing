import React, { PureComponent } from "react";
import Highcharts from "highcharts";

class StatisticSection extends PureComponent {

    componentDidMount() {
        const myChart = Highcharts.chart('chart-container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
    }

    render() {
        return (
            <section className="section-statistic">
                <div id="chart-container" style={{ width : "100%", height: "100%"}}></div>
            </section>
        );
    }
}

export default StatisticSection;