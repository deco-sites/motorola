import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type {
  BreadcrumbList,
  Product,
  ProductDetailsPage,
} from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}
export interface skuVariations {
  skuVariations: {
    [key: string]: {
      [key: string]: {
        value: string;
        url: string;
      }[];
    };
  };
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

//type that adds a property skuVariations to Product
type Prod = Product & { skuVariations: skuVariations };
type PDP = {
  product: Prod;
  breadcrumbList: BreadcrumbList;
};

function Details({ page }: { page: PDP }) {
  const {
    breadcrumbList,
    product,
  } = page;

  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
    brand,
    isVariantOf,
    skuVariations,
  } = product;

  const { price, listPrice, seller, installments, inventoryLevel } = useOffer(
    offers,
  );

  const [front, back] = images ?? [];
  // const boletoDiscount = teasers?.find((teaser:{"<Name>k__BackingField":string}) => teaser["<Name>k__BackingField"] === "[C] Desconto a vista 10% Cartão Boleto");
  // const boletoDiscountPerc = boletoDiscount["<Effects>k__BackingField"]["<Parameters>k__BackingField"][0]["<Value>k__BackingField"]
  // const valueWithDiscount = (price || 0 - (price || 0 * boletoDiscountPerc / 100))

  return (
    <Container class="py-0 sm:py-10 bg-white">
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-10">
        {/* Image Gallery */}
        <div class="flex flex-row overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="snap-center min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* Product Info */}
        <div>
          <div class="flex justify-between mb-4">
            <img
              class="brmotorolanew-store-2-x-logoproduto"
              src="https://brmotorolanew.vtexassets.com/arquivos/nome-produto-motorola-edge-30-5g.png?V=2"
              loading="lazy"
            />
            <div class="flex flex-col justify-center items-center w-auto">
              <div class="flex gap-1">
                {Array(5).fill(0).map((_, index) => (
                  <Icon
                    id="StarFilled"
                    width={15}
                    height={15}
                    class="text-mz-title-red"
                  />
                ))}
              </div>
              <span class="text-xs text-[#a5a5a5]">1083 avaliações</span>
            </div>
          </div>
          <div class="flex justify-between text-sm pb-4 border-b-1 mb-4">
            <div>{isVariantOf?.name} - {name}</div>
            {inventoryLevel && (
              <div class={"text-mz-title-red font-xs text-right"}>
                Apenas {inventoryLevel} unidade{inventoryLevel > 1 ? "s" : ""}
              </div>
            )}
          </div>
          {
            /* {valueWithDiscount &&
            <div>
              {formatPrice(valueWithDiscount, offers!.priceCurrency!)} à vista com 10% de desconto
            </div>} */
          }
          
          <div class="mt-4 sm:mt-6">
            <ProductSelector product={product} />
          </div>

          <div class="border-y-1 my-2 py-4">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-medium">Troca Smart - Dinheiro em conta</h3>
              <button class="underline text-[10px]">Saiba mais</button>
            </div>
            <p class="text-[10px] mb-6">
              Seu aparelho usado pode valer até R$ 3.000,00 no programa Troca
              Smart.
            </p>
            <div class="flex gap-4 justify-between">
              <button class="py-2 border flex-1 rounded-md font-sm">Sim</button>
              <button class="py-2 border flex-1 rounded-md border-black bg-gray-500 font-semibold font-sm">Não</button>
            </div>
          </div>

          <div class="text-xs mb-2 font-bold text-gray-400 line-through">
            {formatPrice(listPrice, offers!.priceCurrency!)}
          </div>
          <div class="text-sm mb-2">
            {formatPrice(price, offers!.priceCurrency!)} em até {installments}
          </div>
          {/* <div>
            <DiscountTeaser/>
          </div> */}
          <div>
            <p class="underline text-sm">Formas de pagamento</p>
          </div>
            {/* Add to Cart and Favorites button */}
            <div class="mt-4 flex flex-col gap-2">
                {seller && (
                <AddToCartButton
                    skuId={productID}
                    sellerId={seller}
                    text="Comprar"
                    class="bg-[#ff554d] font-semibold w-full rounded-md hover:bg-[#ff7870] hover:border-[#ff7870] hover:text-white active:bg-[#ff7870] h-12"
                />
                )}
                {/* <Button variant="secondary">
                <Icon id="Heart" width={20} height={20} strokeWidth={2} />{" "}
                Favoritar
                </Button> */}
            </div>

          <div class="mt-8">
            <div class="flex p-4 gap text-xs items-center bg-[#f5f5f5] rounded-md">
              <div class="pr-3 border-r-1 mr-3">
                <a>Compare</a>
              </div>
              <div class="pr-3 border-r-1 mr-3">
                <p>Frete Grátis</p>
              </div>
              <div class="pr-3">
                <p>Até 10% OFF pagando com PIX</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-auto px-4 sm:px-0">
          {/* Breadcrumb */}
          {
            /* <Breadcrumb
            itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
          /> */
          }
          {/* Code and name */}
          <div class="mt-4 sm:mt-8">
            <div>
              <Text tone="subdued" variant="caption">
                Cod. {gtin}
              </Text>
            </div>
            <h1>
              <Text variant="heading-3">{name}</Text>
            </h1>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-row gap-2 items-center">
              <Text
                class="line-through"
                tone="subdued"
                variant="list-price"
              >
              </Text>
              <Text tone="price" variant="heading-3">
              </Text>
            </div>
            <Text tone="subdued" variant="caption">
              {installments}
            </Text>
          </div>
          {/* Description card */}
          <div class="mt-4 sm:mt-6">
            <Text variant="caption">
              {description && (
                <details>
                  <summary class="cursor-pointer">Descrição</summary>
                  <div class="ml-2 mt-2">{description}</div>
                </details>
              )}
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}
//deno-lint-ignore no-explicit-any
function ProductDetails({ page }: any) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
