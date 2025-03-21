'use client'

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Header from "@/components/Header";

type IFormInputs = {
    link: string;
    title: string;
    message: string;
}

const Texts = {
    step1: {
        title: 'Crie um link personalizado.',
        description: 'Dê sua cara ao link personalizado!'
    },
    step2: {
        title: 'Titulo e uma mensagem',
        description: 'escolha uma mensagem dedicatoria!'
    }
}

export default function CreateLetter() {
    const [step, setStep] = useState(1)
    const [customLink, setCustomLink] = useState<string>("")
    const [customTitle, setCustomTitle] = useState<string>("")
    const [customMessage, setCustomMessage] = useState<string>("")

    const navigation = useRouter()

    const { register, handleSubmit } = useForm()

    function onSubmit(data: IFormInputs) {
        if (step === 1) {
            setStep((prev) => prev += 1)
            return
        }
        const saveOnLocalStorage = {
            link: data.link,
            title: data.title,
            message: data.message
        }

        localStorage.setItem(`letter`, JSON.stringify(saveOnLocalStorage))
        navigation.push('/create-letter/quiz')
    }

    return (
        <div className="flex w-screen h-screen flex-col bg-zinc-950">
            <Header />
            <main className="bg-zinc-200 h-full px-24 py-12">
                <div className={`flex flex-row justify-between relative z-10`}> {/** Custom Link */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-zinc-800 font-bold text-3xl">{`${step === 1 ? Texts.step1.title : Texts.step2.title}`}</h1>
                        <h3 className="text-zinc-400">{`${step === 1 ? Texts.step1.description : Texts.step2.description}`}</h3>


                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 h-full">
                            <div className={`${step === 1 ? 'flex' : 'hidden'} flex-col gap-2`}>
                                <input {...register('link')} onChange={(e) => setCustomLink(e.target.value)} className="px-6 py-3 bg-zinc-300 rounded-xl outline-none placeholder:text-zinc-800 text-zinc-800" type="text" placeholder="Digite seu link" />
                            </div>

                            <div className={`${step === 2 ? 'flex' : 'hidden'} flex-col gap-2`}>
                                <input {...register('title')} onChange={(e) => setCustomTitle(e.target.value)} className="px-6 py-3 bg-zinc-300 rounded-xl outline-none placeholder:text-zinc-800 text-zinc-800" type="text" placeholder="Digite o titulo de sua carta" />

                                <input {...register('message')} onChange={(e) => setCustomMessage(e.target.value)} className="px-6 py-3 bg-zinc-300 rounded-xl outline-none placeholder:text-zinc-800 text-zinc-800" type="text" placeholder="Digite a mensagem de sua carta" />
                            </div>
                            <div className="flex gap-2 w-full">
                                <button className="w-1/2 px-6 py-3 border-pink-500 border-2 border-b-2 cursor-pointer rounded-xl outline-none text-zinc-800">Voltar</button>

                                <button type="submit" className="w-1/2 px-6 py-3 bg-pink-500 hover:bg-pink-400 disabled:bg-zinc-600 cursor-pointer rounded-xl outline-none duration-200">Avançar</button>
                            </div>
                        </form>
                    </div>

                    <div className="w-1/2 flex rounded-2xl bg-zinc-300 items-center flex-col text-center gap-2">
                        <div className="w-full">
                            <h2 className="w-full px-4 py-2 h-fit rounded-t-[8px] bg-zinc-400/50 text-zinc-800 font-semibold">https://www.lovely.com/letter/<strong className="text-pink-500 font-bold">{customLink.replaceAll(' ', '-')}</strong></h2>
                        </div>

                        <div>
                            <h2 className="text-zinc-800 font-bold">{`${customTitle ? customTitle : 'Titulo da pagina'}`}</h2>
                            <p className="text-zinc-800 ">{`${customMessage ? customMessage : 'Mensagem dedicatoria'}`}</p>
                        </div>
                    </div>
                </div >
            </main >
        </div >
    )
}