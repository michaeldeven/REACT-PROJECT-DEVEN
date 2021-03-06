import React from 'react';
import Header from './Commponents/Header';
import Feature from './Commponents/Feature';
import About from './Commponents/About';
import Presentasi from './Commponents/Presentasi';
import aboutimage from './images/mantap2.png';
import aboutimage1 from './images/cekhistory.png';
import Kontak from './Commponents/Kontak';
import LinearStepper from './LinearStepper';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About image={aboutimage} title="Mudah Digunakan" button="Selengkapnya" />
      <Presentasi />

      <About image={aboutimage1} title="Efesien!" button="Selengkapnya" />
      <>
        <CssBaseline />
        <Container component={Box} p={4}>
          <Paper component={Box} p={3}>
            <LinearStepper />
          </Paper>
        </Container>
        <Kontak />
      </>
    </div>
  );
}

export default App;
