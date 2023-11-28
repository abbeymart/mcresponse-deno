/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11, 2023-11-25
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: @mconnect/res-messages, response-messages | settings, default values
 */

import { Status, StatusText } from "./netStatusCode.ts";

export type ValueType =
    | Record<string, unknown>
    | Array<Record<string, unknown>>
    | string
    | number
    | Array<string>
    | Array<number>
    | Date
    | Array<Date>
    | boolean
    | Array<boolean>
    | { [key: string]: ValueType }
    | unknown;


export interface ResponseMessage<T extends ValueType> {
    code: string;
    message: string;
    value: T;
    resCode: number;
    resMessage: string;
}

interface MessageParam<T extends ValueType> {
    [key: string]: ResponseMessage<T>;
}

export interface MessageObject {
    [key: string]: string;
}

export interface ResponseMessageOptions<T extends ValueType> {
    msgType?: string;
    message?: string;
    value?: T;
}

export enum MessageCodes {
    paramsError = "paramsError",
    checkError = "checkError",
    connectError = "connectError",
    validateError = "validateError",
    tokenExpired = "tokenExpired",
    unAuthorizedText = "unAuthorized",
    notFoundText = "notFound",
    success = "success",
    removeDenied = "removeDenied",
    removeError = "removeError",
    removed = "removed",
    deleted = "deleted",
    subItems = "subItems",
    duplicate = "duplicate",
    updated = "updated",
    updateError = "updateError",
    updateDenied = "updateDenied",
    inserted = "inserted",
    insertError = "insertError",
    exists = "exists",
    unknown = "unknown",
}

// message options => code, resCode, reMessage, message, value
export const stdResMessages: MessageParam<ValueType> = {
    paramsError  : {
        code      : MessageCodes.paramsError,
        resCode   : Status.NotAcceptable,
        resMessage: StatusText.get(Status.NotAcceptable) || "Not Acceptable",
        message   : "Parameters checking error",
        value     : {},
    },
    checkError   : {
        code      : MessageCodes.paramsError,
        resCode   : Status.NotAcceptable,
        resMessage: StatusText.get(Status.NotAcceptable) || "Not Acceptable",
        message   : "Parameters checking error",
        value     : {},
    },
    connectError : {
        code      : MessageCodes.connectError,
        resCode   : Status.NetworkAuthenticationRequired,
        resMessage: StatusText.get(Status.NetworkAuthenticationRequired) || "Network Auth Required",
        message   : "Connection error",
        value     : {},
    },
    validateError: {
        code      : MessageCodes.paramsError,
        resCode   : Status.NotAcceptable,
        resMessage: StatusText.get(Status.NotAcceptable) || "Not Acceptable",
        message   : "Validation error for inputs parameters",
        value     : {},
    },
    tokenExpired : {
        code      : MessageCodes.tokenExpired,
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Unauthorized. Token / Access-key has expired. Please login again",
        value     : {},
    },
    unAuthorized : {
        code      : MessageCodes.unAuthorizedText,
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Unauthorised Action or Task",
        value     : {},
    },
    notFound     : {
        code      : MessageCodes.notFoundText,
        resCode   : Status.NotFound,
        resMessage: StatusText.get(Status.NotFound) || "Not Found",
        message   : "Requested information not found",
        value     : {},
    },
    success      : {
        code      : MessageCodes.success,
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Request completed successfully",
        value     : {},
    },
    removeDenied : {
        code      : MessageCodes.removeDenied,
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Remove action/task denied/unauthorised",
        value     : {},
    },
    removeError  : {
        code      : MessageCodes.removeError,
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Error removing/deleting information, retry or contact system-admin",
        value     : {},
    },
    removed      : {
        code      : MessageCodes.removed,
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Record(s) deleted/removed successfully",
        value     : {},
    },
    subItems     : {
        code      : MessageCodes.subItems,
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Record includes sub-items, which must be removed first",
        value     : {},
    },
    duplicateRec : {
        code      : MessageCodes.duplicate,
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Duplicate record exists",
        value     : {},
    },
    updated      : {
        code      : MessageCodes.updated,
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Information update action completed successfully",
        value     : {},
    },
    updateError  : {
        code      : MessageCodes.updateError,
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Error updating information/record(s)",
        value     : {},
    },
    updateDenied : {
        code      : MessageCodes.updateDenied,
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Update action/task not authorised",
        value     : {},
    },
    inserted     : {
        code      : MessageCodes.inserted,
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Information/record(s) inserted/created successfully",
        value     : {},
    },
    insertError  : {
        code      : MessageCodes.insertError,
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Error inserting/creating new information/record",
        value     : {},
    },
    recExist     : {
        code      : MessageCodes.exists,
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Document/record exists",
        value     : {},
    },
    unknown      : {
        code      : MessageCodes.unknown,
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Unspecified response/error message",
        value     : {},
    },
};
