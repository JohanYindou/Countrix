function Contact() {
  return (
    <div className='container py-4'>
      <h2 className='text-center mb-4 text-white'>Contactez-nous</h2>

      {/* Carte avec className pour appliquer les styles */}
      <div className='card shadow-sm'>
        <div className='card-body'>
          <h5 className='card-title text-center'>Informations de Contact</h5>

          <p className='card-text'>
            Nous serions heureux de recevoir vos questions, suggestions ou
            commentaires. Voici comment vous pouvez nous contacter :
          </p>

          <p className='card-text'>
            <strong>Email :</strong>{' '}
            <a href='mailto:jyindou@gmail.com' className='text-decoration-none'>
              jyindou@gmail.com
            </a>
          </p>

          <p className='card-text'>
            <strong>Téléphone :</strong>{' '}
            <a href='tel:+33627571890' className='text-decoration-none'>
              +33 6 27 57 18 90
            </a>
          </p>

          <p className='card-text'>
            <strong>Heures de disponibilité :</strong>
            <br />
            Nous sommes disponibles du lundi au vendredi, de 9h à 18h. N'hésitez
            pas à nous contacter pendant ces horaires.
          </p>

          <p className='card-text'>
            Nous nous engageons à répondre à toutes les demandes dans les plus
            brefs délais.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
