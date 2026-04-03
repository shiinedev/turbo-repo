import express from "express";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/health", (req, res) => {
    res.json({ ok: true, message: "Api is running!" ,
        timestamp: new Date().toISOString(),
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});