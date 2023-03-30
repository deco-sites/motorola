import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
// function Sizes(product: Product) {
//   const possibilities = useVariantPossibilities(product);
//   const options = Object.entries(
//     possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
//   );

//   return (
//     <ul class="flex justify-center items-center gap-2">
//       {options.map(([url, value]) => (
//         <a href={url}>
//           <Avatar
//             class="bg-default"
//             variant="abbreviation"
//             content={value as string}
//             disabled={url === product.url}
//           />
//         </a>
//       ))}
//     </ul>
//   );
// }

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;

  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group max-w-[300px] px-6"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full pb-8 overflow-hidden">
          <Image src={front.url!} alt={front.alternateName} width={200} height={279} class="rounded w-full" preload={preload} loading={preload ? "eager" : "lazy"} sizes="(max-width: 640px) 50vw, 20vw" />
          {seller && (
            <div
              class="absolute sm:left-[-300px] sm:group-hover:left-0 w-full duration-300"
            >
              {/* <Sizes {...product} /> */}
              <a class="bg-mz-title-red hover:bg-mz-title-red py-3 px-10 text-center rounded-md text-white text-sm" href={product.url}>Comprar</a>
            </div>
          )}
        </div>

        <div class="flex flex-col gap-1 py-2">
          <p class="overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-bold text-sm" >
            {name}
          </p>
          <p class="text-xs font-bold text-[#92c1e9]">
            mais cores
          </p>
          <div class="flex items-center gap-2"> 
              <Text class="line-through" variant="list-price" tone="subdued" >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </Text>
          </div>
          <div class="border-b border-[#1b5185] pb-2">
            <span class="text-white">à vista</span>
          </div>
          <div class="w-full text-center py-6 text-[#92c1e9] text-sm">
            <a href={`/compare/${productID}`}>Compare esse produto</a>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
