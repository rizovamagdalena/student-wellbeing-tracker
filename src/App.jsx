import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import MoodInput from "./components/MoodInput";
import AIResponse from "./components/AIResponse";
import MoodChart from "./components/MoodChart";

function App() {
    const [mood, setMood] = useState("");
    const [advice, setAdvice] = useState("");

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>🧠 Student Wellbeing Tracker</h1>
                <p style={styles.subtitle}>
                    HBSC-inspired tool for tracking mood, stress and wellbeing
                </p>

                <div style={styles.card}>
                    <MoodSelector setMood={setMood} />
                </div>

                <div style={styles.card}>
                    <MoodInput mood={mood} setAdvice={setAdvice} />
                </div>

                <div style={styles.card}>
                    <AIResponse advice={advice} />
                </div>

                <div style={styles.card}>
                    <MoodChart />
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        background: "#f4f6fb",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
    },
    container: {
        maxWidth: "700px",
        margin: "0 auto",
    },
    title: {
        marginBottom: "5px",
    },
    subtitle: {
        color: "#666",
        marginBottom: "20px",
    },
    card: {
        background: "white",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        marginBottom: "15px",
    },
};

export default App;