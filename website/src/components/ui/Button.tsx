import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "default" | "small" | "large";

interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    className?: string;
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    href?: never;
}

interface ButtonAsLinkProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
    href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

/**
 * Design-compliant Button component following ABHIMA Events Design Document
 * 
 * Variants:
 * - primary: Antique Gold background, Ivory text (main conversion actions)
 * - secondary: Transparent background, Charcoal border (lower-priority actions)
 * - text: No background, underlined text (tertiary actions)
 * 
 * Premium enhancements:
 * - Subtle scale on hover (1.02x) and active press (0.98x)
 * - Refined shadow elevation
 * - Smooth transitions (0.2s ease-out)
 */
export default function Button({
    variant = "primary",
    size = "default",
    children,
    className = "",
    href,
    ...props
}: ButtonProps) {

    // Base styles shared across variants
    const baseStyles = `
    inline-flex items-center justify-center
    font-poppins font-medium text-base
    rounded-[4px]
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-4 focus:ring-offset-ivory
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
    group
  `;

    // Premium hover effect: subtle scale and refined shadow
    const premiumHoverEffect = `
    hover:transform hover:scale-[1.02]
    active:scale-[0.98]
  `;

    // Variant-specific styles
    const variantStyles = {
        primary: `
      bg-gold text-ivory
      hover:bg-charcoal-90
      shadow-sm hover:shadow-md
      ${premiumHoverEffect}
    `,
        secondary: `
      bg-transparent text-charcoal border-2 border-charcoal
      hover:text-gold hover:border-gold
      ${premiumHoverEffect}
    `,
        text: `
      bg-transparent text-charcoal underline decoration-1 underline-offset-4
      hover:text-gold hover:decoration-gold
      px-0
    `,
    };

    // Size styles
    const sizeStyles = {
        default: "px-8 py-4 min-h-[56px]",
        small: "px-6 py-3 min-h-[44px] text-sm",
        large: "px-10 py-5 min-h-[64px] text-lg",
    };

    // Mobile full-width for primary and secondary
    const mobileStyles =
        variant !== "text" ? "w-full sm:w-auto" : "";

    const buttonClasses = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${mobileStyles}
    ${className}
  `.trim().replace(/\s+/g, " ");

    if (href) {
        return (
            <Link
                href={href}
                className={buttonClasses}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
}
