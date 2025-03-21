'use client'

import QuizButton from "@/components/QuizButton"

import { useEffect, useState } from "react"

export default function Quiz() {
    const [isSelected, setIsSelected] = useState<string>('')

    return (
        <div className="flex h-screen w-screen bg-zinc-950 items-center flex-col justify-between">
            <h1 className="font-semibold text-3xl p-3">Quiz Amoroso</h1>

            <div className="flex flex-col gap-4 w-2xl items-center">
                <h2 className="text-2xl font-semibold">Em que data começamos a namorar?</h2>

                <QuizButton
                    selected={isSelected === 'A'}
                    text="hello"
                    option="A"
                    onClick={() => setIsSelected((prev) => (prev !== 'A' ? 'A' : ''))}
                />
                <QuizButton
                    selected={isSelected === 'B'}
                    text="hello"
                    option="B"
                    onClick={() => setIsSelected((prev) => (prev !== 'B' ? 'B' : ''))}
                />
                <QuizButton
                    selected={isSelected === 'C'}
                    text="hello"
                    option="C"
                    onClick={() => setIsSelected((prev) => (prev !== 'C' ? 'C' : ''))}
                />
                <QuizButton
                    selected={isSelected === 'D'}
                    text="hello"
                    option="D"
                    onClick={() => setIsSelected((prev) => (prev !== 'D' ? 'D' : ''))}
                />

                <button disabled={isSelected === ''} className="bg-rose-800 hover:bg-rose-700 disabled:bg-zinc-600 duration-200 cursor-pointer px-32 py-4 rounded-xl w-full">Avançar</button>
            </div>
            <footer>Teste</footer>
        </div>
    )
}