import React, { useRef, useEffect } from "react";
import { isEmpty } from "../../../services/utils";
import { InputContainer } from "./InputIcon.styled";

const InputIIcon = ({
  children,
  focusBorderColor,
  InputContainerclassName,
  InputContainerStyle,
  ...props
}) => {
  const inputRef = useRef();

  useEffect(() => {
    let input = inputRef.current;

    if (!isEmpty(focusBorderColor)) {
      input.addEventListener("focus", (e) => {
        e.target.parentNode.style.border = `1px solid ${focusBorderColor}`;
      });

      input.removeEventListener("focus", (e) => {
        e.target.parentNode.style.border = `1px solid ${focusBorderColor}`;
      });

      input.addEventListener("blur", (e) => {
        e.target.parentNode.style.border = "1px solid var(--bs-gray-200)";
      });

      input.removeEventListener("blur", (e) => {
        e.target.parentNode.style.border = "1px solid var(--bs-gray-200)";
      });
    }

    return () => {
      if (!isEmpty(focusBorderColor)) {
        input.removeEventListener("focus", (e) => {
          e.target.parentNode.style.border = `1px solid ${focusBorderColor}`;
        });

        input.removeEventListener("blur", (e) => {
          e.target.parentNode.style.border = "1px solid var(--bs-gray-200)";
        });
      }
    };
  }, []);

  return (
    <InputContainer
      className={InputContainerclassName}
      style={InputContainerStyle}
    >
      {children}
      <input {...props} ref={inputRef} />
    </InputContainer>
  );
};

export default InputIIcon;
