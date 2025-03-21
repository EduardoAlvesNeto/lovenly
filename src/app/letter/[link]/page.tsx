'use client'

import GetLetter from "@/app/actions/getLetter";
import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function Page() {
    const [myLetter, setMyLetter] = useState({})
    const navigation = useRouter()
    const { link } = useParams<{ link: string }>();

    async function manageLetter() {
        const letter = await GetLetter(link)

        return letter?.message
    }

    useEffect(() => {
        async function manageLetter() {
            const letter = await GetLetter(link)

            if (!letter) return navigation.replace('/')

            setMyLetter({
                title: letter.title,
                message: letter.message
            })
        }

        manageLetter()
    }, [])

    return (
        <main className="flex gap-3 w-full h-full flex-col py-4 items-center bg-zinc-950">
            <h1 className="text-zinc-50 font-bold text-2xl">{myLetter.title}</h1>
            <div className="bg-zinc-800 w-1/3 h-[500px] rounded-2xl"></div>
            <h2 className="text-zinc-50 font-bold text-xl">{myLetter.message}</h2>
        </main>
    );
}