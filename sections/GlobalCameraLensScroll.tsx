import { Source } from "deco-sites/std/components/Picture.tsx";

import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import GlobalCameraLensScrollBtn from "../islands/GlobalCameraLensScrollBtn.tsx";
import { Btns } from "../islands/GlobalCameraLensScrollBtn.tsx";
export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function GlobalCameraLensScroll({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  const objectData = productField?.find((item) =>
    item.name === "globalCameraLensScroll"
  );
  const data = objectData?.value ? JSON.parse(objectData.value) : null;
  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim" || !data) return null;

  return (
    <div id="global-camera-lens" className="bg-black pb-12 md:pb-0">
      <div class="flex flex-col w-full pt-10 md:pt-0 md:max-w-[960px] md:mx-auto md:flex-row">
        <div class="flex flex-col md:flex-1 md:py-12">
          <div class="w-full pb-6 md:max-w-sm">
            <div class="flex flex-col w-full px-4">
              <p class="text-white text-4xl font-normal md:text-5xl">
                {data?.contents?.title}
              </p>
              <p class="w-full text-white weight-400 text-sm md:text-base my-4">
                {data?.contents?.description}
              </p>
            </div>
            <div class="w-auto mx-4">
              <GlobalCameraLensScrollBtn buttons={data?.contents?.cameras} />
            </div>
          </div>
        </div>
        <div className="relative  md:flex-1">
          <div class="flex">
            {data?.contents?.cameras?.map((item: Btns, index: number) => {
              return (
                <picture
                  className={`mz-gcls-image ${index != 0 ? "hidden" : ""}`}
                  id={`mz-gcls-image-${index}`}
                >
                  <Source
                    media="(max-width: 767px)"
                    width={540}
                    height={739}
                    fetchPriority="auto"
                    src={item?.imageSrcMobile}
                  />
                  <Source
                    media="(min-width: 768px)"
                    width={683}
                    height={529}
                    fetchPriority="auto"
                    src={item?.imageSrc}
                  />
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              );
            })}
          </div>

          {data?.contents?.cameras?.map((item: Btns, index: number) => (
            <div
              id={`mz-gcls-tip-${index}`}
              class={`mz-gcls-tip right-[5%] md:right-0 leading-4 md: ${
                index != 0 ? "hidden" : ""
              } absolute top-20 md:top-16 w-40 md:w-48 md:leading-3`}
            >
              <span class="text-white text-small md:text-2xl">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlobalCameraLensScroll;
