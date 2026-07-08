import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost" | "dark";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary:
                "bg-charcoal text-paper hover:bg-brass hover:text-white transition-colors duration-300",
            dark:
                "bg-brass text-white hover:bg-charcoal transition-colors duration-300",
            outline:
                "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper transition-colors duration-300",
            ghost: "text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors",
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

/** A small labelled section header used across pages. */
export function SectionKicker({
    index,
    label,
    className,
}: {
    index?: string;
    label: string;
    className?: string;
}) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {index && <span className="index-num text-[12px]">{index}</span>}
            <span className="h-px w-8 bg-brass/50" />
            <span className="eyebrow">{label}</span>
        </div>
    );
}
