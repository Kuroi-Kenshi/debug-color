/**
 * Created by user on 2018/6/29/029.
 */
import { IFillProperty, IValueOfArray } from './types';
import { IMethods } from './types/CrossConsole';
export declare const methods_stdout: readonly ["debug", "info", "log"];
export declare const methods_output: readonly ["table", "dir", "dirxml"];
export declare const methods_other: readonly ["clear", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "count"];
export declare const methods_inspector: readonly ["profile", "profileEnd", "timeStamp", "markTimeline", "timeline", "timelineEnd"];
export declare const methods_stderr: readonly ["assert", "error", "trace", "warn", "exception"];
export declare const methods: ("debug" | "error" | "info" | "log" | "trace" | "warn" | "exception" | "assert" | "clear" | "count" | "dir" | "dirxml" | "group" | "groupCollapsed" | "groupEnd" | "table" | "time" | "timeEnd" | "timeStamp" | "profile" | "profileEnd" | "markTimeline" | "timeline" | "timelineEnd")[];
export declare function fillProperty<T extends object = Console, P extends string[] = IMethods[], U extends (...argv: any) => any = (...argv: any) => void>(target?: T, ls?: P, fn?: U): T & IFillProperty<T, IValueOfArray<P>, U>;
export default fillProperty;
