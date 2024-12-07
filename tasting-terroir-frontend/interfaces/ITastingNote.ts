import {
  wineTypes,
  wineMainColors,
  Clarity,
  ColorIntensity,
  Condition,
  AromaIntensity,
  Development,
  Sweetness,
  Generic,
  Finish,
  ColorPalate,
  QualityLevel,
  ReadinessLevel,
  Body,
} from "@/types/tastingNoteTypes";

export interface ITastingNote {
  userId?: string; //TODO - this is actually not optionable but it was a pain in the ass to make it mandatory so i should come back to this later and improve it
  general: { wineType?: wineTypes; color?: wineMainColors };
  appearance: {
    clarity?: Clarity;
    colorIntensity?: ColorIntensity;
    color?: ColorPalate;
  };
  nose: {
    condition?: Condition;
    intensity?: AromaIntensity;
    characteristics?: string;
    development?: Development;
  };
  palate: {
    sweetness?: Sweetness;
    acidity?: Generic;
    tannins?: Generic;
    alcohol?: Generic;
    body?: Body;
    intensity?: AromaIntensity;
    characteristics?: string;
    finish?: Finish;
  };
  conclusion: {
    qualityLevel?: QualityLevel;
    readinessLevel?: ReadinessLevel;
  };
}
