import React from 'react';
import logo from '../../images/logo.png';

import Card from './Card';

const Home = () => {
  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div className='flex-container'>
      <div className='bgimg-1'>
        <img src={logo} className='mainLogo' alt='Scandilicious Logo' />
      </div>
      <FadeInSection key='snow'>
        <div className='box' style={{ backgroundColor: 'snow' }}>
          <div
            style={{
              color: '#777',
              backgroundColor: 'snow',
              padding: '1em 2em',
              textAlign: 'justify',
            }}
          >
            <h3
              style={{
                textAlign: 'center',
                fontFamily: 'Azonix',
                color: '#A55A5E',
              }}
            >
              ABOUT SCANDILICIOUS
            </h3>
            <p className='broed-text'>
              We believe that long term health and optimised performance are
              achieved by living a sustainable and balanced life. We offer a
              100% plant based, protein rich alternative to snacks and treats -
              without making you choose between nutrition and indulgence. Join
              us in embracing the infamous Scandi lifestyle, where maximising
              your quality of life does not compromise the future of our planet.
            </p>
            <p className='broed-text'>
              It’s Scandinavian. It’s delicious.
              <br />
              <strong>This is Scandilicious.</strong>
            </p>
          </div>
        </div>
      </FadeInSection>

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
            backgroundColor: '#313C40',
            textAlign: 'center',
          }}
        >
          <FadeInSection key='snow'>
            <div
              style={{
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
                flexWrap: 'wrap',
                padding: '1em',
              }}
            >
              <Card imgSource='https://firebasestorage.googleapis.com/v0/b/scandilious.appspot.com/o/logo%2Flogo_green.png?alt=media&token=64ca827b-8271-48b4-8166-4768872bd7fb' />
              <Card imgSource='https://firebasestorage.googleapis.com/v0/b/scandilious.appspot.com/o/logo%2Flogo_pinkish.png?alt=media&token=2751e072-5c8b-42da-9cf5-e0e6981c24d4' />
              <Card imgSource='https://firebasestorage.googleapis.com/v0/b/scandilious.appspot.com/o/logo%2Flogo_blue.png?alt=media&token=6173403e-70d0-44ee-8d2d-0a8b882c53b1' />
            </div>
          </FadeInSection>
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
            CONNECT WITH US
          </span>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div className='logo'>
          <i
            className='fab fa-instagram logo-icon'
            onClick={() =>
              window.open('https://www.instagram.com/scandiliciousnordic/')
            }
          ></i>
          <i
            className='fab fa-facebook-f logo-icon'
            onClick={() =>
              window.open(
                'https://www.facebook.com/Scandilicious-Nordic-Nutrition-113323297123774'
              )
            }
          ></i>
          <i
            className='fab fa-twitter logo-icon'
            onClick={() => window.open('https://twitter.com/scandiliciousSE')}
          ></i>
          <i
            className='fab fa-pinterest-p logo-icon'
            onClick={() =>
              window.open(
                'https://www.pinterest.co.uk/scandiliciousnordicnutrition/'
              )
            }
          ></i>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            color: '#ddd',
            backgroundColor: '#313C40',
            padding: '50px 80px',
            textAlign: 'center',
          }}
        >
          <p className='text'>
            Copyright © 2020 Scandilicious - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
