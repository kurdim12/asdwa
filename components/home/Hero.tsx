"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/primitives";
import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { COMPANY_DATA } from "@/lib/data";

export function Hero() {
    const ref = useRef(null);
    const { language, t, direction } = useLanguage();
    const { hero } = COMPANY_DATA;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="h-screen w-full relative overflow-hidden flex items-center justify-center">
            {/* Video Background with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <video
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 grayscale"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center" dir={direction}>
                <Reveal width="100%">
                    <h2 className="text-primary font-heading tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
                        {t(hero.est)}
                    </h2>
                </Reveal>

                <div className="relative">
                    <Reveal width="100%" delay={0.4}>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                            {language === 'ar' ? (
                                <>
                                    {hero.title.ar.split(' ')[0]} <br /> <span className="text-stroke">{hero.title.ar.split(' ').slice(1).join(' ')}</span>
                                </>
                            ) : (
                                <>
                                    Building <br /> <span className="text-stroke">Legacy</span>
                                </>
                            )}
                        </h1>
                    </Reveal>
                </div>

                <Reveal width="100%" delay={0.6}>
                    <p className="text-white/70 max-w-2xl text-lg md:text-xl font-body leading-relaxed mb-8">
                        {t(hero.subtitle)}
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.8}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link href="/projects">
                            <Button size="lg" variant="primary">{t(hero.cta.portfolio)}</Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline">{t(hero.cta.contact)}</Button>
                        </Link>
                    </div>
                </Reveal>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">{language === 'ar' ? 'تمرير' : 'Scroll'}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </section>
    );
}
