import { Source } from "deco-sites/std/components/Picture.tsx";
import Container from "../components/ui/Container.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}
function DiscoverProduct({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  const objectData = productField?.find((item) => item.name === "boxContent");
  const data = objectData?.value ? JSON.parse(objectData.value) : null;
  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim" || !data) return null;

  return (
    <Container class="m-auto px-4 py-8 md:py-10 bg-white">
      <div>
        <p class="text-center text-xl md:text-2xl pb-12 md:pb-0">
          O QUE <span class="text-[#ff554d]">ACOMPANHA</span> SEU MOTO
        </p>
      </div>
      <picture class="flex justify-center align-center">
        <Source
          media="(max-width: 767px)"
          width={328}
          height={797}
          fetchPriority="auto"
          src={data?.boxContent?.image?.mobile}
        />
        <Source
          media="(min-width: 768px)"
          width={831}
          height={526}
          fetchPriority="auto"
          src={data?.boxContent?.image?.desktop}
        />
        <img
          class={"md:w-[85%] m-auto"}
          src={data?.boxContent?.image?.desktop}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </Container>
  );
}

export default DiscoverProduct;
