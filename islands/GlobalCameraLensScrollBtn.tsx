export interface Btns {
  title?: string;
  description?: string;
  imageSrc: string;
  imageSrcMobile: string;
  image?: string;
}
function toggleImageById(index: number) {
  //remove class is-active from all buttons
  //add class is-active to the button with the index
  const imgs = document.getElementsByClassName("mz-gcls-image");
  const btns = document.getElementsByClassName("mz-gcls-btn");
  const tips = document.getElementsByClassName("mz-gcls-tip");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].classList.add("hidden");
    tips[i].classList.add("hidden");
    btns[i].classList.remove("bg-white", "bg-opacity-20");
  }
  document?.getElementById(`mz-glcs-btn-${index}`)?.classList.add(
    "bg-white",
    "bg-opacity-20",
  );
  document?.getElementById(`mz-gcls-tip-${index}`)?.classList.remove("hidden");
  document?.getElementById(`mz-gcls-image-${index}`)?.classList.remove(
    "hidden",
  );
  document?.getElementById("mz-gcls-wrapper")?.scrollTo({
    left: index * 160,
    behavior: "smooth",
  });
}

function GlobalCameraLensScrollBtn({ buttons }: { buttons: Btns[] }) {
  return (
    <div
      id={"mz-gcls-wrapper"}
      class="flex flex-row w-full items-start flex-nowrap whitespace-nowrap overflow-scroll gap-2 h-10 md:flex-col md:h-auto md:overflow-unset"
    >
      {buttons?.map((button, index) => {
        return (
          <button
            id={`mz-glcs-btn-${index}`}
            className={`${
              index == 0 ? "bg-white bg-opacity-20" : ""
            } mz-gcls-btn rounded-lg text-white text-sm md:text-base px-3 py-1 duration-200 cursor-pointer outline-none focus:outline-none`}
            type="button"
            style="transform: scale(1);"
            onClick={() => toggleImageById(index)}
          >
            {button.title}
          </button>
        );
      })}
    </div>
  );
}

export default GlobalCameraLensScrollBtn;
