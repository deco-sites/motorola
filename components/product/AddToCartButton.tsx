import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
  text: string;
  class?: string;
}

function AddToCartButton({ skuId, sellerId,text,class:className }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <Button {...props} class={className}>
      {text}
    </Button>
  );
}

export default AddToCartButton;
