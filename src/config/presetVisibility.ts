import type { ProviderCategory } from "../types";

/** Keep built-in presets focused on first-party and mainstream cloud APIs. */
export const isVisibleProviderPreset = (preset: {
  name: string;
  category?: ProviderCategory;
  isOfficial?: boolean;
  isCustomTemplate?: boolean;
  partnerPromotionKey?: string;
}) => {
  if (preset.name === "MomoAI") return true;
  if (preset.isPartner || preset.partnerPromotionKey) return false;
  if (preset.isOfficial) return true;
  if (preset.isCustomTemplate) return true;
  return (
    preset.category === "cn_official" ||
    preset.category === "cloud_provider" ||
    preset.category === "custom" ||
    preset.category === "omo" ||
    preset.category === "omo-slim"
  );
};

export const filterVisibleProviderPresets = <
  T extends Parameters<typeof isVisibleProviderPreset>[0],
>(
  presets: T[],
): T[] => presets.filter(isVisibleProviderPreset);
