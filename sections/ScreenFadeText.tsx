export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}
import Container from "../components/ui/Container.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

function Content(
  { data, mtOnDesktop }: {
    data: { title: string; description: string };
    mtOnDesktop?: boolean;
  },
) {
  return (
    <div
      class={`flex flex-col weight-semibold text-white ${
        mtOnDesktop ? "md:mt-8" : ""
      }`}
    >
      <p class="text-3xl md:text-5xl w-full mr-4">
        {data.title}
      </p>
      <p class="pt-4 text-xl leading-6 md:pt-6">
        {data.description}
      </p>
    </div>
  );
}

function ScreenFadeText({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  const objectData = productField?.find((item) =>
    item.name === "ScreenFadeText"
  );
  const data = objectData?.value ? JSON.parse(objectData.value) : null;
  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim" || !data) return null;

  return (
    <Container class="bg-black">
      <section class="">
        <div class="relative">
          <video className={"w-full"} loop preload="auto">
            <source
              media="(max-width: 767px)"
              src={data?.contents?.mainVideoURL?.mobile}
              type={`video/mp4;codecs="avc1.42E01E, mp4a.40.2"`}
            />
            <source
              media="(min-width: 768px)"
              src={data?.contents?.mainVideoURL?.desktop}
              type={`video/mp4;codecs="avc1.42E01E, mp4a.40.2"`}
            />
          </video>
          <div class="bg-gradient-to-t from-black h-40 absolute w-full bottom-0">
          </div>
        </div>
        <div class="flex flex-col px-4 py-8 md:pb-20 gap-16 md:grid md:grid-cols-2 md:gap-24 md:w-2/3 m-auto">
          {data?.contents.fadeTitle1 && data.contents?.fadeDescription1 && (
            <Content
              mtOnDesktop={true}
              data={{
                title: data?.contents?.fadeTitle1,
                description: data?.contents?.fadeDescription1,
              }}
            />
          )}
          {data?.contents.fadeTitle2 && data.contents?.fadeDescription2 && (
            <Content
              data={{
                title: data?.contents?.fadeTitle2,
                description: data?.contents?.fadeDescription2,
              }}
            />
          )}
          {data?.contents.fadeTitle3 && data.contents?.fadeDescription3 && (
            <Content
              mtOnDesktop={true}
              data={{
                title: data?.contents?.fadeTitle3,
                description: data?.contents?.fadeDescription3,
              }}
            />
          )}
          {data?.contents.fadeTitle4 && data.contents?.fadeDescription4 && (
            <Content
              data={{
                title: data?.contents?.fadeTitle4,
                description: data?.contents?.fadeDescription4,
              }}
            />
          )}
          {data?.contents.fadeTitle5 && data.contents?.fadeDescription5 && (
            <Content
              mtOnDesktop={true}
              data={{
                title: data?.contents?.fadeTitle5,
                description: data?.contents?.fadeDescription5,
              }}
            />
          )}
        </div>
      </section>
    </Container>
  );
}

export default ScreenFadeText;
