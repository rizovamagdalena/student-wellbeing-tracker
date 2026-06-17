function AIResponse({ advice }) {
    return (
        <div>
            <h3>💬 AI Support</h3>

            <div
                style={{
                    background: "#f0f4ff",
                    padding: "12px",
                    borderRadius: "10px",
                    minHeight: "60px",
                    whiteSpace: "pre-line",
                }}
            >
                {advice || "Select mood and write message to get support..."}
            </div>
        </div>
    );
}

export default AIResponse;