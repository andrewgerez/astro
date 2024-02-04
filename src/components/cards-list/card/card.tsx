import type { CardType } from "../../../types/card";

interface ICard {
  card: CardType;
}

const Card = ({ card }: ICard) => {
  return (
    <li key={card.id} className="list-none bg-white rounded-md w-[150px]">
      <a href="/" className="flex flex-col h-full text-sm">
        <img src={`https://image.tmdb.org/t/p/w400/${card.poster_path}`} alt={card.title} className="mx-auto" />
      </a>
    </li>
  );
}

export default Card;
