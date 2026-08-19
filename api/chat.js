export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      reply: "Method not allowed",
    });
  }

  try {
    const { message } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        reply: "Please enter a question.",
      });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing");

      return res.status(500).json({
        reply: "AI configuration error. Please try again later.",
      });
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `
You are the friendly AI Assistant for CodeWithKhushi,
a Coding, AI and Robotics Academy.

Answer questions clearly, simply and in a beginner-friendly way.

You can help students with:
- Scratch
- C
- C++
- Python
- Java
- Web Development
- Artificial Intelligence
- Robotics
- Number System
- Programming basics
- School-level computer science

Keep answers easy to understand.
Use examples when helpful.
Be encouraging and friendly.
                `.trim(),
              },
            ],
          },

          contents: [
            {
              role: "user",
              parts: [
                {
                  text: message.trim(),
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini API Error:", data);

      return res.status(response.status).json({
        reply:
          data?.error?.message ||
          "Gemini AI se response nahi aa raha.",
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map((part) => part.text)
        .filter(Boolean)
        .join("\n") ||
      "Sorry, mujhe answer nahi mila.";

    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      reply: "AI se connection nahi ho pa raha.",
    });
  }
}