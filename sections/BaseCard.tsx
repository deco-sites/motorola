import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Container from "../components/ui/Container.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function BaseCard({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  const baseCard = productField?.find((item) => item.name === "baseCard");
  const data = baseCard?.value ? JSON.parse(baseCard.value) : null;
  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim" || !data) return null;

  return (
    <Container class="pt-4 bg-[#001428]">
      <div className="pb-24 mx-auto">
        <div className="">
          <picture>
            <Source
              media="(max-width: 767px)"
              fetchPriority={"auto"}
              src={data?.image?.mobile}
              width={540}
              height={548}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={"auto"}
              src={data?.image?.desktop}
              width={980}
              height={500}
            />
            <img
              className="object-cover w-full sm:h-full"
              loading={"lazy"}
              src={data?.image?.desktop}
              alt={data.title}
            />
          </picture>
        </div>
        <div className="mt-10 px-4 flex flex-col md:flex-row md:gap-10 md:max-w-[90%] md:mx-auto">
          <h5 className="w-full text-3xl md:text-5xl text-white font-bold font-sans  md:max-w-sm">
            {data.title}
          </h5>
          <div className="mt-5 text-white text-lg leading-5 md:w-1/2 md:mt-0">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default BaseCard;
