import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from '../components/DynamicText';
import Buttons from '../components/Buttons';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const cvPath = 'cv.pdf';

  return (
    <div>
      <Mouse />
      <div className='home'></div>
      <Navigation />
      <SocialNetwork />
      <div className='home-main'>
        <div
          className='main-content'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 80px - 48px)',
          }}
        >
          <h1>Idriss ASKRI</h1>
          <h2>
            <DynamicText />
          </h2>
          <a href={cvPath} download="cv.pdf">
            Télécharger le CV
          </a>
        </div>
        <Buttons right={'/projet-1'} />
      </div>
      <div className='self-presentation'>
        <h3>Présentation</h3>
        <p>
          Développeur web junior, passionné d’informatique, je suis à la recherche d’une alternance au rythme de 3 semaines en entreprise et 1 semaine en cours à partir du 18 Septembre 2023 pour une durée de 14 mois. Pour la préparation d'un titre RNCP de niveau 5.
        </p>
        <br />
        <ul>
          <li>
            <h3>Diplômes</h3>
            <p>Licence Humanités (L2)</p>
            <p>Baccalauréat Professionnel Gestion-administration</p>
          </li>
        </ul>
      </div>
      <div className='contact-form'>
      <br></br>
        <h3>Contact</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
