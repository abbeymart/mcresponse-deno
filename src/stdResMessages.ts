/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: @mconnect/res-messages, response-messages | settings, default values
 */

import { Status, StatusText } from "./netStatusCode";

export interface ResponseMessage {
    code: string;
    message: string;
    value: any;
    resCode?: number;
    resMessage?: string;
}

interface MessageParam {
    [key: string]: ResponseMessage;
}

export interface MessageObject {
    [key: string]: string;
}

export interface ResponseMessageOptions {
    msgType?: string;
    message?: string;
    value?: any;
}

// message options => code, resCode, reMessage, message, value
export const stdResMessages: MessageParam = {
    paramsError  : {
        code      : "paramsError",
        resCode   : Status.NotAcceptable,
        resMessage: StatusText.get(Status.NotAcceptable) || "Not Acceptable",
        message   : "Parameters checking error",
        value     : "",
    },
    checkError   : {
        code      : "paramsError",
        resCode   : Status.NotAcceptable,
        resMessage: StatusText.get(Status.NotAcceptable) || "Not Acceptable",
        message   : "Parameters checking error",
        value     : "",
    },
    connectError : {
        code      : "connectionError",
        resCode   : Status.NetworkAuthenticationRequired,
        resMessage: StatusText.get(Status.NetworkAuthenticationRequired) || "Network Auth Required",
        message   : "Connection error",
        value     : "",
    },
    validateError: {
        code      : "paramsError",
        resCode   : Status.NotAcceptable,
        resMessage: StatusText.get(Status.NotAcceptable) || "Not Acceptable",
        message   : "Validation error for inputs parameters",
        value     : "",
    },
    tokenExpired : {
        code      : "tokenExpired",
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Unauthorized. Token / Access-key has expired. Please login again",
        value     : "",
    },
    unAuthorized : {
        code      : "unAuthorized",
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Unauthorised Action or Task",
        value     : "",
    },
    notFound     : {
        code      : "notFound",
        resCode   : Status.NotFound,
        resMessage: StatusText.get(Status.NotFound) || "Not Found",
        message   : "Requested information not found",
        value     : "",
    },
    success      : {
        code      : "success",
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Request completed successfully",
        value     : "",
    },
    removeDenied : {
        code      : "removeDenied",
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Remove action/task denied/unauthorised",
        value     : "",
    },
    removeError  : {
        code      : "removeError",
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Error removing/deleting information, retry or contact system-admin",
        value     : "",
    },
    removed      : {
        code      : "removed",
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Record(s) deleted/removed successfully",
        value     : "",
    },
    subItems     : {
        code      : "subItems",
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Record includes sub-items, which must be removed first",
        value     : "",
    },
    duplicateRec : {
        code      : "duplicate",
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Duplicate record exists",
        value     : "",
    },
    updated      : {
        code      : "updated",
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Information update action completed successfully",
        value     : "",
    },
    updateError  : {
        code      : "updateError",
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Error updating information/record(s)",
        value     : "",
    },
    updateDenied : {
        code      : "updateDenied",
        resCode   : Status.Unauthorized,
        resMessage: StatusText.get(Status.Unauthorized) || "Not Authorized",
        message   : "Update action/task not authorised",
        value     : "",
    },
    inserted     : {
        code      : "inserted",
        resCode   : Status.OK,
        resMessage: StatusText.get(Status.OK) || "OK",
        message   : "Information/record(s) inserted/created successfully",
        value     : "",
    },
    insertError  : {
        code      : "insertError",
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Error inserting/creating new information/record",
        value     : "",
    },
    recExist     : {
        code      : "exists",
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Document/record exists",
        value     : "",
    },
    unknown      : {
        code      : "unknown",
        resCode   : Status.UnprocessableEntity,
        resMessage: StatusText.get(Status.UnprocessableEntity) || "Not Processed",
        message   : "Unspecified response/error message",
        value     : "",
    },
};
