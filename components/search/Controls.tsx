import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function Controls({ page }: { page: ProductListingPage }) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;
  return (
    <Container class="flex flex-col justify-between mb-4 md:mb-0 p-4 md:p-0 sm:gap-4">
      <div class="flex flex-row items-center sm:p-0 mb-2">
        <Breadcrumb itemListElement={breadcrumb?.itemListElement} />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-mz-title-light mt-[86px] text-[20px] m-[0] leading-[1.5]">
          Você buscou por:
        </p>
        <h1 className="text-[36px] font-bold text-mz-title-light my-[24px]">
          buscado
        </h1>
      </div>
      <div class="flex flex-row sm:gap-4 items-center justify-end">
        <Sort />
      </div>

      <Modal
        title="Filtrar"
        mode="sidebar-right"
        open={open.value}
        onClose={() => {
          open.value = false;
        }}
      >
        <Filters filters={filters} />
      </Modal>
    </Container>
  );
}

function SearchControls({ page }: Props) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} />;
}

export default SearchControls;
