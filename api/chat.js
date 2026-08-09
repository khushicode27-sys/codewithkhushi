export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({ reply: "Please enter a question." });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        instructions:
          "You are the friendly AI Assistant for CodeWithKhushi, a Coding, AI and Robotics Academy. Answer questions clearly and helpfully. Focus especially on coding, AI, robotics, courses and learning.",
        input: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return res.status(response.status).json({
        reply: "AI service se response nahi aa raha.",
      });
    }

    return res.status(200).json({
      reply: data.output_text || "Sorry, mujhe answer nahi mila.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      reply: "AI se connection nahi ho pa raha.",
    });
  }
}