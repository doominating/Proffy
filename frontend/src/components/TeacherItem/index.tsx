import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img src='https://github.com/doominating.png' alt='Afonso Amaro' />
        <div>
          <strong>Afonso Amaro</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Nobis nemo officiis expedita earum, voluptatum temporibus quia enim
        exercitationem hic cum tempore deleniti harum neque est nihil eos fugit
        modi dicta.
      </p>

      <footer>
        <p>
          Preço/hora<strong>R$75,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
