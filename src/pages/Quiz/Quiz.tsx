import { useNavigate, useParams } from "react-router";
import ProgressCircle from "../../components/ProgressCircle";
import { QuizItem } from "../../components/QuizItem";
import { useSelector } from "react-redux";
import { addAnswer, selectQuestions } from "../../store/QuizSlice";
import { useAppDispatch } from "../../store/hooks";
import { motion, AnimatePresence } from "framer-motion";

export function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const questions = useSelector(selectQuestions);

  const currentQuestionNumber = Number(id) - 1;

  const backHandler = () => {
    if (Number(id) === 1) {
      return navigate("/");
    }
    navigate(`/quiz/${Number(id) - 1}`);
  };

  const nextHandler = () => {
    if (Number(id) === 5) {
      return navigate("/final");
    }
    navigate(`/quiz/${Number(id) + 1}`);
  };

  const answerHandler = (answer: string) => {
    dispatch(addAnswer(answer));
    if (Number(id) === 5) {
      return navigate("/final");
    }
    navigate(`/quiz/${Number(id) + 1}`);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center w-full">
      {id && (
        <AnimatePresence mode="wait">
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center gap-8 w-full md:w-[60%]"
          >
            <motion.div
              className="text-[40px] leading-[1.2] font-medium max-w-[600px] min-h-[120px] flex items-center justify-center text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {questions[currentQuestionNumber].question}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2  justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {questions[currentQuestionNumber].answers.map((answer) => (
                <motion.div
                  key={answer}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuizItem text={answer} onAnswer={answerHandler} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                className="text[#677487] text-xl underline rounded-lg px-5 cursor-pointer hover:bg-[#C3EDFF] transition-all duration-300"
                onClick={backHandler}
              >
                Back
              </button>
              <button
                className="bg-[#C3EDFF] px-7 py-4 rounded-lg cursor-pointer hover:bg-[#7DD3FC] transition-all duration-300"
                onClick={nextHandler}
              >
                Next question →
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}


      <div>{id && <ProgressCircle step={parseInt(id)} total={5} />}</div>
    </div>
  );
}
