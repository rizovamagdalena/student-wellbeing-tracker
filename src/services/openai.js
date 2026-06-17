import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

export async function askOpenAI(mood, message) {
    const prompt = `
You are a mental wellbeing assistant for students.

The student feels: ${mood}

Their message:
${message}

Give:
1. short encouragement
2. one healthy coping advice
3. one small challenge

Keep it under 80 words.
Be simple and supportive.
`;

    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content;
}