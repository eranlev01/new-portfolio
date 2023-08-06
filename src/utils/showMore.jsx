import { useEffect } from "react";

const ShowMoreLess = ({ paragraphElement }) => {
  useEffect(() => {
    const p = document.querySelectorAll(".paragraph");
    elements.forEach((element) => {
      if (element.scrollHeight > element.clientHeight) {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("showMoreLess");
        button.textContent = "read more";
        element.parentNode.insertBefore(button, element.nextSibling);
      }
    });
    const showMoreLessButtons = document.querySelectorAll(".showMoreLess");
    showMoreLessButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const paragraph = button.previousElementSibling;
        if (paragraph.classList.contains("line-clamp-none")) {
          button.textContent = "read more";
          paragraph.classList.remove("line-clamp-none");
        } else {
          button.textContent = "read less";
          paragraph.classList.add("line-clamp-none");
        }
      });
    });
  }, []);

  return (
    <paragraphElement />
  );
};

export default ShowMoreLess;
