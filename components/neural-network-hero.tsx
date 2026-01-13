'use client';

import { useRef } from 'react';
import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import PurpleBackground from '@/components/ui/purple-background';

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

// Mock SplitText for type safety if needed, but we will use fallback
const SplitText: any = null;

// ===================== HERO =====================
interface HeroProps {
  title: string;
  titleHighlight?: string; // Optional: text to highlight in blue
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
  imageSrc?: string;
}

export default function Hero({
  title,
  titleHighlight,
  description,
  badgeText,
  badgeLabel,
  ctaButtons = [
    { text: "Get started", href: "#get-started", primary: true },
    { text: "View showcase", href: "#showcase" }
  ],
  microDetails,
  imageSrc
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);
  const microItem1Ref = useRef<HTMLLIElement | null>(null);
  const microItem2Ref = useRef<HTMLLIElement | null>(null);
  const microItem3Ref = useRef<HTMLLIElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        if (badgeRef.current && badgeLabel && badgeText) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
        }
        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }
        const microItems = [microItem1Ref.current, microItem2Ref.current, microItem3Ref.current].filter(Boolean) as HTMLElement[];
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 6 });
        }

        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });

        if (badgeRef.current && badgeLabel && badgeText) {
          tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
        }

        if (SplitText && headerRef.current) {
          const split = new SplitText(headerRef.current!, {
            type: 'lines',
            wordsClass: 'lines',
          });

          gsap.set(split.lines, {
            filter: 'blur(16px)',
            yPercent: 30,
            autoAlpha: 0,
            scale: 1.06,
            transformOrigin: '50% 100%',
          });

          tl.to(
            split.lines,
            {
              filter: 'blur(0px)',
              yPercent: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 0.9,
              stagger: 0.15,
            },
            0.1,
          );
        } else {
          // Fallback animation if SplitText is missing
          gsap.set(headerRef.current, { autoAlpha: 0, y: 20 });
          tl.to(headerRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1);
        }

        if (paraRef.current) {
          tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.55');
        }
        if (ctaRef.current) {
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35');
        }
        if (microItems.length > 0) {
          tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.25');
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative h-screen w-screen overflow-hidden">
      <PurpleBackground />

      <div className="relative mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between gap-12 px-6 pb-24 pt-36 sm:pt-44 md:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-6 sm:gap-8 max-w-2xl">
          {badgeLabel && badgeText && (
            <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">{badgeLabel}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-xs font-light tracking-tight text-white/80">{badgeText}</span>
            </div>
          )}

          <h1 ref={headerRef} className="text-left text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            {titleHighlight ? (
              <>
                {title.split(titleHighlight)[0]}
                <span className="text-blue-600">{titleHighlight}</span>
                {title.split(titleHighlight)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          <p ref={paraRef} className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg">
            {description}
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
            {ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${
                  button.primary
                    ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>

          {microDetails && microDetails.length > 0 && (
            <ul ref={microRef} className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60">
              {microDetails.map((detail, index) => {
                const refMap = [microItem1Ref, microItem2Ref, microItem3Ref];
                return (
                  <li key={index} ref={refMap[index]} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {imageSrc && (
          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
             <Image
              src={imageSrc}
              alt="Hero Image"
              fill
              className="rounded-full border-2 border-white/20 object-cover shadow-2xl"
              priority
            />
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent" />
    </section>
  );
}



