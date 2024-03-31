import { RefObject, useEffect } from "react";

const useKeyPress = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const keyPressHandler = () => {
      ref.current?.focus();
    };
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [ref]);
};

export default useKeyPress;
