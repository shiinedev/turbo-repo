import express from "express";
import type { User } from "@repo/types/auth"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users: User[] = [
    {
        id: "1",
        username: "john_doe",
        email: "john@gmail.com"
    },
    {
        id: "2",
        username: "jane_smith",
        email: "jane@gmail.com"
    }
]

app.get("/health", (req, res) => {
    res.json({
        ok: true, message: "Api is running!",
        timestamp: new Date().toISOString(),
    });
});

app.get("/users", (req, res) => {
    res.json({
        message: "users fetched successfully",
        data: users,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});