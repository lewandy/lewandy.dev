import { useMediaQuery } from "react-responsive";

type ResponseType = {
  isDesktopOrLaptop: boolean;
  isBigScreen: boolean;
  isTabletOrMobile: boolean;
  isTabletOrMobileDevice: boolean;
};

export default function useScroll(): ResponseType {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isTabletOrMobileDevice,
  };
}
