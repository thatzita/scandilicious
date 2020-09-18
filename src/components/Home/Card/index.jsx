import React from 'react';
import './Card.css';

const Card = (props) => {
  const { imgSource } = props;
  return (
    <div class='card'>
      <div class='image'>
        <img src={imgSource} />
      </div>
      <div class='details'>
        <div class='center'>
          <h1 style={{ fontFamily: 'Azonix' }}>
            Product name
            <br />
            <span>The product</span>
          </h1>
          <p>
            Lorem ipsum is simple dummy text on the printing and typesetting
            industry.
          </p>
          <ul>
            <li>
              <div
                className='border'
                style={{
                  fontSize: '16px',
                  padding: '0em 1em',
                  border: '1px solid black',
                  cursor: 'pointer',
                }}
              >
                <p>LÄNK</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
