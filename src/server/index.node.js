"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mockData_1 = require("./mockData");
var express = require("express");
var cors = require("cors");
var app = express();
var port = 4000;
app.use(cors());
/** Setup DB */
var Tingodb = require("tingodb")({ memStore: true }).Db;
var db = new Tingodb("./db", {});
var orderCollection = db.collection("orders");
app.get("/orders/", function (req, result) {
    orderCollection.find({ date: { $lt: Date.now() } }, function (err, res) {
        res.toArray(function (err2, res2) { return result.send(res2); });
    });
});
app.use(express.urlencoded());
app.use(express.json());
app.post('/orders', function (req, res) { return res.send('helllo world'); });
app.post("/api/orders/", function (req, res) {
    res.send('hello from the res');
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
});
var index = 0;
var setupDb = function () {
    // Create Mock Data
    for (index; index < 100; index++) {
        orderCollection.insert((0, mockData_1.createExampleOrder)(index, false, false));
    }
};
var start = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setupDb();
        // Create Orders after 1.3 Sec
        setInterval(function () {
            orderCollection.insert((0, mockData_1.createExampleOrder)(index, true, false));
            index++;
        }, 13000);
        return [2 /*return*/];
    });
}); };
start();
/** Setup Express */
app.listen(port, function () {
    console.log("App listening on port ".concat(port));
});
