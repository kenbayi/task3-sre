import express from "express";
import cors from "cors";
import "./db/mongoose.js";
import todoRouter from "./routes/todo.js";
import userRouter from "./routes/user.js";
import { wakeUpDyno } from "./wakeUpDyno.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/todos', todoRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to todo-list API!')
})

const port = process.env.PORT;
const DYNO_URL = "https://rd-todo-list.herokuapp.com/";

app.listen(port, () => {
    console.log('Server is up on port ' + port);
    wakeUpDyno(DYNO_URL);
});

export default app;