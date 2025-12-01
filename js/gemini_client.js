const SECRET_TOKEN = "NTU_SECRET_2025_ABC";

async function askGemini(promptText) {
    const res = await fetch("https://thuexemaynguyentu.com/gemini_proxy_simple.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-SECRET-TOKEN": SECRET_TOKEN
        },
        body: JSON.stringify({ prompt: promptText })
    });

    const data = await res.json();

    if (data.error) {
        return "Lỗi server: " + data.error;
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || JSON.stringify(data);
}
