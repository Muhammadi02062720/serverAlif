const jsonServer = require("json-server");
const cors = require("cors")

const app = jsonServer.create();
const router = jsonServer.router("db.json");


app.use(cors())

app.db = router.db;

// You must apply the auth middleware before the router

app.use(router);
app.listen(3000, () => {
    console.log("localhost:3000")
});
