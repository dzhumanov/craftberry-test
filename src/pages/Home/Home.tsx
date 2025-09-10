import { Link } from "react-router";
import bgImage from "../../assets/main-bg.png";

export function Home() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-screen text-white flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center gap-4 max-w-[500px] text-center">
        <div className="text-[40px] leading-[1.2] font-medium">
          Build a self care routine suitable for you
        </div>
        <div className="text-[16px] mb-1 max-w-[330px]">
          Take out test to get a personalised self care routine based on your
          needs.
        </div>

        <Link to={"/quiz/1"}>
          <button className="px-10 py-3 bg-[#C3EDFF] text-[#1C2635] text-xl rounded-xl font-medium cursor-pointer">
            Start the quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
