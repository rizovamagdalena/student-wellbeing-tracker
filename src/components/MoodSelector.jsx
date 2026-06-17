import { useState } from "react";

function MoodSelector({ setMood }) {
    const [selected, setSelected] = useState("");

    const moods = [
        "happy",
        "neutral",
        "sad",
        "stressed",
        "angry",
    ];

    const handleClick = (mood) => {
        setSelected(mood);
        setMood(mood);
    };

    return (
        <div>
            <h3>How do you feel today?</h3>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {moods.map((m) => (
                    <button
                        key={m}
                        onClick={() => handleClick(m)}
                        style={{
                            padding: "10px 12px",
                            borderRadius: "10px",
                            border: selected === m ? "2px solid #3f51b5" : "1px solid #ccc",
                            background: selected === m ? "#eef2ff" : "white",
                            cursor: "pointer",
                            fontWeight: selected === m ? "bold" : "normal",
                        }}
                    >
                        {m === "happy" && "😊 Happy"}
                        {m === "neutral" && "😐 Neutral"}
                        {m === "sad" && "😔 Sad"}
                        {m === "stressed" && "😰 Stressed"}
                        {m === "angry" && "😡 Angry"}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MoodSelector;