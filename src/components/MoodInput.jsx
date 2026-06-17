import { useState } from "react";
import { askOpenAI } from "../services/openai";

function MoodInput({ mood, setAdvice }) {
    const [text, setText] = useState("");

    const handleAnalyze = async () => {
        if (!mood) return alert("Select mood first!");
        if (!text.trim()) return;

        const response = await askOpenAI(mood, text);
        setAdvice(response);

        const history = JSON.parse(localStorage.getItem("moods") || "[]");

        history.push({
            mood,
            message: text,
            date: new Date().toLocaleDateString(),
        });

        localStorage.setItem("moods", JSON.stringify(history));

        setText("");
    };

    return (
        <div>
            <h3>📝 Describe your day</h3>

            <textarea
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                }}
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                onClick={handleAnalyze}
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    background: "#3f51b5",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}
            >
                Get Support
            </button>
        </div>
    );
}

export default MoodInput;