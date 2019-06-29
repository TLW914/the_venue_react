import React from 'react';
import '../resources/styles.css';
import { Element } from 'react-scroll';
import Header from './header_footer/Header';
import Featured from './featured';
import VenueInfo from './venue_info';
import Highlights from './highlights';
import Pricing from './pricing';
import Location from './location';
import Footer from './header_footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px' }}>
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venue_info">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
