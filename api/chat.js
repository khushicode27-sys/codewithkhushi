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
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },

        body: JSON.stringify({
          model: "llama-3.1-8b-instant",

          messages: [
            {
              role: "system",
              content:
                "You are the friendly AI Assistant for CodeWithKhushi, a Coding, AI and Robotics Academy. Answer questions clearly and simply. Help students with Coding, C, C++, Python, Java, Web Development, Artificial Intelligence, Robotics and Scratch. Keep explanations beginner-friendly.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API Error:", data);

      return res.status(response.status).json({
        reply:
          data?.error?.message ||
          "AI service se response nahi aa raha.",
      });
    }

    const reply =
      data?.choices?.[0]?.message?.content ||
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