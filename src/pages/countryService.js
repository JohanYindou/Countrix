export async function fetchBorderCountries(codes) {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes.join(',')}`
    );
  
    if (!res.ok) throw new Error('Erreur frontières');
  
    return res.json();
  }
  