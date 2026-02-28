"use client";

import { useEffect, useRef, useState } from "react";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up";
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  /** When true, direct children animate with staggered delays based on nth-child */
  staggerChildren?: boolean;
};

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  staggerChildren = false,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const animationClass = staggerChildren
    ? isVisible
      ? "animate-on-scroll-visible stagger-children-visible"
      : "animate-on-scroll-pending stagger-children-pending"
    : isVisible
      ? `animate-on-scroll-visible animate-${animation}`
      : "animate-on-scroll-pending";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={
        !staggerChildren && isVisible && delay > 0
          ? { animationDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
