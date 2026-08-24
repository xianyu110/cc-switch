import { describe, expect, it } from "vitest";
import { providerPresets } from "@/config/claudeProviderPresets";
import { codexProviderPresets } from "@/config/codexProviderPresets";
import { geminiProviderPresets } from "@/config/geminiProviderPresets";

describe("removed sponsored provider presets", () => {
  it("hides TheRouter from Claude, Codex, and Gemini", () => {
    expect(providerPresets.some((item) => item.name === "TheRouter")).toBe(
      false,
    );
    expect(codexProviderPresets.some((item) => item.name === "TheRouter")).toBe(
      false,
    );
    expect(
      geminiProviderPresets.some((item) => item.name === "TheRouter"),
    ).toBe(false);
  });
});
