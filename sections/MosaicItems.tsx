import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}
function MosaicItems({ page }: Props) {
  const productField = page?.product?.isVariantOf?.additionalProperty;
  //   const objectData = productField?.find((item) =>
  //     item.name === "mosaicItems"
  //     );

  const data = {
    "items": [
      {
        "title": "50 MP",
        "size": "sm",
        "type": "image",
        "url":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-50-mp.png",
        "description":
          "A câmera tem sensor de 50 MP, estabilização óptica de imagem (OIS) e foco automático mais rápido e preciso para você tirar fotos cheias de detalhes em qualquer iluminação.",
      },
      {
        "type": "video",
        "url":
          //   "https://motorolabr.myvtex.com/api/dataentities/TS/documents/9c91da54-e28d-11ec-835d-02d2247efc5d/pdf/attachments/dubai-video-hdr.mp4",
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-50-mp.png",
        "description":
          "Conte sua história de um jeito mais realista e vibrante. Grave vídeos que obedecem a padrões rigorosos de gama e precisão de cores, brilho e contraste.",
        "title": "Vídeos em HDR10",
        "size": "lg",
      },
      {
        "title": "Ultrawide",
        "type": "image",
        "url":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-wide-off.png",
        "description":
          "Você não precisa abrir mão da qualidade para enquadrar mais na imagem. Tire fotos ultra-wide com detalhes incríveis em alta resolução à luz do dia. Combinando vários pixels em um grande Quad Pixel, o sensor ultra-wide aumenta o brilho e a nitidez também com pouca luz.",
        "hasToggle": true,
        "activeToggle":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-wide-on.png",
        "size": "lg",
      },
      {
        "title": "Night Vision",
        "type": "image",
        "url":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-night-vision-off.png",
        "hasToggle": true,
        "activeToggle":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-night-vision-on.png",
        "size": "sm",
        "description":
          "Com o modo Night Vision na câmera frontal ou traseira destaque mais detalhes no escuro. Tire fotos com cores mais nítidas. Até mesmo à noite.",
      },
      {
        "title": "Fotos profissionais",
        "type": "image",
        "size": "md",
        "url":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-fotos-profissionais.png",
        "description":
          "Aproveite a flexibilidade e a precisão desse formato de imagem não compactado (RAW) para editar fotos com melhor qualidade.",
      },
      {
        "title": "Câmera Macro",
        "type": "image",
        "size": "md",
        "url":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-macro.png",
        "description":
          "A câmera macro deixa você 4 vezes mais perto do objeto do que uma lente padrão: até 2,5 cm de distância. Capture os mínimos detalhes da gastronomia, arte, natureza e muito mais.",
      },
      {
        "title": "Sensor de profundidade",
        "type": "image",
        "url":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-profundidade.png",
        "description": "",
        "size": "sm",
      },
      {
        "title": "Câmera frontal de 32 MP",
        "type": "image",
        "size": "lg",
        "url":
          "https://brmotorolanew.vteximg.com.br/arquivos/mosaico-dubai-frontal.png",
        "description":
          "Com a tecnologia Quad Pixel tenha mais sensibilidade em ambientes com pouca luz, deixando seus cliques mais nítidos e com cores mais vivas.",
      },
    ],
  };
  return (
    <div className={"bg-black pb-12"}>
      <div
        className={"max-w-[960px] flex flex-col md:flex-row gap-8 mx-auto flex-wrap"}
      >
        {data?.items?.map((item, index) => {
          return (
            <div
              style={{
                "flex": `${item?.size == "lg" ? "2" : "1"} 1 ${
                  item?.size == "lg" ? "60%" : "33%"
                }`,
              }}
              className={`text-white px-4 md:px-6 py-6 bg-[#141414] weight-semibold md:rounded-3xl`}
            >
              <h5 className={"text-3xl"}>{item?.title}</h5>
              <p className="pt-4 pb-8">{item?.description}</p>
              <div>
                {item?.type === "image" && (
                  <div>
                    <img src={item?.url} alt={item?.title} loading="lazy" />
                  </div>
                )}
                {item?.type === "video" && (
                  <div>
                    <video src={item?.url} loop />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MosaicItems;
