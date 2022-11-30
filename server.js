const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/build"));

// if (process.env.NODE_ENV === "production") {
//     app.enable("trust proxy");
//     app.use((req, res, next) => {
//         req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
//     });
// }

app.get("*", (req, res) => {
    return res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => console.log("server working"));
