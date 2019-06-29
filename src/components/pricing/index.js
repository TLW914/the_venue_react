import React, { Component } from 'react';
import _ from 'lodash';
import MyButton from '../ui/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [385, 815, 1595, 155, 355, 695],
    packages: [
      {
        title: '3-Day GA',
        price: 385,
        description: [
          'Access to 3 incredible days in Golden Gate Park celebrating music, food, wine, beer, art, comedy, cannabis, and everything we love about the Bay Area.',
          'A diverse offering of world class performances, food & beverage vendors, and one-of-a-kind experiences to explore'
        ]
      },
      {
        title: '3-Day VIP',
        price: 815,
        description: [
          'Access to 3 incredible days in Golden Gate Park celebrating music, food, wine, beer, art, comedy, cannabis, and everything we love about the Bay Area',
          'A diverse offering of world class performances, food & beverage vendors, and one-of-a-kind experiences to explore',
          'Separate VIP-only entrance, plus dedicated VIP lanes at all entrances',
          'VIP viewing areas at Lands End, Sutro & Twin Peaks stages',
          'VIP hospitality areas at Lands End & Twin Peaks stages with upgraded restrooms',
          'VIP lounge & courtyard near Lands End stage, featuring exclusive food vendors, premium bars, upgraded restrooms and more',
          'Commemorative festival poster',
          'Access to VIP exclusive merch for purchase',
          'Access to VIP lockers for rent',
          'Exclusive email concierge for VIP customer service',
          'Special exclusive performances to be announced'
        ]
      },
      {
        title: '3-Day Golden Gate',
        price: 815,
        description: [
          'Access to 3 incredible days in Golden Gate Park celebrating music, food, wine, beer, art, comedy, cannabis, and everything we love about the Bay Area',
          'A diverse offering of world class performances, food & beverage vendors, and one-of-a-kind experiences to explore',
          'Separate VIP-only entrance, plus dedicated VIP lanes at all entrances',
          'VIP viewing areas at Lands End, Sutro & Twin Peaks stages',
          'VIP hospitality areas at Lands End & Twin Peaks stages with upgraded restrooms',
          'VIP lounge & courtyard near Lands End stage, featuring exclusive food vendors, premium bars, upgraded restrooms and more',
          'Commemorative festival poster',
          'Access to VIP exclusive merch for purchase',
          'Access to VIP lockers for rent',
          'Exclusive email concierge for VIP customer service',
          'Special exclusive performances to be announced',
          'Access to NEW Golden Gate Club, with elevated views of the Lands End main stage',
          'Golden Gate Club features best-in-class hospitality and an all-inclusive premium bar with beer, wine, cocktails, and specialty snacks',
          'Complimentary bag-policy-compliant clear bag',
          'VIP priority phone line for customer service, July-Aug',
          '+ More to come!'
        ]
      }
    ],
    linkto: 'https://www.sfoutsidelands.com/tickets/',
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.packages.map((ticketPackage, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{ticketPackage.title}</span>
              <span>${ticketPackage.price}</span>
            </div>
            {_.map(ticketPackage.description, (ticketDescription, i) => {
              return (
                <li key={i} className="pricing_description">
                  {ticketDescription}
                </li>
              );
            })}
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                color="#ffffff"
                bck="#ffa800"
                link={this.state.linkto}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
