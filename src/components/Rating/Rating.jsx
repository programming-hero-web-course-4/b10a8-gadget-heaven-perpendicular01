import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.4 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="flex-shrink-0 text-yellow-500 text-xl">
        <IoStar />
      </span>
    );
  }
  if (halfStars === 1) {
    stars.push(
      <span key="half" className="flex-shrink-0 text-yellow-500 text-xl">
        <IoStarHalf />
      </span>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="flex-shrink-0 text-gray-400 text-xl">
        <IoStarOutline />
      </span>
    );
  }

  return (
    <div className="flex text-lg gap-[2px]">
      {stars}
    </div>
  );
};

export default Rating;
