import { describe, expect, it } from "vitest";
import { claudeDesktopProviderPresets } from "@/config/claudeDesktopProviderPresets";
import { providerPresets } from "@/config/claudeProviderPresets";
import { codexProviderPresets } from "@/config/codexProviderPresets";
import { geminiProviderPresets } from "@/config/geminiProviderPresets";
import { hermesProviderPresets } from "@/config/hermesProviderPresets";
import { openclawProviderPresets } from "@/config/openclawProviderPresets";
import { opencodeProviderPresets } from "@/config/opencodeProviderPresets";

describe("removed sponsored provider presets", () => {
  it("hides SubRouter from every provider list", () => {
    for (const presets of [
      providerPresets,
      codexProviderPresets,
      geminiProviderPresets,
      opencodeProviderPresets,
      openclawProviderPresets,
      hermesProviderPresets,
      claudeDesktopProviderPresets,
    ]) {
      expect(presets.some((item) => item.name === "SubRouter")).toBe(false);
    }
  });
});
