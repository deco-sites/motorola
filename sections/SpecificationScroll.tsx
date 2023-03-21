import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import Container from "../components/ui/Container.tsx";
import ToogleDiv from "../islands/ToogleDiv.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

type Specifications = {
  [key: string]: {
    value: string;
    title: string;
  }[];
};
function SpecificationScroll({ page }: Props) {
  const listOfSpecifications: Specifications = {
    "Performance": [
      { title: "Sistema Operacional", value: "Sistema operacional" },
      { title: "Memória RAM", value: "Memória (RAM)" },
      { title: "Processador", value: "Processador" },
    ],
    "Tela": [{ title: "Informação de tela", value: "Tela" }],
    "Bateria": [{ value: "Bateria", title: "Tamanho da bateria" }],
    "Sensores": [{ value: "Sensores", title: "Sensores" }],
    //design with Peso, Entradas e Dimensĩões
    "Design": [{ value: "Peso", title: "Peso" }, {
      value: "Conectividade",
      title: "Entradas",
    }, { value: "Dimensões", title: "Dimensões" }],
    "Câmera": [{ value: "Câmera traseira:", title: "Câmera traseira" }, {
      value: "Câmera frontal:",
      title: "Câmera frontal",
    }],
    //Conectividade with Bandas, NFC, Cartão SIM, Wi-fi, Bluetooth, Serviços de Localização ,Certificado de homologação Anatel
    "Conectividade": [
      { value: "Bandas", title: "Bandas" },
      { value: "NFC", title: "NFC" },
      { value: "Cartão SIM", title: "Cartão SIM" },
      { value: "Wi-Fi", title: "Wi-fi" },
      { value: "Tecnologia Bluetooth®", title: "Bluetooth" },
      { value: "Serviços de localização", title: "Serviços de Localização" },
      { value: "Anatel", title: "Certificado de homologação Anatel" },
    ],
    //Conteúdo da Caixa
    "Conteúdo da Caixa": [{ value: "Conteúdo da caixa", title: "" }],
  };
  const productField = page?.product?.isVariantOf?.additionalProperty;

  const newPdp = productField?.find((item) => item.name === "newPDP");
  if (!newPdp || newPdp?.value != "Sim") return null;
  return (
    <Container class="p-2 bg-[#001428]">
      <div class="border-1 border-[#082e53] bg-[#011b34] my-3">
        <ToogleDiv
          idToToogle="technical-file"
          text={"FICHA TÉCNICA COMPLETA"}
          divClass={"text-white py-3 max-w-[80%] m-auto flex justify-center items-center cursor-pointer"}
        />
        <div
          id={"technical-file"}
          class="md:w-[80%] m-auto bg-[#011b34] hidden"
        >
          <div>
            <div class="px-4">
              {Object.keys(listOfSpecifications).map((key) => {
                return (
                  <div
                    className={"flex flex-col md:flex-row border-b-1 border-[#2a3d4e] md:border-0 md:border-t-1"}
                  >
                    <div className="w-full md:pt-4 md:w-[40%]">
                      <p class="text-[#ff554d] font-bold">{key}</p>
                    </div>
                    <div class="flex flex-col gap-8 py-8 md:py-5 md:flex-row md:flex-wrap md:justify-between md:w-[60%] md:gap-0">
                      {listOfSpecifications[key]?.map(
                        (item: { value: string; title: string }) => {
                          return (
                            <div
                              className={"flex flex-col text-xs md:w-1/2 md:mb-8"}
                            >
                              {item.value && (
                                <div>
                                  <p class="text-white font-bold">
                                    {item.title}
                                  </p>
                                </div>
                              )}

                              <div class="text-[#aaa]">
                                <p
                                  class={"text-[#aaa] flex-wrap break-words"}
                                  dangerouslySetInnerHTML={{
                                    __html: productField?.find((it) =>
                                      it.name === item.value
                                    )?.value || "",
                                  }}
                                >
                                </p>
                              </div>
                            </div>
                          );
                        },
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SpecificationScroll;
