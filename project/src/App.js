import React from "react";
import { getLCP, getFID, getCLS } from "web-vitals";
import {  GridRow, GridColumn } from "emotion-flex-grid";

import "@fontsource/plus-jakarta-sans"
import "@fontsource/open-sans"
import "@fontsource/cormorant-garamond"

import Footer from "./components/Footer/Footer";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";

import './App.css';

if (typeof window !== "undefined") {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
}

function App() {
  return (
    <div className="App">
      <main className="content" tabIndex="-1">
          <GridRow wrap="wrap" className="desktop-mobile">
              <GridColumn width={[12, 12, 12, 7]}>
                <Left />
              </GridColumn>
              <GridColumn width={[12, 12, 12, 5]} className='right-app'>
                <Right />
              </GridColumn>
          </GridRow>
      </main>
        <Footer />
    </div>
  );
}

export default App;
