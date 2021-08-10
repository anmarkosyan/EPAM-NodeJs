"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = () => {
    const app = app_1.getApp();
    const port = 5000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};
exports.default = server();
