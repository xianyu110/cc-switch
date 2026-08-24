import { describe, expect, it } from "vitest";
import {
  OPENCODE_PRESET_MODEL_VARIANTS,
  opencodeProviderPresets,
} from "@/config/opencodeProviderPresets";
import { openclawProviderPresets } from "@/config/openclawProviderPresets";

describe("removed sponsored provider presets", () => {
  it("hides TheRouter from OpenCode and OpenClaw", () => {
    expect(
      opencodeProviderPresets.some((item) => item.name === "TheRouter"),
    ).toBe(false);
    expect(
      openclawProviderPresets.some((item) => item.name === "TheRouter"),
    ).toBe(false);
  });

  it("keeps Google OpenCode preset model ids unique", () => {
    const googleModels = OPENCODE_PRESET_MODEL_VARIANTS["@ai-sdk/google"];
    const ids = googleModels.map((model) => model.id);
    const geminiFlashModels = googleModels.filter(
      (model) => model.id === "gemini-3.5-flash",
    );

    expect(new Set(ids).size).toBe(ids.length);
    expect(geminiFlashModels).toHaveLength(1);
    expect(geminiFlashModels[0]).toMatchObject({
      name: "Gemini 3.5 Flash",
      variants: {
        minimal: expect.any(Object),
        low: expect.any(Object),
        medium: expect.any(Object),
        high: expect.any(Object),
      },
    });
  });
});
