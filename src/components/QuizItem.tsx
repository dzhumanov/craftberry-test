interface Props {
  text: string;
}

export function QuizItem({ text }: Props) {
  return (
    <div className="border-[#5BC1ED] border-1 rounded-xl px-5 py-3 cursor-pointer hover:bg-[#C3EDFF] hover:border-black">
      {text}
    </div>
  );
}
