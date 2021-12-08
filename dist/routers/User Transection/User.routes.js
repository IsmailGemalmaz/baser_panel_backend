"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../../controller/UserController");
var router = express_1.Router();
var user = new UserController_1.Users;
router.get('/get', user.getUsers);
router.post('/register', user.createUsers);
router.get('/getİd/:id', user.getUser);
router.put('/update/:id', user.updateUser);
router.delete('/delete/:id', user.deleteUser);
router.post('/login', user.loginUser);
exports.default = router;
