import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25229.95199853255!2d-122.4841780190631!3d37.77260041762827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085870ce6192a77%3A0x39f4ca93e7f4a6e8!2s25th+Ave+%26+Fulton+St%2C+San+Francisco%2C+CA+94121!5e0!3m2!1sen!2sus!4v1561762705283!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen
        title="location"
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
