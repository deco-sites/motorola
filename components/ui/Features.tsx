import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <Container class="px-6 mb-12 sm:px-0 sm:py-10">
      <div class="border-[#082e53] rounded-[4px] border-1">
        <div class="flex gap-2 justify-start overflow-scroll md:(overflow-auto justify-evenly py-4 px-0) py-3 px-4 sm:flex-row">
          {features.map(({ icon: id = "Truck", title }) => (
            <div class="flex flex-row min-w-[50%] md:(min-w-0) items-center gap-2">
              <Icon
                id={id}
                width={30}
                height={30}
                strokeWidth={2}
                class="text-white md:hidden"
              />
              <Icon
                id={id}
                width={40}
                height={40}
                strokeWidth={2}
                class="text-white hidden md:block"
              />
              <div class="flex flex-col gap-2">
                <span class="text-[12px] text-white leading-4 md:(pl-1.5 text-[16px])">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default FeatureHighlights;
