"use strict";
/**
 * Created by user on 2018/7/2/002.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./lib/util");
const auto_1 = require("./lib/auto");
exports.Console2 = auto_1.Console2;
exports.Console = auto_1.Console2;
var util_2 = require("./lib/util");
exports.createChalkStyleLog = util_2.createChalkStyleLog;
exports.hasConsoleStream = util_2.hasConsoleStream;
exports.isForceColor = util_2.isForceColor;
exports.isSupportsColor = util_2.isSupportsColor;
exports.console = new auto_1.Console2();
exports.chalkByConsole = util_1.createFnChalkByConsole(exports.console);
exports.default = exports.console;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgscUNBQW9EO0FBS3BELHFDQUFzQztBQUs3QixtQkFMQSxlQUFRLENBS0E7QUFBYyxrQkFMdEIsZUFBUSxDQUtxQjtBQUZ0QyxtQ0FBa0c7QUFBekYscUNBQUEsbUJBQW1CLENBQUE7QUFBRSxrQ0FBQSxnQkFBZ0IsQ0FBQTtBQUFFLDhCQUFBLFlBQVksQ0FBQTtBQUFFLGlDQUFBLGVBQWUsQ0FBQTtBQUdoRSxRQUFBLE9BQU8sR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0FBRXpCLFFBQUEsY0FBYyxHQUFHLDZCQUFzQixDQUFDLGVBQU8sQ0FBQyxDQUFDO0FBRTlELGtCQUFlLGVBQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB1c2VyIG9uIDIwMTgvNy8yLzAwMi5cbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVGbkNoYWxrQnlDb25zb2xlIH0gZnJvbSAnLi9saWIvdXRpbCc7XG5cbmV4cG9ydCB7IEluc3BlY3RPcHRpb25zIH0gZnJvbSAndXRpbCc7XG5leHBvcnQgeyBDaGFsa09wdGlvbnMgfSBmcm9tICdjaGFsayc7XG5cbmltcG9ydCB7IENvbnNvbGUyIH0gZnJvbSAnLi9saWIvYXV0byc7XG5leHBvcnQgeyBJT3B0aW9ucyB9IGZyb20gJy4vbGliL3ZhbCc7XG5cbmV4cG9ydCB7IGNyZWF0ZUNoYWxrU3R5bGVMb2csIGhhc0NvbnNvbGVTdHJlYW0sIGlzRm9yY2VDb2xvciwgaXNTdXBwb3J0c0NvbG9yIH0gZnJvbSAnLi9saWIvdXRpbCc7XG5cbmV4cG9ydCB7IENvbnNvbGUyLCBDb25zb2xlMiBhcyBDb25zb2xlIH1cbmV4cG9ydCBjb25zdCBjb25zb2xlID0gbmV3IENvbnNvbGUyKCk7XG5cbmV4cG9ydCBjb25zdCBjaGFsa0J5Q29uc29sZSA9IGNyZWF0ZUZuQ2hhbGtCeUNvbnNvbGUoY29uc29sZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnNvbGU7XG4iXX0=