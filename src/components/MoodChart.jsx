import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function MoodChart() {
    const history = JSON.parse(localStorage.getItem("moods") || "[]");

    const counts = {};

    history.forEach((item) => {
        counts[item.mood] = (counts[item.mood] || 0) + 1;
    });

    const data = Object.keys(counts).map((key) => ({
        mood: key,
        count: counts[key],
    }));

    return (
        <div style={{ marginTop: 30 }}>
            <h3>Mood Overview 📊</h3>

            {data.length === 0 ? (
                <p>No data yet</p>
            ) : (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="mood" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}

export default MoodChart;