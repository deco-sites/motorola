import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
// import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useSignal } from "@preact/signals";

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

function ProductCardSearch({ product, preload }: Props) {
  const percentageDiscount = useSignal("0");
  const maisCores = useSignal(false);
  const {
    url,
    productID,
    name,
    image: images,
    offers,
    isVariantOf,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, installments } = useOffer(offers);

  if (price && listPrice) {
    percentageDiscount.value = (((listPrice - price) / listPrice) * 100)
      .toFixed();
  }

  isVariantOf?.additionalProperty.forEach((prop) => {
    if (prop.value === "mais cores") {
      maisCores.value = true;
    }
  });

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group bg-white rounded-[10px] max-w-[310px] p-[16px]"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={200}
            height={279}
            class="rounded w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={200}
            height={279}
            class="rounded w-full hidden group-hover:block"
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <span className="absolute top-[16px] text-center font-bold left-[16px] text-xs w-[55px] h-[18px] border border-mz-blue-bg rounded">
            -{percentageDiscount.value}%
          </span>
        </div>

        <div class="flex flex-col gap-1 py-2">
          <span className="text-mz-blue-bg text-[14px] font-bold">
            {isVariantOf?.name}
          </span>

          <a
            href={url}
            className="text-mz-text-blue text-[12px] font-bold mb-[15px]"
          >
            mais cores
          </a>
          <h5 className="text-[#979797] text-[12px] leading-[16px] line-through mb-[5px]">
            {formatPrice(listPrice, offers!.priceCurrency!)}
          </h5>
          <span className="text-[16px] leading-[20px] text-left">
            <strong>{formatPrice(price, offers!.priceCurrency!)}</strong>{" "}
            à vista
          </span>
          <p className="text-[14px] leading-[18px] mt-[12px]">
            ou em até {installments}
          </p>
          <a
            href={url}
            className="h-[48px] mb-[15px] bg-mz-title-red rounded-[4px] text-sm text-white flex items-center justify-center"
          >
            Comprar
          </a>
          <a href="/compare" className="text-center text-sm">
            Compare esse produto
          </a>
        </div>
      </a>
    </div>
  );
}

export default ProductCardSearch;
