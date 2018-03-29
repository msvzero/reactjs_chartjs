import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col } from 'react-bootstrap';
//Charts
import LineChart from './componentes/Line_Chart';
import BarChart from './componentes/Bar_Chart';
import PieChart from './componentes/Pie_Chart';
import DoughnutChart from './componentes/Doughnut_Chart';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">ReactJs</h1>
        </header>
       
            <Grid>
                <Row className="show-grid">
                   <Col xs={12} md={6}>
                      <LineChart/>
                   </Col>
                   <Col xs={12} md={6}>
                      <BarChart/>
                   </Col>

                </Row>
                <Row className="show-grid">
                   <Col xs={12} md={6}>
                      <PieChart/>
                   </Col>
                   <Col xs={12} md={6}>
                      <DoughnutChart/>
                   </Col>

                </Row>
            </Grid>
  
      </div>
    );
  }
}

export default App;
