import { describe, expect, it } from "@jest/globals";
import { illustrationSrcMap } from "./illustration.constants";

describe("Illustration", () => {
  it("maps illustration names to the expected .lottie files", () => {
    expect(illustrationSrcMap.UserLimit).toBe("/animations/User_limit.lottie");
    expect(illustrationSrcMap.Notifications).toBe(
      "/animations/Notifications.lottie",
    );
    expect(Object.keys(illustrationSrcMap)).toContain("MaintenanceWork");
  });
});
