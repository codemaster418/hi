const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// API for calculation
app.post("/calculate", (req, res) => {
    const { expression } = req.body;

    try {
        // Evaluate safely
        let result = eval(expression);
        res.json({ result });
    } catch {
        res.json({ result: "Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
