import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyledReadMoreBtn } from "./styles";

type ReadMoreProps = {
  textID: string;
  mainContainerID: string;
  buttonID: string;
  titleID: string;
  isShowingText: boolean;
  isClampedText: boolean;
  isLongText: boolean;
  textHeight: number;
  currentPage?: number;
  maxCharacters: number;
  setIsShowingText: Dispatch<SetStateAction<boolean>>;
  setIsClampedText: Dispatch<SetStateAction<boolean>>;
  setIsLongText: Dispatch<SetStateAction<boolean>>;
};

export default function ReadMore({
  textID,
  mainContainerID,
  buttonID,
  titleID,
  textHeight,
  isShowingText,
  isClampedText,
  isLongText,
  currentPage,
  maxCharacters,
  setIsShowingText,
  setIsClampedText,
  setIsLongText,
}: ReadMoreProps) {
  const [showing, setShowing] = useState(false);
  const [longText, setLongText] = useState(true);

  function showText() {
    const text = document.getElementById(textID);
    const mainContainer = document.getElementById(mainContainerID);

    if (text && mainContainer) {
      if (isShowingText) {
        setShowing(false);
        setIsShowingText(false);
        setIsClampedText(true);
        text.classList.add("hidden-text");
        mainContainer.style.height = window.innerWidth < 768 ? "100%" : "900px";
        text.style.height =
          window.innerWidth < 768 ? "100%" : `${textHeight}px`;
      } else {
        setShowing(true);
        setIsShowingText(true);
        setIsClampedText(false);
        text.classList.remove("hidden-text");
        mainContainer.style.height = "100%";
        text.style.height = "90%";
      }

      window.scrollTo({
        top: document.getElementById(titleID)?.offsetTop,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const text = document.getElementById(textID);
      const button = document.getElementById(buttonID);

      if (text && button) {
        if (window.innerWidth > 320 && window.innerWidth <= 425)
          setIsLongText(text.innerHTML.length >= 250);
        if (window.innerWidth > 425 && window.innerWidth <= 768)
          setIsLongText(text.innerHTML.length >= 300);
        if (window.innerWidth > 768 && window.innerWidth <= 1200)
          setIsLongText(text.innerHTML.length >= 400);
        if (window.innerWidth > 1200)
          setIsLongText(text.innerHTML.length >= maxCharacters);

        setIsClampedText(
          !(
            text.scrollHeight >= text.clientHeight - 10 &&
            text.scrollHeight <= text.clientHeight + 10
          )
        );

        if (isLongText) {
          if (!isClampedText)
            button.innerHTML = isShowingText ? "Ver menos" : "";
          else {
            button.innerHTML = !isShowingText ? "Ver mais" : "Ver menos";
          }
        } else {
          button.innerHTML = "";
        }
      }
    }
  }, [isClampedText, currentPage]);

  useEffect(() => {
    const text = document.getElementById(textID);
    if (text) {
      if (window.innerWidth > 320 && window.innerWidth <= 425)
        setLongText(text.innerHTML.length >= 250);
      if (window.innerWidth > 425 && window.innerWidth <= 768)
        setLongText(text.innerHTML.length >= 300);
      if (window.innerWidth > 768 && window.innerWidth <= 1200)
        setLongText(text.innerHTML.length >= 400);
      if (window.innerWidth > 1200)
        setLongText(text.innerHTML.length >= maxCharacters);
    }
  }, [currentPage]);

  useEffect(() => {
    if (isClampedText && isLongText) {
      const button = document.getElementById(buttonID);
      if (button) button.innerHTML = "Ver mais";
    }
  }, []);

  return (
    <StyledReadMoreBtn>
      <button id={buttonID} onClick={() => showText()}>
        {""}
      </button>
    </StyledReadMoreBtn>
  );
}
