/**
 * @title {{{text}}}
 */
interface Benefit {
  /**
   * @title Benefit text
   */
  text: string;
}
interface Props {
  /**
   * @title Benefits
   */
  benefits: Benefit[];
}

export default function Benefits({ benefits }: Props) {
  return (
    <div class="px-4">
      <div class="flex gap-4 background p-3 rounded-lg overflow-x-auto scrollbar-hide md:justify-between md:overflow-visible">
        {benefits.map((benefit) => (
          <div class="flex-shrink-0 md:flex-shrink">
            <p class="text-xs whitespace-nowrap md:whitespace-normal text-center">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
