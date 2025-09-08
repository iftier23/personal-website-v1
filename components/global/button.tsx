import clsx from "clsx";
import Link from "next/link";
import type { ButtonProps, ButtonVariant } from "@/types";

const ButtonVariant: ButtonVariant = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    black: "btn--black",
    white: "btn--white",
    text: "btn--text"
};

export const Button: React.FC<ButtonProps> = ({ children, link = "", action = "button", variant = "primary", className = "", mode = "link", target = "_self" }: ButtonProps) => {
    const isLink = mode === "link" && !!link;
    const Element: any = isLink ? Link : "button";

    const baseClass = clsx("btn", ButtonVariant[variant], className);

    if (isLink) {
        return (
            <Element role="button" href={link} target={target} className={baseClass}>
                {children}
            </Element>
        );
    }

    return (
        <Element role="button" type={action} className={baseClass}>
            {children}
        </Element>
    );
};
