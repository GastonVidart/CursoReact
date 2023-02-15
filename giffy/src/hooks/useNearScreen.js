import { useEffect, useRef, useState } from "react";

export default function useNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    Promise.resolve(IntersectionObserver ?? import("intersection-observer")).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      element && observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
