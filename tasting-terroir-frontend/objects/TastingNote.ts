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

export default class TastingNote {
  general!: { wineType: wineTypes; color: wineMainColors };
  appearance!: {
    clarity?: Clarity;
    colorIntensity?: ColorIntensity;
    color?: ColorPalate;
  };
  nose!: {
    condition?: Condition;
    intensity?: AromaIntensity;
    characteristics?: string;
    development?: Development;
  };
  palate!: {
    sweetness?: Sweetness;
    acidity?: Generic;
    tannins?: Generic;
    alcohol?: Generic;
    body?: Body;
    intensity?: AromaIntensity;
    characteristics?: string;
    finish?: Finish;
  };
  conclusion!: {
    qualityLevel?: QualityLevel;
    readinessLevel?: ReadinessLevel;
  };

  constructor(wineType: wineTypes, color: wineMainColors) {
    this.general = { wineType, color };
    this.appearance = {};
    this.nose = {};
    this.palate = {};
    this.conclusion = {};
  }
}
