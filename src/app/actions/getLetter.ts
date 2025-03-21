'use server'
import prisma from "@/database";

export default async function GetLetter(link: string) {
    console.log('Teste')
    const data = await prisma.letter.findFirst({
        where: {
            linkCustom: link
        }
    })

    console.log(data)
    if (!data) {
        console.log('não tem nada')
        console.log(data ?? 'hello')
        return
    }

    return data ?? ''
}