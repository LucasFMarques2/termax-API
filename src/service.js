require("express-async-errors");
const express = require("express");
const cors = require("cors")
const migratinsRun = require("./database/sqlite/migrations")
const AppError = require("./utils/AppError")
const app = express();
const uploadConfig = require("./configs/upload")

const router = require("./routes")

migratinsRun();
app.use(cors())

app.use(express.json());
app.use(router);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use((error,req,res,next) =>{
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            status: "Error",
            message: error.message
        })
    }

    console.error(error);

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})


const PORT = 3333;
app.listen(PORT, () => {
    console.log(`Serviço rodando no ${PORT}`);
});
