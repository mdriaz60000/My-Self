
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type CursorPoint = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState<CursorPoint>({ x: -100, y: -100 });
  const [trail, setTrail] = useState<CursorPoint[]>([]);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)"
    );

    if (!media.matches) return;

    const handleMove = (event: MouseEvent) => {
      const point = { x: event.clientX, y: event.clientY };

      setPosition(point);
      setVisible(true);

      setTrail((previous) => [point, ...previous].slice(0, 5));

      const target = event.target as HTMLElement | null;
      setHovering(
        Boolean(
          target?.closest(
            'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
          )
        )
      );
    };

    const handleLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <>
      {/* Hide native cursor only on desktop fine-pointer devices */}
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) and (min-width: 1024px) {
          html.custom-cursor-active,
          html.custom-cursor-active body,
          html.custom-cursor-active body a,
          html.custom-cursor-active body button,
          html.custom-cursor-active body input,
          html.custom-cursor-active body textarea,
          html.custom-cursor-active body select,
          html.custom-cursor-active body [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>

      <CursorActivation />

      {visible && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[10000] hidden lg:block"
        >
          {/* Trailing cyber particles */}
          {trail.slice(1, 5).map((point, index) => (
            <motion.span
              key={index}
              className="absolute block rounded-full bg-gold"
              animate={{
                x: point.x - (index + 1) * 1.5,
                y: point.y - (index + 1) * 1.5,
                opacity: 0.36 - index * 0.075,
                scale: 1 - index * 0.15,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              style={{
                left: 0,
                top: 0,
                width: 5 - index * 0.7,
                height: 5 - index * 0.7,
                boxShadow: "0 0 12px #c6a36a",
              }}
            />
          ))}

          {/* Main cyber reticle */}
          <motion.div
            className="absolute left-0 top-0 flex items-center justify-center"
            animate={{
              x: position.x,
              y: position.y,
              scale: hovering ? 1.35 : 1,
            }}
            transition={{
              x: { type: "spring", stiffness: 700, damping: 38, mass: 0.35 },
              y: { type: "spring", stiffness: 700, damping: 38, mass: 0.35 },
              scale: { duration: 0.2 },
            }}
            style={{ translateX: "-50%", translateY: "-50%" }}
          >
            <motion.div
              animate={{
                rotate: hovering ? 135 : 0,
                width: hovering ? 38 : 28,
                height: hovering ? 38 : 28,
              }}
              transition={{ duration: 0.25 }}
              className="relative flex items-center justify-center"
            >
              {/* Four corner brackets */}
              <svg
                viewBox="0 0 32 32"
                className="absolute inset-0 h-full w-full overflow-visible"
                fill="none"
              >
                <path
                  d="M11 2H3V11 M21 2H29V11 M29 21V29H21 M11 29H3V21"
                  stroke="#c6a36a"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>

              {/* Center point */}
              <motion.span
                animate={{
                  scale: hovering ? 0.6 : [1, 1.25, 1],
                  opacity: hovering ? 0.6 : 1,
                }}
                transition={{
                  scale: { duration: 1.5, repeat: hovering ? 0 : Infinity },
                }}
                className="h-1.5 w-1.5 rounded-full bg-gold"
                style={{ boxShadow: "0 0 10px #c6a36a" }}
              />
            </motion.div>
          </motion.div>

          {/* Soft ambient glow */}
          <motion.div
            className="absolute left-0 top-0 h-10 w-10 rounded-full"
            animate={{
              x: position.x,
              y: position.y,
              scale: hovering ? 1.5 : 1,
              opacity: hovering ? 0.17 : 0.09,
            }}
            transition={{
              x: { type: "spring", stiffness: 180, damping: 24 },
              y: { type: "spring", stiffness: 180, damping: 24 },
              duration: 0.2,
            }}
            style={{
              translateX: "-50%",
              translateY: "-50%",
              background:
                "radial-gradient(circle, rgba(198,163,106,0.9) 0%, rgba(198,163,106,0) 72%)",
              filter: "blur(3px)",
            }}
          />
        </div>
      )}
    </>
  );
}

function CursorActivation() {
  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)"
    );

    const update = () => {
      document.documentElement.classList.toggle(
        "custom-cursor-active",
        media.matches
      );
    };

    update();
    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return null;
}
