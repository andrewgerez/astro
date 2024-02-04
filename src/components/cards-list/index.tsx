import type { CardType } from "../../types/card";

interface ICards {
  cards: CardType[];
}

const Cards = ({ cards }: ICards) => {
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="grid grid-cols-1 gap-3 list-disc list-inside md:grid-cols-10">
        {cards.map((card) => (
          <li key={card.id} className="list-none bg-white rounded-md w-[150px]">
            <a href="/" className="flex flex-col h-full text-sm">
              <img src={`https://image.tmdb.org/t/p/w400/${card.poster_path}`} alt={card.title} className="mx-auto" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
