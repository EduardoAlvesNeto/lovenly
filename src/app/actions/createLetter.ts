'use server'

import prisma from "@/database"

interface CreateLetterData {
    letter: {
        link: string;
        title: string;
        message: string;
    }
    question1: {
        question: string;
        answerA: string;
        answerB: string;
        answerC: string;
        answerD: string;
    }
    question2: {
        question: string;
        answerA: string;
        answerB: string;
        answerC: string;
        answerD: string;
    }
    question3: {
        question: string;
        answerA: string;
        answerB: string;
        answerC: string;
        answerD: string;
    }
}

export default async function CreateLetterAction(data: CreateLetterData) {
    const createdLetter = await prisma.letter.create({
        data: {
            title: data.letter.title,
            message: data.letter.message,
            date: '12/12/2024',
            linkCustom: data.letter.link
        }
    })

    // Criando as perguntas uma por uma para obter os IDs
    const questions = await Promise.all([
        prisma.question.create({ data: { letter_id: createdLetter.id, title: data.question1.question } }),
        prisma.question.create({ data: { letter_id: createdLetter.id, title: data.question2.question } }),
        prisma.question.create({ data: { letter_id: createdLetter.id, title: data.question3.question } })
    ]);

    // Criando as respostas com base nos IDs das perguntas
    await prisma.answer.createMany({
        data: [
            { question_id: questions[0].id, title: data.question1.answerA },
            { question_id: questions[0].id, title: data.question1.answerB },
            { question_id: questions[0].id, title: data.question1.answerC },
            { question_id: questions[0].id, title: data.question1.answerD },
            { question_id: questions[1].id, title: data.question2.answerA },
            { question_id: questions[1].id, title: data.question2.answerB },
            { question_id: questions[1].id, title: data.question2.answerC },
            { question_id: questions[1].id, title: data.question2.answerD },
            { question_id: questions[2].id, title: data.question3.answerA },
            { question_id: questions[2].id, title: data.question3.answerB },
            { question_id: questions[2].id, title: data.question3.answerC },
            { question_id: questions[2].id, title: data.question3.answerD }
        ]
    });

    console.log("Carta, perguntas e respostas criadas com sucesso!");
}
