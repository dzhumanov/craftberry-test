interface Props {
  text: string;
  onAnswer: (answer: string) => void;
}

export function QuizItem({ text, onAnswer }: Props) {
  return (
    <div
      className="border-[#5BC1ED] border-1 rounded-xl px-5 py-3 cursor-pointer hover:bg-[#C3EDFF] hover:border-black"
      onClick={() => onAnswer(text)}
    >
      {text}
    </div>
  );
}
