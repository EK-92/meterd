// maybe make it classy later
// class Measurement {
//   constructor(type, name, metric_eq, ratio) {
//     this.type = type;
//     this.name = name;
//     this.metric_eq = metric_eq;
//     this.ratio = ratio;
//   }
// }

// how much an imperial unit in its metric equivalent
const mappings = {
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

const nano_imperials = [];

tiny_imperials.forEach(tiny => {
  Object.values(tiny).forEach(t => {
    nano_imperials.push(t)
  })
})

// flat array of tiny imperials to check against
const imperials = nano_imperials.flat();

// temperature conversion is not a simple multiplication
const convertTemp = (f) => {
  return Number((5 * Number(f) - 160) / 9).toFixed(2)
}

// find conversion ratio, return metric value with unit
const convert = (value, units) => {
  const { ratio } = mappings[units[0]][units[1]];
  if (!ratio) return;
  const return_unit = mappings[units[0]][units[1]].metric_unit;
  const return_value = Number(Number(value) * Number(ratio)).toFixed(2);
  if (!return_value) return;
  return { value: return_value, unit: return_unit };
}

const scrapeNumbers = () => {
  const page = document.body.innerText;
  // aaaand what do I do with it now, regex?!
}
const convertNumbers = () => {}

const page_imperials = scrapeNumbers();
