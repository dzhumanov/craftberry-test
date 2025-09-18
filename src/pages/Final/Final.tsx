import { useNavigate } from "react-router";
import bgImage from "../../assets/final-bg.png";
import { FinalList } from "../../components/FinalList";
import { motion } from "framer-motion";

export function Final() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        className="bg-center bg-no-repeat bg-cover h-screen md:h-[70vh] text-white flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col items-center max-w-[600px] text-center gap-8">
          <h1 className="font-bold text-[40px] leading-[0.9]">
            Build your everyday self care routine.
          </h1>
          <p className="text-lg">
            Perfect for if you're looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture...
          </p>
          <button
            onClick={() => navigate("/")}
            className="border-2 border-white rounded-lg px-10 py-3 cursor-pointer hover:bg-white hover:text-[#1C2635] transition-all duration-300"
          >
            Retake the quiz
          </button>
        </div>
      </div>
      <FinalList />
    </motion.div>
  );
}
