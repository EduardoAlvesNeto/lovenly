'use client'

import Header from "@/components/Header";

import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import CreateLetterAction from "@/app/actions/createLetter";

interface IFormInputs {
    question: string;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
}

export default function CreateCard() {
    const [quizNumber, setQuizNumber] = useState(1)

    const navigation = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        watch
    } = useForm()

    const formValues = watch();
    const allFieldsFilled = Object.values(formValues).every(value => value?.trim() !== "");

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        const saveOnLocalStorage = {
            question: data.question,
            answerA: data.answerA,
            answerB: data.answerB,
            answerC: data.answerC,
            answerD: data.answerD,
        }

        localStorage.setItem(`question${quizNumber}`, JSON.stringify(saveOnLocalStorage))

        reset()

        if (quizNumber != 3) {
            setQuizNumber((prev) => prev += 1)
        } else {
            const letter = JSON.parse(localStorage.getItem('letter'))
            const question1 = JSON.parse(localStorage.getItem('question1'))
            const question2 = JSON.parse(localStorage.getItem('question2'))
            const question3 = JSON.parse(localStorage.getItem('question3'))

            CreateLetterAction({
                letter,
                question1,
                question2,
                question3
            })

            navigation.replace('/')
        }
    }

    return (
        <div className="flex w-screen h-screen flex-col bg-zinc-950">
            <Header />
            <main className="flex flex-col w-1/2 gap-2 px-24 relative z-10">
                <h1 className="font-bold text-3xl">Crie um quiz</h1>
                <p>Pergunta numero: {quizNumber}</p>

                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("question")} className="px-6 py-3 bg-zinc-900  rounded-xl outline-none" type="text" placeholder="Digite a pergunta" />

                    <input {...register("answerA")} className="px-6 py-3 bg-zinc-900  rounded-xl outline-none" type="text" placeholder="Altenativa A" />

                    <input {...register("answerB")} className="px-6 py-3 bg-zinc-900  rounded-xl outline-none" type="text" placeholder="Altenativa B" />

                    <input {...register("answerC")} className="px-6 py-3 bg-zinc-900  rounded-xl outline-none" type="text" placeholder="Altenativa C" />

                    <input {...register("answerD")} className="px-6 py-3 bg-zinc-900  rounded-xl outline-none" type="text" placeholder="Altenativa D" />

                    <div className="flex gap-2 w-full">
                        <button onClick={(event) => {
                            if (quizNumber === 1) {
                                navigation.back()
                            }

                            event.preventDefault();
                            setQuizNumber((prev) => Math.max(prev - 1, 1));
                        }} className="w-1/2 px-6 py-3 border-rose-900 border-2 border-b-2 cursor-pointer rounded-xl outline-none">{quizNumber === 1 ? 'Cancelar' : 'Voltar'}</button>
                        <button disabled={!allFieldsFilled} type="submit" className="w-1/2 px-6 py-3 bg-rose-800 hover:bg-rose-700 disabled:bg-zinc-600 cursor-pointer rounded-xl outline-none">Avançar</button>
                    </div>
                </form>
            </main>
        </div>
    )
}