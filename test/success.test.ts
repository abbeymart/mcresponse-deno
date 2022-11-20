/**
 * @Author: abbeymart | Abi Akindele | @Created: 2020-07-11
 * @Company: Copyright 2020 Abi Akindele  | mConnect.biz
 * @License: All Rights Reserved | LICENSE.md
 * @Description: mc: success scenarios testing
 */

import {
  assertEquals,
  assertNotEquals,
  mcTest,
  postTestResult,
} from "../test_deps.ts";
import { getResMessage, Status } from "../src/index.ts";

const msgType = "success",
  res = {
    code: "success",
    resCode: Status.OK,
    resMessage: "OK",
    value: "",
    message: "Request completed successfully",
  };
let options = {
  value: ["a", "b", "c"],
  code: "",
  message: "",
};

(async () => {
  console.log("SUCCESS-TEST-START\n");
  await mcTest({
    name: "should return success code for success-message",
    testFunc: () => {
      const req = getResMessage(msgType, options);
      assertEquals(res.code, req.code, `response-code should be: ${res.code}`);
      assertNotEquals(req.code, "unAuthorized");
    },
  });

  await mcTest({
    name: "should return ok/200 resCode for success-message",
    testFunc: () => {
      const req = getResMessage(msgType);
      assertEquals(
        res.resCode,
        req.resCode,
        `resCode should be: ${res.resCode}`,
      );
      assertEquals(
        res.resMessage,
        req.resMessage,
        `resCode should be: ${res.resMessage}`,
      );
    },
  });

  await mcTest({
    name: "should return Completed successfully message for success-message",
    testFunc: () => {
      const req = getResMessage(msgType, options);
      assertEquals(
        res.message,
        req.message,
        `message should be: ${res.message}`,
      );
    },
  });

  await mcTest({
    name: "should return correct default message",
    testFunc: () => {
      options = {
        value: ["a", "b", "c"],
        code: "",
        message: "completed successfully",
      };
      const req = getResMessage(msgType, options);
      assertEquals(
        req.message.includes(options.message),
        true,
        `response should be: true`,
      );
    },
  });

  await mcTest({
    name: "should return correct custom message",
    testFunc: () => {
      options = {
        value: ["a", "b", "c"],
        code: "",
        message: "custom completed successfully",
      };
      const req = getResMessage("authCode", options);
      assertEquals(req.code, "authCode", `response should be: authCode`);
      assertEquals(
        req.message === options.message,
        true,
        `response should be: true`,
      );
    },
  });

  postTestResult();
  console.log("\nSUCCESS-TEST-END\n");
})();
