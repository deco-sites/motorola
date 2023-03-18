import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import GlobalCameraLensScrollBtn from "../islands/GlobalCameraLensScrollBtn.tsx";
import { Btns } from "../islands/GlobalCameraLensScrollBtn.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function MouseOverAnimated({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  const objectData = productField?.find((item) =>
    item.name === "mouseOverAnimated"
  );
  const data = objectData?.value ? JSON.parse(objectData.value) : null;
  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim" || !data) return null;
  return (
    <div className="md:pb-12">
      <div
        className={"px-4 md:py-4 md:pt-12 py-10 md:flex md:flex-wrap md:gap-4"}
      >
        <h5 className="text-3xl font-bold md:w-full">
          {data?.title.replace("<br/>", "")}
        </h5>
        <div className="mt-10 md:flex md:flex-col md:flex-1">
          <p className="text-lg leading-5 md:w-3/4">
            {data?.description}
          </p>
          <div className={"mt-10 flex align-center gap-4 md:flex md:h-[500px]"}>
            <div className="bg-[#f5f5f5] overflow-hidden group">
              <img
                className="translate-y-1/4 group-hover:scale-150 group-hover:translate-x-1/4 duration-700"
                src={data?.zoomCameraOption1}
                loading="lazy"
              />
            </div>
            <div className="bg-[#f5f5f5] overflow-hidden group">
              <img
                className="translate-y-1/4 group-hover:scale-150 group-hover:translate-x-1/4 duration-700"
                src={data?.zoomCameraOption2}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] mt-4 md:mt-10 md:p-0 p-5 group overflow-hidden md:flex-1 md:align-center md:justify-center md:flex">
          <img
            className="group-hover:scale-150 duration-700 md:max-w-[450px]"
            src={data?.zoomFrontOption1}
            loading="lazy"
          />
        </div>
      </div>
      <div className="md:flex md:gap-4 md:h-[500px]">
        <div className="md:px-0 px-4 overflow-hidden md:flex-1">
          <div className="bg-[#f5f5f5] relative group md:flex md:justify-center overflow-hidden">
            <img
              className="translate-y-[17%] md:translate-y-[5%] md:group-hover:translate-y-[-45%] group-hover:translate-y-[-37%] duration-700 md:max-w-md md:w-full"
              src={data?.upAndDownOption1}
              loading="lazy"
            />
          </div>
        </div>
        <div className="m-4 md:px-0 md:m-0 px-4 bg-[#f5f5f5] md:flex-1 flex items-center justify-between overflow-hidden group">
          {data?.cellphonesArray?.map((
            item: { image: string },
            index: number,
          ) => (
            <img
              className={`${
                index % 2 == 0
                  ? "translate-y-[-35%] md:translate-y-[-42%] group-hover:translate-y-[30%] md:group-hover:translate-y-[35%]"
                  : "translate-y-[30%] md:translate-y-[40%] md:group-hover:translate-y-[-42%] group-hover:translate-y-[-35%]"
              } md:max-height-[1000px] md:w-[22%] duration-700`}
              width={36}
              height={576}
              src={item?.image}
              alt={item.image}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MouseOverAnimated;
