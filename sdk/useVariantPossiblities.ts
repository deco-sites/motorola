// import type { Product } from "deco-sites/std/commerce/types.ts";

// export const useVariantPossibilities = ({ isVariantOf }: Product) => {
//   const allProperties = (isVariantOf?.hasVariant ?? [])
//     .flatMap(({ additionalProperty = [], url }) => {
//       return additionalProperty.map((property) => ({ property, url }));
//     })
//     .filter((x) => x.url)
//     .sort((a, b) => a.url! < b.url! ? -1 : a.url === b.url ? 0 : 1);

//   const possibilities = allProperties.map(({ property, url }) => {
//     if (url) {
//       return {
//         name: property.name,
//         value: property.value,
//         url: url,
//       };
//     }
//     // deno-lint-ignore no-explicit-any
//   }).filter((possibility: any, index: any, self: any) =>
//     // deno-lint-ignore no-explicit-any
//     index === self.findIndex((t: any) => (
//       t?.name === possibility?.name && t?.value === possibility?.value
//     ))
//     // deno-lint-ignore no-explicit-any
//   ).reduce((acc: any, { name, value, url }: any) => {
//     acc[name] = {
//       ...acc[name],
//       [url]: value,
//     };

//     return acc;
//   }, {} as Record<string, Record<string, string>>);

//   return possibilities;
// };
