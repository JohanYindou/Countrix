import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='text-center bg-dark text-light py-4 mt-4'>
      <div className='container'>
        <p className='mb-2'>© 2025 Countrix. Tous droits réservés.</p>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <Link to='/about' className='text-light text-decoration-none'>
              À propos
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to='/contact' className='text-light text-decoration-none'>
              Contact
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link
              to='/privacy-policy'
              className='text-light text-decoration-none'>
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
