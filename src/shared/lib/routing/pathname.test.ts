import {
  appendPathSegment,
  removeLastPathSegment,
  replaceLastPathSegment,
} from "./pathname";

describe("pathname routing helpers", () => {
  describe("appendPathSegment", () => {
    it("appends a segment to a nested pathname", () => {
      expect(appendPathSegment("/settings/account/profile", "verify")).toBe(
        "/settings/account/profile/verify",
      );
    });

    it("normalizes root and trailing slashes", () => {
      expect(appendPathSegment("/", "verify")).toBe("/verify");
      expect(appendPathSegment("/profile/", "/verify/")).toBe(
        "/profile/verify",
      );
    });
  });

  describe("replaceLastPathSegment", () => {
    it("replaces the last matching segment", () => {
      expect(
        replaceLastPathSegment(
          "/settings/account/profile/verify",
          "verify",
          "verify-code",
        ),
      ).toBe("/settings/account/profile/verify-code");
    });

    it("falls back to append when suffix does not match", () => {
      expect(
        replaceLastPathSegment("/settings/account/profile", "verify", "code"),
      ).toBe("/settings/account/profile/code");
    });
  });

  describe("removeLastPathSegment", () => {
    it("removes the last matching segment", () => {
      expect(
        removeLastPathSegment(
          "/settings/account/profile/verify-code",
          "verify-code",
        ),
      ).toBe("/settings/account/profile");
    });

    it("returns the original path when suffix does not match", () => {
      expect(
        removeLastPathSegment("/settings/account/profile", "verify-code"),
      ).toBe("/settings/account/profile");
    });
  });
});
