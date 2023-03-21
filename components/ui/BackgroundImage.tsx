import { useEffect } from "preact/hooks";

function BackgroundImage() {
  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.style.backgroundColor = "#001428";
    }
  }, []);

  return <div />;
}

export default BackgroundImage;
