import type { CardType } from "../types/card";

enum API {
  API_KEY = '760fd52a52436dfa3a1d779b01ffc7fe',
  LANGUAGE = 'en-US',
  PAGE = '1'
}

const getCards: () => Promise<CardType[]> = async () => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API.API_KEY}&language=${API.LANGUAGE}&page=${API.PAGE}`;

  try {
    const response = await fetch(url, {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getCards;
