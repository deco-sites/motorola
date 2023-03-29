import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { skuVariations } from "./ProductDetails.tsx";

const dict = {
  "Storage Size": "Capacidade",
  "Color": "Cor",
} as {
  [key: string]: string;
};

interface Props {
  url?: string;
  skuId: string;
}

function VariantSelector(
  { skuVariations, url: currentUrl, skuId }: Props & skuVariations,
) {
    console.log(currentUrl)
    console.log(skuVariations)
  return (
    <ul class="flex gap-4 flex-row gap-2 flex-wrap justify-between">
      {Object.keys(skuVariations[skuId]).reverse().map((name) => (
        <li class="flex flex-col gap-2">
          <Text variant="caption">{dict[name]}</Text>
          <ul class="flex flex-row gap-2">
            {skuVariations[skuId][name].map((
              { url, value }: { url: string; value: string },
            ) => (
              <li>
                <a href={url}>
                  <Avatar
                    // deno-lint-ignore no-explicit-any
                    content={value as any}
                    disabled={url === currentUrl}
                    variant={"color"}
                  />
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
