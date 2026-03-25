import { describe, expect, it } from "@jest/globals";
import { illustrationSrcMap } from "./illustration.constants";

describe("Illustration", () => {
  it("maps illustration names to the expected .lottie files", () => {
    expect(illustrationSrcMap.UserLimit).toBe("/aminations/User_limit.lottie");
    expect(illustrationSrcMap.Notifications).toBe(
      "/aminations/Notifications.lottie",
    );
    expect(Object.keys(illustrationSrcMap)).toContain("MaintenanceWork");
  });
});
