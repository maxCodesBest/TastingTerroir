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

import IBase from "./IBase";

export interface ITastingNote extends IBase, INewTastingNote {}

export interface INewTastingNote {
  isBlindTaste?: boolean; //TODO - this isn't really optional but it makes a lot of problems in the zustand store as we have to initialize the object before we know if its a blind taste or not
  bottleInfo: {
    name?: string;
    producer?: string;
    country?: string;
    region?: string;
    vintage?: number;
  };
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
