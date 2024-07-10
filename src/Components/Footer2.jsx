import React from 'react';
import '../Styles/Footer2.css'; // Assuming you will create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faTelegram, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>CREATED BY INTRACT</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
