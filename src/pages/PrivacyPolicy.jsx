function PrivacyPolicy() {
  return (
    <div className='container py-4'>
      <h2 className='text-center mb-4 text-white'>
        Politique de confidentialité
      </h2>

      {/* Carte avec className pour appliquer les styles */}
      <div className='card shadow-sm'>
        <div className='card-body'>
          <h5 className='card-title'>
            Notre Engagement en Matière de Confidentialité
          </h5>

          <p className='card-text'>
            Chez Countrix, nous prenons la confidentialité de vos données très
            au sérieux. Nous nous engageons à protéger toutes les informations
            personnelles que vous nous fournissez. Voici les principes que nous
            suivons pour garantir la sécurité et la confidentialité de vos
            données :
          </p>

          <p className='card-text'>
            <strong>1. Collecte des informations :</strong> Nous collectons des
            informations personnelles lorsque vous utilisez notre application,
            telles que votre nom, votre adresse e-mail, ou d'autres informations
            que vous fournissez volontairement. Nous ne collectons pas
            d'informations sensibles sans votre consentement explicite.
          </p>

          <p className='card-text'>
            <strong>2. Utilisation des informations :</strong> Les informations
            que nous collectons sont utilisées uniquement pour améliorer votre
            expérience avec Countrix. Nous ne les partagerons jamais avec des
            tiers sans votre consentement préalable.
          </p>

          <p className='card-text'>
            <strong>3. Protection des données :</strong> Nous mettons en place
            des mesures techniques et organisationnelles pour protéger vos
            données personnelles contre toute utilisation non autorisée,
            modification ou suppression.
          </p>

          <p className='card-text'>
            <strong>4. Vos droits :</strong> Vous avez le droit d'accéder à vos
            informations personnelles, de les corriger ou de les supprimer. Si
            vous avez des questions ou des préoccupations concernant vos
            données, n'hésitez pas à nous contacter.
          </p>

          <p className='card-text'>
            <strong>5. Cookies :</strong> Nous utilisons des cookies pour
            améliorer votre expérience sur notre site. Ces cookies nous aident à
            analyser les habitudes de navigation et à personnaliser votre
            expérience en fonction de vos préférences.
          </p>

          <p className='card-text'>
            Nous vous encourageons à lire attentivement cette politique de
            confidentialité pour bien comprendre comment nous collectons et
            utilisons vos données. En utilisant notre application, vous acceptez
            cette politique.
          </p>

          <p className='card-text'>
            Si vous avez des questions ou des préoccupations concernant notre
            politique de confidentialité, n'hésitez pas à{' '}
            <a href='mailto:jyindou@gmail.com' className='text-decoration-none'>
              nous contacter
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
