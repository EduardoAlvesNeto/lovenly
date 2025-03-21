"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"
import { Musicnote, MessageQuestion, Lovely, CloseCircle, TickCircle } from "iconsax-react";

import Header from "@/components/Header";
import Hero from "../../public/hero.png";
import Logo from '../../public/logo.png'

export default function Home() {
    const navigation = useRouter()

    return (
        <>
            <Header />
            <main className="bg-zinc-200 w-full flex flex-col gap-24 px-24 py-12">
                <section className="flex flex-col gap-4 justify-start">
                    <h1 className="text-zinc-800 font-bold text-6xl" >Transforme <strong className="text-pink-600 font-bold">memórias</strong> <br /> em uma <strong className="text-pink-600 font-bold">experiencia.</strong></h1>
                    <p className="text-zinc-400 text-">Personalize sua carta digital da maneria que preferir <br />transformando suas memorias em experiencias únicas.</p>
                    <button onClick={() => navigation.push('/create-letter')} className="border-of bg-pink-600 px-8 py-4 rounded-[12px] max-w-xs hover:bg-pink-500 duration-400  cursor-pointer outline-2 outline-offset-3 outline-pink-500">Crie uma memória</button>
                </section>

                <section className="w-full flex justify-center">
                    <div className="flex flex-row justify-center gap-8 w-6/7 px-4 py-4 rounded-2xl bg-zinc-300/30">
                        <div className=" duration-500 cursor-pointer bg-zinc-400/5 hover:bg-zinc-400/20  px-1 py-8 max-w-fit flex flex-col justify-center items-center gap-3 rounded-2xl">
                            <div className="bg-zinc-200 px-2 py-2 rounded-xl">
                                <Lovely className="fill-pink-600" size={40} />
                            </div>
                            <p className="w-2/3 text-sm text-center text-zinc-800 group-hover:text-zinc-400">Mensagem personalizada</p>
                        </div>

                        <div className="duration-500 cursor-pointer bg-zinc-400/5 hover:bg-zinc-400/20  px-1 py-8 max-w-fit flex flex-col justify-center items-center gap-3 rounded-2xl">
                            <div className="bg-zinc-200 px-2 py-2 rounded-xl">
                                <MessageQuestion className="fill-pink-600" size={40} />
                            </div>
                            <p className="w-2/3 text-sm text-center text-zinc-800 group-hover:text-zinc-400">Crie um quiz personalizado</p>
                        </div>

                        <div className="w-1/3 duration-500 cursor-pointer bg-zinc-400/5 hover:bg-zinc-400/20  px-1 py-8 max-w-fit flex flex-col justify-center items-center gap-3 rounded-2xl">
                            <div className="bg-zinc-200 px-2 py-2 rounded-xl">
                                <Musicnote className="fill-pink-600 stroke-pink-600" size={40} />
                            </div>
                            <p className="w-2/3 text-sm text-center text-zinc-800 group-hover:text-zinc-400">Escolha uma musica aaaa</p>
                        </div>

                    </div>
                </section>

                <section className="flex flex-col gap-4 items-center w-full">
                    <div className="flex flex-col items-center">
                        <h2 className="text-zinc-800 font-semibold text-2xl">Planos</h2>
                        <p className="text-zinc-400">Escolha o plano que mais combina com vocês</p>
                    </div>

                    <div className="flex flex-row justify-center gap-12 w-full h-full">
                        <div className="gap-6 h-full flex flex-col items-center py-2 px-2 w-1/3 border-zinc-400 border-2 rounded-2xl">
                            <h2 className="text-zinc-800 font-semibold">Plano básico</h2>

                            <Image
                                src={Logo}
                                width={150}
                                height={150}
                                alt='logo'
                            />

                            <div>
                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">4 Imagens</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">QR code personalizado</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Mensagem personalizada</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Link personalizado</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <CloseCircle size={36} className="fill-red-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Sem musica</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <CloseCircle size={36} className="fill-red-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Sem quiz</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-zinc-800 font-bold text-3xl">R$ 19,90</h3>
                                <p className="text-zinc-400 text-center text-xs">Pague apenas <br />uma vez</p>
                            </div>

                            <button className=" border-2 border-pink-500 text-pink-500 font-bold font-xl px-12 py-2 rounded-2xl">Selecione plano</button>

                        </div>
                        <div className="gap-6 h-full flex flex-col items-center py-2 px-2 w-1/3 border-pink-500 border-3 rounded-2xl">
                            <h2 className="text-zinc-800 font-semibold">Plano Premium</h2>

                            <Image
                                src={Logo}
                                width={150}
                                height={150}
                                alt='logo'
                            />

                            <div>
                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">7 Imagens</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">QR code personalizado</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Mensagem personalizada</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Link personalizado</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Musica ambiente</p>
                                </div>

                                <div className="flex flex-row items-center gap-2">
                                    <TickCircle size={36} className="fill-emerald-700 stroke-zinc-200" />
                                    <p className="text-zinc-800">Quiz personalizavel</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-zinc-800 font-bold text-3xl">R$ 24,90</h3>
                                <p className="text-zinc-400 text-center text-xs">Pague apenas <br />uma vez</p>
                            </div>

                            <button className="drop-shadow-lg bg-pink-500 hover:bg-pink-400 cursor-pointer text-zinc-200 font-bold font-xl px-12 py-2 rounded-2xl">Selecione plano</button>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
