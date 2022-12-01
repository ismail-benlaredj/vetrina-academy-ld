import { useRef, useEffect } from "react";

export const useHorizontalScroll = (scrollWidth: number) => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current as unknown as HTMLElement;
    if (el) {
      const onWheel = (e: { deltaY: number; preventDefault: () => void; }) => {
        console.log(e.deltaY);
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + scrollWidth * e.deltaY,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  });
  return elRef;
};
