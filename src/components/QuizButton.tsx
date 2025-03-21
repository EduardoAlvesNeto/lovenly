'use client'

type QuizButtonProps = {
    selected: boolean;
    text: string;
    option: string
    onClick: () => void
}

export default function QuizButton({ selected, text, option, onClick }: QuizButtonProps) {

    return (
        <button onClick={onClick} className={`${selected ? 'bg-rose-300' : 'bg-zinc-800'} flex flex-row justify-start hover:bg-rose-800 duration-200 cursor-pointer px-4 py-4 rounded-xl w-full`} ><span className="bg-zinc-700 px-2 rounded-md">{option}</span><p className="px-4">{text}</p></button >
    );
}