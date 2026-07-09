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
                "bg-blue text-white hover:bg-blue-dim transition-colors duration-300",
            dark:
                "bg-navy text-white hover:bg-blue transition-colors duration-300",
            light:
                "bg-white text-navy hover:bg-sky transition-colors duration-300",
            outline:
                "border border-steel/20 text-steel hover:border-blue hover:text-blue transition-colors duration-300",
            ghost: "text-steel/70 hover:text-steel hover:bg-steel/5 transition-colors",
        };

        const sizes = {
            sm: "h-9 px-5 text-[13px]",
            md: "h-11 px-7 text-[14px]",
            lg: "h-12 md:h-14 px-8 md:px-9 text-[15px]",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium disabled:opacity-50 disabled:pointer-events-none",
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

/** Small labelled section header: blue dot + sentence-case label. */
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
        <div className={cn("flex items-center gap-2.5", className)}>
            <span className={cn("h-2 w-2 rounded-full", dark ? "bg-blue-bright" : "bg-blue")} />
            <span className={dark ? "eyebrow-dark" : "eyebrow"}>{label}</span>
        </div>
    );
}
