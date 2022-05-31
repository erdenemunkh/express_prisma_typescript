"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./../controllers/user.controller");
const router = (0, express_1.Router)();
const registerRouter = (app) => {
    router.post("/", user_controller_1.addUser);
    router.get("/", user_controller_1.getUsers);
    router.get("/:email", user_controller_1.getUser);
    router.put("/", user_controller_1.updateUser);
    router.delete("/:id", user_controller_1.deletUser);
    app.use("/api/users", router);
};
exports.registerRouter = registerRouter;
//# sourceMappingURL=user.routes.js.map