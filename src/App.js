import React from 'react';
// import Box from "./components/Box/Box"
import Grid from "./components/Grid/Grid"
import GridRuler from './components/GridRuler/GridRuler';
import Button from './components/Button/Button'


function App() {
  return (
    <div className="App" style={{margin: "16px", position:"relative", height:'100vh'}}>
      {/* <GridRuler spacing="sm"></GridRuler> */}
      <h1>Buttons</h1>
      <h2>Primary</h2>
      <Grid container spacing="sm" justifyContent="flex-start" alignItems="flex-start" style={{ height: '20%' }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h3>Label</h3>

          <Button state="default" size="lg" borderRadius="sm"> Button </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Button state="active" size="lg" borderRadius="sm"> Button </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Button state="hover" size="lg" borderRadius="sm"> Button </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Button state="focus" size="lg" borderRadius="sm"> Button </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Button state="disabled" size="lg" borderRadius="sm"> Button </Button>
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;
