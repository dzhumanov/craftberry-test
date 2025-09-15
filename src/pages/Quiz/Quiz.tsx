import { useNavigate, useParams } from "react-router";
import ProgressCircle from "../../components/ProgressCircle";
import { QuizItem } from "../../components/QuizItem";
import { useSelector } from "react-redux";
import {
  addAnswer,
  selectAnswers,
  selectQuestions,
} from "../../store/QuizSlice";
import { useAppDispatch } from "../../store/hooks";

export function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const questions = useSelector(selectQuestions);
  const answers = useSelector(selectAnswers);

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
    console.log(answers);
    if (Number(id) === 5) {
      return navigate("/final");
    }
    navigate(`/quiz/${Number(id) + 1}`);
  };

  return (
    <div className="flex h-screen items-center justify-center w-full">
      {id && (
        <div className="flex flex-col items-center text-center gap-8 ">
          <div className="text-[40px] leading-[1.2] font-medium">
            {questions[currentQuestionNumber].question}
          </div>
          <div className="flex gap-2">
            {questions[currentQuestionNumber].answers.map((answer) => (
              <QuizItem key={answer} text={answer} onAnswer={answerHandler} />
            ))}
          </div>
          <div className="flex gap-5">
            <button
              className="text[#677487] text-xl underline cursor-pointer"
              onClick={backHandler}
            >
              Back
            </button>
            <button
              className="bg-[#C3EDFF] px-7 py-4 rounded-lg cursor-pointer"
              onClick={nextHandler}
            >
              Next question →
            </button>
          </div>
        </div>
      )}
      <div>{id && <ProgressCircle step={parseInt(id)} total={5} />}</div>
    </div>
  );
}
