import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/teach.svg';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';
import api from '../../services/api';
import './styles.css';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt='Plataforma de estudos'
          className='hero-image'
        />

        <div className='buttons-container'>
          <Link to='/study' className='study'>
            <img src={studyIcon} alt='Aprender' />
            Aprender
          </Link>

          <Link to='/teach' className='teach'>
            <img src={teachIcon} alt='Ensinar' />
            Ensinar
          </Link>
        </div>

        <span className='total-connections'>
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt='Coração roxo' />
        </span>
      </div>
    </div>
  );
}

export default Landing;
