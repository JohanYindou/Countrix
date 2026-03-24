function Contact() {
  return (
    <section className='mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-900/30 md:p-8'>
      <h2 className='mb-6 text-center text-3xl font-bold text-white'>
        Contactez-nous
      </h2>

      <div className='space-y-4 text-slate-200'>
        <h3 className='text-center text-xl font-semibold text-slate-100'>
          Informations de contact
        </h3>

        <p>
          Nous serions heureux de recevoir vos questions, suggestions ou
          commentaires. Voici comment vous pouvez nous contacter :
        </p>

        <p>
          <strong>Email :</strong>{' '}
          <a
            href='mailto:jyindou@gmail.com'
            className='font-medium text-sky-300 transition hover:text-sky-200'
          >
            jyindou@gmail.com
          </a>
        </p>

        <p>
          <strong>Telephone :</strong>{' '}
          <a
            href='tel:+33627571890'
            className='font-medium text-sky-300 transition hover:text-sky-200'
          >
            +33 6 27 57 18 90
          </a>
        </p>

        <p>
          <strong>Heures de disponibilite :</strong>
          <br />
          Nous sommes disponibles du lundi au vendredi, de 9h a 18h. N&apos;hesitez
          pas a nous contacter pendant ces horaires.
        </p>

        <p>
          Nous nous engageons a repondre a toutes les demandes dans les plus
          brefs delais.
        </p>
      </div>
    </section>
  );
}

export default Contact;
