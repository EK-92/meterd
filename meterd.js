// maybe make it classy later
// class Measurement {
//   constructor(type, name, metric_eq, ratio) {
//     this.type = type;
//     this.name = name;
//     this.metric_eq = metric_eq;
//     this.ratio = ratio;
//   }
// }

/**
 * how much an imperial unit is in its metric equivalent
 */
const ratios = {
  length: [
    { inch: { ratio: "2.54", metric_unit: "cm" } },
    { foot: { ratio: "30.48", metric_unit: "cm" } },
    { yard: { ratio: "0.9144", metric_unit: "m" } },
    { mile: { ratio: "1.609", metric_unit: "km" } },
  ],
  area: [
    { inch: { ratio: "6.45", metric_unit: "cm" } },
    { foot: { ratio: "0.0929", metric_unit: "m" } },
    { yard: { ratio: "0.8361", metric_unit: "m" } },
    { mile: { ratio: "2.59", metric_unit: "km" } }
  ],
  volume: [
    { ounce: { ratio: "29.573", metric_unit: "ml" } },
    { pint: { ratio: "0.473", metric_unit: "l" } },
    { quart: { ratio: "0.946", metric_unit: "l" } },
    { gallon: { ratio: "3.785", metric_unit: "l" } }
  ],
  mass: [
    { ounce: { ratio: "28.350", metric_unit: "g" } },
    { pound: { ratio: "0.454", metric_unit: "kg" } },
  ],
}

/**
 * ascii characters masquerading as numbers on various websites
 */
const non_numerics = [
  { "⅒": 0.1 },
  { "⅑": 0.11 },
  { "⅛": 0.125 },
  { "⅐": 0.14 },
  { "⅙": 0.167 },
  { "⅕": 0.2 },
  { "¼": 0.25 },
  { "⅓": 0.33 },
  { "⅜": 0.375 },
  { "⅖": 0.4 },
  { "½": 0.5 },
  { "⅗": 0.6 },
  { "⅝": 0.625 },
  { "⅔": 0.67 },
  { "¾": 0.75 },
  { "⅘": 0.8 },
  { "⅚": 0.83 },
  { "⅞": 0.875 },
]

/**
 * abbreviations & alternative names of imperial units
 */
const tiny_imperials = [
  { inch: ["in"] },
  { foot: ["ft", "feet"] },
  { yard: ["yd"] },
  { mile: ["mi"] },
  { ounce: ["oz"] },
  { pint: ["pt"] },
  { quart: ["qt"] },
  { gallon: ["gal"] },
  { pound: ["lb"] }
]

/**
 * preliminary list of imperial unit names
 */
const nano_imperials = [];

/**
 * add names and abbreviatios and such into same array
 */
tiny_imperials.forEach(tiny => {
  Object.keys(tiny).forEach(k => {
    nano_imperials.push(k)
  })
  Object.values(tiny).forEach(v => {
    nano_imperials.push(v)
  })
})

/**
 * flat array of imperial unit names to check against
 */
const imperials = nano_imperials.flat();

const scrapeNumbers = () => {
  const page = document.body.innerText;
  // find all numbers
  // => find all non-number numbers and convert them
  // find all units
  // compare the lists
  // return references+numbers+units
}

/**
 * temperature conversion is not a simple multiplication
 * @param {number} f 
 * @returns string
 */

const convertTemp = (f) => {
  return Number((5 * Number(f) - 160) / 9).toFixed(2)
}

/**
 * find conversion ratio, return metric value with unit
 * @param {number} value 
 * @param {array of strings} units 
 * @returns object
 */
const convert = (value, units) => {
  const { ratio } = ratios[units[0]][units[1]];
  if (!ratio) return;
  const return_unit = ratios[units[0]][units[1]].metric_unit;
  const return_value = Number(Number(value) * Number(ratio)).toFixed(2);
  if (!return_value) return;
  return { value: return_value, unit: return_unit };
}

// use convert function to work with measurements data on page
const convertUnits = (imperials) => { }

const page_imperials = scrapeNumbers();

const page_metrics = convertUnits(page_imperials);
