import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div class='card'>
      <div class='image'>
        <img src='http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg' />
      </div>
      <div class='details'>
        <div class='center'>
          <h1>
            Someone famous
            <br />
            <span>team leader</span>
          </h1>
          <p>
            Lorem ipsum is simple dummy text on the printing and typesetting
            industry.
          </p>
          <ul>
            <li>
              <a href='#'>
                <p>LÄNK</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
