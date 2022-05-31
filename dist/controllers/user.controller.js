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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletUser = exports.updateUser = exports.getUser = exports.getUsers = exports.addUser = void 0;
const client_1 = require("@prisma/client");
const ApiResult_1 = require("../classes/ApiResult");
const prisma = new client_1.PrismaClient();
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name } = req.body;
        const result = yield prisma.user.create({
            data: {
                name,
                email,
            },
        });
        res.status(200).send(new ApiResult_1.ApiResult(true, result, null));
    }
    catch (error) {
        res.status(200).send(new ApiResult_1.ApiResult(false, [], error));
    }
});
exports.addUser = addUser;
const getUsers = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield prisma.user.findMany();
        res.status(200).send(new ApiResult_1.ApiResult(true, allUsers, null));
    }
    catch (error) {
        res.status(200).send(new ApiResult_1.ApiResult(false, [], error));
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const user = yield prisma.user.findUnique({
            where: {
                email,
            },
        });
        res.status(200).send(new ApiResult_1.ApiResult(true, user, null));
    }
    catch (error) {
        res.status(200).send(new ApiResult_1.ApiResult(false, [], error));
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name } = req.body;
        const user = yield prisma.user.update({
            where: {
                email,
            },
            data: {
                name,
            },
        });
        res.status(200).send(new ApiResult_1.ApiResult(true, user, null));
    }
    catch (error) {
        res.status(200).send(new ApiResult_1.ApiResult(false, [], error));
    }
});
exports.updateUser = updateUser;
const deletUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield prisma.user.delete({
            where: {
                id,
            },
        });
        res.status(200).send(new ApiResult_1.ApiResult(true, user, null));
    }
    catch (error) {
        res.status(200).send(new ApiResult_1.ApiResult(false, [], error));
    }
});
exports.deletUser = deletUser;
//# sourceMappingURL=user.controller.js.map