function About() {
  return (
    <section className='mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-900/30 md:p-8'>
      <h2 className='mb-6 text-center text-3xl font-bold text-white'>
        A propos de Countrix
      </h2>
      <div className='space-y-4 text-slate-200'>
        <p>
            Countrix est une application conçue pour fournir des informations
            détaillées sur les pays du monde entier. Grâce à l&apos;API
            RestCountries, nous vous permettons d&apos;explorer diverses données,
            notamment la capitale, la population, la région, la sous-région et
            bien plus encore pour chaque pays.
        </p>

        <p>
            <strong>Notre mission</strong> :
            <br />
            Notre mission est de rendre ces données accessibles et utiles à
            tous, qu&apos;il s&apos;agisse de voyageurs, d&apos;étudiants, de chercheurs ou
            simplement de curieux. Nous croyons que la connaissance des pays et
            de leur culture est essentielle pour mieux comprendre le monde dans
            lequel nous vivons.
        </p>

        <div>
            <strong>Fonctionnalités principales :</strong>
            <ul className='mt-2 list-inside list-disc space-y-1 text-slate-300'>
              <li>Visualisation des informations de chaque pays du monde.</li>
              <li>
                Filtrage des pays par région grâce à un sélecteur de régions.
              </li>
              <li>
                Affichage des drapeaux et des détails essentiels de chaque pays.
              </li>
            </ul>
        </div>

        <p>
            Countrix est un projet dynamique qui sera régulièrement mis à jour
            avec de nouvelles fonctionnalités et des améliorations. Nous
            espérons que vous apprécierez l&apos;expérience d&apos;exploration des pays du
            monde entier !
        </p>
      </div>
    </section>
  );
}

export default About;
