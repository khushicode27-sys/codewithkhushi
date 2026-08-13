export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const body = await request.json();
    const message = body?.message;

    if (!message?.trim()) {
      return Response.json(
        { reply: "Please enter a question." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.GROQ_API_KEY}`,
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

      return Response.json(
        {
          reply:
            data?.error?.message ||
            "AI service se response nahi aa raha.",
        },
        { status: response.status }
      );
    }

    const reply =
      data?.choices?.[0]?.message?.content ||
      "Sorry, mujhe answer nahi mila.";

    return Response.json({ reply });
  } catch (error) {
    console.error("AI ERROR:", error);

    return Response.json(
      { reply: "AI se connection nahi ho pa raha." },
      { status: 500 }
    );
  }
}
