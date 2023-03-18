import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import Container from "../components/ui/Container.tsx";
export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function PDPWarning({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  const objectData = productField?.find((item) =>
    item.name === "Avisos Legais"
  );
  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim" || !objectData?.value) return null;
  return (
    <Container class="bg-[#001428]">
      <div class="text-white px-4 py-16">
        <p class="text-2xl font-bold pb-8">Avisos Legais</p>
        <div
          class="text-xs flex flex-col gap-2 md:text-sm"
          dangerouslySetInnerHTML={{ __html: objectData?.value }}
        >
        </div>
      </div>
    </Container>
  );
}

export default PDPWarning;
