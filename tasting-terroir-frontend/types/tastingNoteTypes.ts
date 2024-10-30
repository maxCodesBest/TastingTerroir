//TODO find a more useful way to have this data written

export enum wineTypes {
  regular = "Regular",
  sparkling = "Sparkling",
  fortified = "Fortified",
}

export enum wineMainColors {
  white = "White",
  red = "Red",
  rose = "Rose",
  orange = "Orange",
}

export enum Clarity {
  clear = "Clear",
  hazy = "Hazy",
}

export enum ColorIntensity {
  pale = "Pale",
  medium = "Medium",
  deep = "Deep",
}

export enum WhiteColorPalate {
  lemonGreen = "Lemon Green",
  lemon = "Lemon",
  gold = "Gold",
  amber = "Amber",
  brown = "Brown",
}

export enum OrangeColorPalate {
  orange = "Orange",
}

export enum RedColorPalate {
  purple = "Purple",
  ruby = "Ruby",
  garnet = "Garnet",
  tawny = "Tawny",
  brown = "Brown",
}

export enum RoseColorPalate {
  pink = "Pink",
  salmon = "Salmon",
  onionSkin = "Onion Skin",
}

export type ColorPalate =
  | WhiteColorPalate
  | RedColorPalate
  | RoseColorPalate
  | OrangeColorPalate;

export enum Condition {
  clean = "Clean",
  unclean = "Unclean",
}

export enum AromaIntensity {
  light = "Light",
  mediumMinus = "Medium (-)",
  medium = "Medium",
  mediumPlus = "Medium (+)",
  pronounced = "Pronounced",
}

export enum Development {
  youthful = "Youthful",
  developing = "Developing",
  fullyDeveloped = "Fully Developed",
  pastItsBest = "Past Its Best",
}

export enum Sweetness {
  dry = "Dry",
  offDry = "Off Dry",
  mediumDry = "Medium Dry",
  mediumSweet = "Medium Sweet",
  sweet = "Sweet",
  luscious = "Luscious",
}

export enum Generic {
  low = "Low",
  mediumMinus = "Medium (-)",
  medium = "Medium",
  mediumPlus = "Medium (+)",
  high = "High",
}

export enum Body {
  light = "Light",
  mediumMinus = "Medium (-)",
  medium = "Medium",
  mediumPlus = "Medium (+)",
  full = "Full",
}

export enum Finish {
  short = "Short",
  mediumMinus = "Medium (-)",
  medium = "Medium",
  mediumPlus = "Medium (+)",
  long = "Long",
}

export enum QualityLevel {
  faulty = "Faulty",
  poor = "Poor",
  good = "Good",
  veryGood = "Very Good",
  outstanding = "Outstanding",
}

export enum ReadinessLevel {
  tooYoung = "Too Young",
  suitableForAging = "Suitable For Aging",
  notSuitableForAging = "Not Suitable For Aging",
  tooOld = "Too Old",
}

export function enumToArray<T extends object>(
  enumObj: T
): { label: string; value: string }[] {
  return Object.keys(enumObj)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      label: (enumObj as any)[key],
      value: key,
    }));
}
