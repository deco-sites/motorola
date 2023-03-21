import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import GlobalCameraLensScrollBtn from "../islands/GlobalCameraLensScrollBtn.tsx";
import { Btns } from "../islands/GlobalCameraLensScrollBtn.tsx";
import Container from "../components/ui/Container.tsx";
import ToogleDiv from "../islands/ToogleDiv.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function pdpFAQ({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  const objectData = productField?.find((item) => item.name === "pdpFAQ");
  const data = objectData?.value ? JSON.parse(objectData.value) : null;
  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim" || !data) return null;
  return (
    <Container className="bg-[#001428] p-4">
      <div>
        <div class="flex flex-col gap-4">
          {data?.faq?.map(
            (item: { question: string; answer: string }, index: number) => {
              return (
                <div class="bg-[#001a33] px-8 py-4">
                  <ToogleDiv
                    idToToogle={`faq-toogle-${index}`}
                    text={item?.question}
                    divClass="text-[#ff554d] font-bold leading-4"
                  />
                  <div id={`faq-toogle-${index}`} class="pt-6 hidden">
                    <p class="text-white text-xs leading-3">{item?.answer}</p>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </Container>
  );
}

export default pdpFAQ;
