function About() {
  return (
    <div className='container py-4'>
      {/* Carte avec className pour appliquer les styles */}
      <div className='card shadow-sm'>
        <div className='card-body'>
          <h5 className='card-title text-center mb-4'>À propos de Countrix</h5>
          <p className='card-text'>
            Countrix est une application conçue pour fournir des informations
            détaillées sur les pays du monde entier. Grâce à l'API
            RestCountries, nous vous permettons d'explorer diverses données,
            notamment la capitale, la population, la région, la sous-région et
            bien plus encore pour chaque pays.
          </p>

          <p className='card-text'>
            <strong>Notre mission</strong> :
            <br />
            Notre mission est de rendre ces données accessibles et utiles à
            tous, qu'il s'agisse de voyageurs, d'étudiants, de chercheurs ou
            simplement de curieux. Nous croyons que la connaissance des pays et
            de leur culture est essentielle pour mieux comprendre le monde dans
            lequel nous vivons.
          </p>

          <p className='card-text'>
            <strong>Fonctionnalités principales :</strong>
            <ul>
              <li>Visualisation des informations de chaque pays du monde.</li>
              <li>
                Filtrage des pays par région grâce à un sélecteur de régions.
              </li>
              <li>
                Affichage des drapeaux et des détails essentiels de chaque pays.
              </li>
            </ul>
          </p>

          <p className='card-text'>
            Countrix est un projet dynamique qui sera régulièrement mis à jour
            avec de nouvelles fonctionnalités et des améliorations. Nous
            espérons que vous apprécierez l'expérience d'exploration des pays du
            monde entier !
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
