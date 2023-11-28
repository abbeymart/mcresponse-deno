/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11, 2023-11-25
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: @mconnect/res-messages, response-messages | utility functions
 */

import {
  ValueType,
  MessageObject,
  ResponseMessage,
  ResponseMessageOptions,
  stdResMessages,
} from "./stdResMessages.ts";

function msgFunc<T extends ValueType>(res: {
  code: string;
  resCode: number;
  resMessage: string;
  message: string;
  value: T | ValueType;
}): ResponseMessage<T> {
  return {
    code: res.code,
    message: res.message,
    value: res.value as T,
    resCode: res.resCode,
    resMessage: res.resMessage,
  };
}

export function getResMessage<T extends ValueType>(
  msgType: string,
  options?: ResponseMessageOptions<T>,
): ResponseMessage<T> {
  let value: T | ValueType,
    code: string,
    resCode: number,
    resMessage: string,
    message: string;

  const messageType = msgType || options?.msgType || "unknown";

  const val = stdResMessages[messageType];
  if (val) {
    code = val.code;
    value = options && options.value ? options.value : val.value;
    resCode = val.resCode;
    resMessage = val.resMessage;
    message = options && options.message ? `${options.message}` : val.message;
  } else {
    // use stdResMessages default response
    const val = stdResMessages["unknown"];
    value = options && options.value ? options.value : val.value;
    code = messageType || val.code;
    resCode = val.resCode;
    resMessage = val.resMessage;
    message = options && options.message ? `${options.message}` : val.message;
  }
  return msgFunc<T>({ code, message, value, resCode, resMessage });
}

export function getParamsMessage<T extends ValueType>(
  msgObject: MessageObject,
  msgType = "paramsError",
): ResponseMessage<T> {
  let messages = "";
  for (const [key, msg] of Object.entries(msgObject)) {
    messages = messages ? `${messages} | ${key} : ${msg}` : `${key} : ${msg}`;
  }
  return getResMessage(msgType, {
    message: messages,
  });
}
