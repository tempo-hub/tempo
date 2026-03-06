import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp'
    size?: 'sm' | 'md' | 'lg' | 'icon'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-md",
            secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md",
            outline: "border-2 border-primary text-primary hover:bg-primary/5",
            ghost: "text-secondary hover:bg-secondary/10",
            whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg font-bold",
        }
        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
            icon: "p-2",
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
    <div className={cn("bg-white rounded-xl shadow-sm border border-border overflow-hidden", className)}>
        {children}
    </div>
)
