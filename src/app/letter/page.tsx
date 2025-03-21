'use client'

import { useRouter } from "next/navigation"

export default function Template() {
    const navigation = useRouter()

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-zinc-950">
            <button onClick={() => navigation.push('/template/quiz')} className="bg-rose-500 hover:bg-rose-800 cursor-pointer duration-500 py-4 px-8 rounded-xl">💌 Clique aqui</button>
        </div>
    )
}