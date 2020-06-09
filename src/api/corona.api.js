const CoronaApi = () => {
  const baseURL = 'https://covid19.mathdro.id/api';

  const getTotalStats = async () => {
    const res = await fetch(baseURL);

    return await res.json();
  };

  const getCountries = async () => {
    const res = await fetch(`${baseURL}/countries`);

    return await res.json();
  };

  const getCountryStats = async (iso) => {
    const res = await fetch(`${baseURL}/countries/${iso}`);

    return await res.json();
  };

  return { getTotalStats, getCountries, getCountryStats };
};

export { CoronaApi };
