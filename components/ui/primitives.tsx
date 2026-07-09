import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "dark" | "light";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary:
                "bg-blue text-white hover:bg-navy transition-colors duration-300",
            dark:
                "bg-navy text-white hover:bg-blue transition-colors duration-300",
            light:
                "bg-white text-navy hover:bg-sky transition-colors duration-300",
            outline:
                "border border-steel/30 text-steel hover:border-blue hover:bg-blue hover:text-white transition-colors duration-300",
            ghost: "text-steel/70 hover:text-steel hover:bg-steel/5 transition-colors",
        };

        const sizes = {
            sm: "h-9 px-4 text-[12px]",
            md: "h-11 px-6 text-[13px]",
            lg: "h-14 px-9 text-[13px]",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.18em] disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export function Section({
    children,
    className,
    id,
    inset = true,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
    inset?: boolean;
}) {
    return (
        <section id={id} className={cn("py-20 md:py-28 relative", className)}>
            {inset ? (
                <div className="mx-auto max-w-8xl px-6 md:px-10 lg:px-16 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
}

/** Technical section header: index numeral + rule + mono label. */
export function SectionKicker({
    index,
    label,
    className,
    dark = false,
}: {
    index?: string;
    label: string;
    className?: string;
    dark?: boolean;
}) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {index && (
                <span
                    className={cn(
                        "font-mono text-[12px] tabular-nums",
                        dark ? "text-blue-bright" : "text-blue"
                    )}
                >
                    {index}
                </span>
            )}
            <span className={cn("h-px w-10", dark ? "bg-blue-bright/50" : "bg-blue/40")} />
            <span className={dark ? "eyebrow-dark" : "eyebrow"}>{label}</span>
        </div>
    );
}
