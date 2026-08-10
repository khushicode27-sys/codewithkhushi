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

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are the friendly AI Assistant for CodeWithKhushi.

You help students with:
- Coding
- C & C++
- Python
- Java
- Web Development
- Artificial Intelligence
- Robotics
- Scratch

Explain concepts in a simple, friendly and beginner-friendly way.

User Question:
${message}`,
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
        reply: "AI service se response nahi aa raha.",
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({
      reply: reply || "Sorry, mujhe answer nahi mila.",
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      reply: "AI se connection nahi ho pa raha.",
    });
  }
}