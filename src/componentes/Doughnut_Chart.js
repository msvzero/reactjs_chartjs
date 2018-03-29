import React, { Component } from 'react';
var DoughnutChart = require("react-chartjs").Doughnut;

class Doughnut_Chart extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    value: 300,
                    color:"#F7464A",
                    highlight: "#FF5A5E",
                    label: "Red"
                },
                {
                    value: 50,
                    color: "#46BFBD",
                    highlight: "#5AD3D1",
                    label: "Green"
                },
                {
                    value: 100,
                    color: "#FDB45C",
                    highlight: "#FFC870",
                    label: "Yellow"
                }
            ]
        }
    }//Fin del constructor

    render() {
        return(
            <div>
                <h3>Ejemplo de Doughnut Chart</h3>
                <DoughnutChart data={this.state.data} width="500" height="250"/>
            </div>
        )
    }
}

export default Doughnut_Chart;