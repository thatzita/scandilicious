import React from 'react';
import logo from '../../images/logo.png';

const Home = () => {
  return (
    <div className='flex-container'>
      <div className='bgimg-1'>
        <img src={logo} className='mainLogo' alt='Scandilicious Logo' />
      </div>
      <div
        style={{
          color: '#777',
          backgroundColor: 'white',
          padding: '50px 20px',
          textAlign: 'justify',
        }}
      >
        <h3 style={{ textAlign: 'center', fontFamily: 'Azonix' }}>
          ABOUT SCANDILICIOUS
        </h3>
        <p
          style={{
            fontSize: '18px',
            textAlign: 'center',
          }}
        >
          We believe that long term health and optimised performance are
          achieved by living a sustainable and balanced life. We offer a 100%
          plant based, protein rich alternative to snacks and treats - without
          making you choose between nutrition and indulgence. Join us in
          embracing the infamous Scandi lifestyle, where maximising your quality
          of life does not compromise the future of our planet.
        </p>
        <p style={{ fontSize: '18px', textAlign: 'center' }}>
          It’s Scandinavian. It’s delicious.
          <br />
          <strong>This is Scandilicious.</strong>
        </p>
      </div>
      <div className='bgimg-2'>
        <div className='caption'>
          <span
            className='border'
            style={{
              fontSize: '25px',
              color: '#f7f7f7',
            }}
          >
            PRODUCTS
          </span>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            color: '#ddd',
            backgroundColor: '#282E34',
            padding: '50px 80px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '18px' }}>Show products and information</p>
        </div>
      </div>

      <div className='bgimg-3'>
        <div className='caption'>
          <span
            className='border'
            style={{
              fontSize: '25px',
              color: '#f7f7f7',
            }}
          >
            SOCIAL MEDIA
          </span>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div className='logo'>
          <i
            className='fab fa-instagram logo-icon'
            onClick={() => window.open('https://www.instagram.com/mathewfras/')}
          ></i>
          <i
            className='fab fa-facebook-f logo-icon'
            onClick={() => window.open('https://www.facebook.com/crossfit')}
          ></i>
          <i
            className='fab fa-twitter logo-icon'
            onClick={() => window.open('https://twitter.com/crossfit')}
          ></i>
          <i
            className='fab fa-pinterest-p logo-icon'
            onClick={() =>
              window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            }
          ></i>
        </div>
      </div>
      <div className='bgimg-4'>
        <div className='caption'>
          <span
            className='border'
            style={{
              fontSize: '25px',
              color: '#f7f7f7',
            }}
          >
            CONTACT US
          </span>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            color: '#ddd',
            backgroundColor: '#282E34',
            padding: '50px 80px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '18px' }}>Mail and stuff</p>
          <p style={{ fontSize: '18px' }}>
            Copyright © 2020 Scandilicious - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
