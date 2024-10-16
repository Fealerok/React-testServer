//server js

const express = require("express");
const app = express();
const PORT = 3030;
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST']
    }
});

let connectedUsers = 0;

const messages = require("../Backend/messages");

app.use(cors());
app.use(express.json());

//Ответ, который указывает браузеру разрешить доступ к ресурсу из любого источника:
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/get-data", async (req, res) => {
    try{
        res.json({data: "Информация с сервера"});
    }

    catch (err){
        console.log(err);

        res.send("Ошибка");
    }
});

io.on("connection", (socket) => {
    console.log("connected");

    connectedUsers += 1;

    socket.on("disconnect", () => {
        connectedUsers -= 1;
        io.emit("get-data", connectedUsers);
    });

    

    socket.on("send-username", (username) => {
        io.emit("get-messages", messages);
    })

    socket.on("get-data", () => {
        io.emit("get-data", connectedUsers);
    });
});





server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
