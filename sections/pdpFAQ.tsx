import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import GlobalCameraLensScrollBtn from "../islands/GlobalCameraLensScrollBtn.tsx";
import { Btns } from "../islands/GlobalCameraLensScrollBtn.tsx";

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
    <div className="bg-[#001428] p-4">
      <div>
        <div class="flex flex-col gap-4">
          {data?.faq?.map(
            (item: { question: string; answer: string }, index: number) => {
              return (
                <div class="bg-[#001a33] px-8 py-4">
                  <div>
                    <h2 class="text-[#ff554d] font-bold leading-4">
                      {item?.question}
                    </h2>
                  </div>
                  <div class="pt-6">
                    <p class="text-white text-xs leading-3">{item?.answer}</p>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}

export default pdpFAQ;
