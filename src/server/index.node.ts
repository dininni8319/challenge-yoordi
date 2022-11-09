import { createExampleOrder, randomIntFromInterval } from "./mockData";

const express = require("express");
var cors = require("cors");

const app = express();
const port = 4000;
app.use(cors());

/** Setup DB */
const Tingodb = require("tingodb")({ memStore: true }).Db;
const db = new Tingodb("./db", {});
const orderCollection = db.collection("orders");

app.get("/orders/", (req: any, result: any) => {
    orderCollection.find({ date: { $lt: Date.now() } }, (err: any, res: any) => {
        res.toArray((err2: any, res2: any) => result.send(res2));
    });
});

app.use(express.urlencoded())

app.get('/', (req: any, res: any) => {
    return res.send(() => 'helllo world');
  });

// app.post("/api/orders/",  (req: any, res: any) => {
//     return res.send('hello from the res')
     
     
    // let { id } = req.body; 
    // let { orderStatus } = req.body;    
    // result.send({msg: 'success'})
    // console.log(orderStatus, 'testing the completed');
   
    // orderCollection.updateOne({_id: id},{$set:{complete: orderStatus }}, (err: any, res: any) => {
    // let responseObject = {err: null, data: null, code: 0}
    // if (err) {
    //     responseObject.err = err;
    //     responseObject.data = null;
    //     responseObject.code = 422; 
    //     res.json(responseObject);
    // }
    //   res.json(responseObject);
    // });
// });


let index = 0;
const setupDb = () => {
    // Create Mock Data
    for (index; index < 100; index++) {
        orderCollection.insert(createExampleOrder(index, false, false));
    }
};

const start = async () => {
    setupDb();

    // Create Orders after 1.3 Sec
    setInterval(() => {
        orderCollection.insert(createExampleOrder(index, true, false));
        index++;
    }, 13000);
};

start();

/** Setup Express */
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});