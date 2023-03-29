import { useEffect } from "preact/hooks";

function ToogleOnScreen(
  { elementId, classToToogle }: { elementId?: string; classToToogle?: string },
) {
  //get when element with id is on screen and toogle class

  useEffect(() => {
    const element = document.getElementById(elementId || "");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element?.classList?.remove(...classToToogle?.split(" ") || "");
        } else {
          element?.classList?.add(...classToToogle?.split(" ") || "");
        }
      });
    });

    element && observer.observe(element);

    return () => {
      element && observer.unobserve(element);
    };
  }, []);

  return <div class="hidden"/>;
}

export default ToogleOnScreen;
