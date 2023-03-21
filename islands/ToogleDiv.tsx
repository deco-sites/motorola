export type ToogleType = {
  idToToogle?: string;
  classToUntoogle?: string;
  divClass?: string;
  btnClass?: string;
  text?: string;
};

function ToogleDiv(
  { idToToogle, classToUntoogle, divClass, btnClass, text }: ToogleType,
) {
  return (
    <div
      onClick={() => {
        const element = document.getElementById(idToToogle || "");
        if (element) {
          element.classList.toggle("hidden");
        }
        const element2 = document.getElementsByClassName(classToUntoogle || "");
        //toogle all elements
        for (let i = 0; i < element2.length; i++) {
          element2[i].classList.toggle("hidden");
        }
      }}
      class={divClass}
    >
      <p class={btnClass}>{text}</p>
    </div>
  );
}

export default ToogleDiv;
