import { useEffect, useRef, useState } from "react";

function TopicsMarqueeToggle({ topics }: { topics?: string[] | null }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () =>
    requestAnimationFrame(() => {
      const c = containerRef.current;
      const t = trackRef.current;
      if (!c || !t) return setIsOverflowing(false);
      setIsOverflowing(t.scrollWidth > c.clientWidth);
    });

  useEffect(() => {
    checkOverflow();
    const onResize = () => checkOverflow();
    window.addEventListener("resize", onResize);

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(checkOverflow)
        : null;
    if (containerRef.current && ro) ro.observe(containerRef.current);
    if (trackRef.current && ro) ro.observe(trackRef.current);

    return () => {
      window.removeEventListener("resize", onResize);
      ro?.disconnect();
    };
  }, [topics]);

  if (!topics || topics.length === 0) return null;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={containerRef}
      className="marquee w-full justify-between hidden transition-all duration-500 ease-in-out group-hover:block text-white"
      onMouseEnter={checkOverflow}
    >
      <div
        ref={trackRef}
        className="marquee-track flex gap-2"
        style={{
          animation: !prefersReduced && isOverflowing ? undefined : "none",
        }}
      >
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className={`${
              idx === 0 ? "bg-dark-grey" : "bg-white"
            } flex justify-center items-center text-dark-blue text-base-sm px-2 py-1 shadow-lg rounded-full`}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsMarqueeToggle;
