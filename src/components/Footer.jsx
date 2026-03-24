import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  const navLinkClass = (path) =>
    `transition ${
      location.pathname === path
        ? 'text-sky-300'
        : 'text-slate-300 hover:text-sky-300'
    }`;

  return (
    <footer className='mt-10 border-t border-white/10 bg-slate-950/80'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-center text-sm text-slate-300 sm:px-6 lg:px-8'>
        <p>© 2025 Countrix. Tous droits reserves.</p>
        <nav className='flex flex-wrap items-center justify-center gap-4'>
          <Link to='/about' className={navLinkClass('/about')}>
            A propos
          </Link>
          <Link to='/contact' className={navLinkClass('/contact')}>
            Contact
          </Link>
          <Link
            to='/privacy-policy'
            className={navLinkClass('/privacy-policy')}
          >
            Politique de confidentialite
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
