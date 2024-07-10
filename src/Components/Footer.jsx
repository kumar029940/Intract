import React from 'react';
import '../Styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>intract.</h2>
          <p>We are your personal guide for exploring web3 projects & earning 100x rewards</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>INTRACT</h3>
            <ul>
              <li>Explore Quests</li>
              <li>Communities</li>
              <li>Alpha Hub</li>
            </ul>
          </div>
          <div>
            <h3>EARN</h3>
            <ul>
              <li>Refer & Earn</li>
              <li>Leaderboard</li>
              <li>Achievements</li>
            </ul>
          </div>
          <div>
            <h3>ABOUT</h3>
            <ul>
              <li>Product Roadmap</li>
              <li>Affiliate Program</li>
              <li>Sign up Program</li>
              <li>Growth Community</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h3>SUPPORT</h3>
            <ul>
              <li>Help Center</li>
              <li>Create your quest</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Community Guidelines</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <strong>Disclaimer:</strong> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
        </p>
      </div>
    </footer>
  );
}
