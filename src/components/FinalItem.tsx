import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useLocalStorage } from "react-use-storage";

interface Props {
  id: number;
  title: string;
  image: string;
}

export function FinalItem({ id, title, image }: Props) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const maxTitleLength = 25;
  const truncatedTitle =
    title.length > maxTitleLength
      ? `${title.slice(0, maxTitleLength)}...`
      : title;
  const shouldShowTooltip = title.length > maxTitleLength;
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="rounded-xl bg-white shadow-sm flex flex-col h-full max-w-[100%] md:max-w-[280px] relative group">
      <button
        className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors text-gray-800 hover:text-red-500 cursor-pointer ${
          isFavorite ? "text-red-500" : ""
        }`}
        onClick={handleFavoriteClick}
      >
        <HeartIcon className={`w-5 h-5 ${isFavorite ? "fill-red-500" : ""}`} />
      </button>

      <div className="rounded-t-xl bg-[#F8F9FA] p-6 flex justify-center items-center h-[280px]">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="relative">
          <h3
            className="font-semibold text-lg text-gray-800 mb-2 cursor-pointer"
            onMouseEnter={() => shouldShowTooltip && setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            {truncatedTitle}
          </h3>

          {shouldShowTooltip && isTooltipVisible && (
            <div className="absolute bottom-full left-0 mb-2 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg z-20 max-w-[280px] whitespace-normal">
              {title}
              <div className="absolute top-full left-4 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
