import { useEffect, useState } from "react";

type ResponseType = {
  isScrolled: boolean;
};

export default function useScroll(): ResponseType {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handler = ({ target }: any) => {
    const scrollTopPixels: number = target.scrollingElement.scrollTop;
    const PIXELS_TO_ANIMATE = 20;

    if (scrollTopPixels > PIXELS_TO_ANIMATE) {
      if (isScrolled == false) setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return {
    isScrolled,
  };
}
