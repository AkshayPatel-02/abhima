"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, forwardRef } from "react";

type FormFieldType = "text" | "email" | "tel" | "date" | "textarea" | "select";

interface BaseFormFieldProps {
    label: string;
    error?: string;
    type?: FormFieldType;
    required?: boolean;
    className?: string;
}

interface InputProps extends BaseFormFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    type?: "text" | "email" | "tel" | "date";
    options?: never;
}

interface TextareaProps extends BaseFormFieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
    type: "textarea";
    options?: never;
}

interface SelectProps extends BaseFormFieldProps, SelectHTMLAttributes<HTMLSelectElement> {
    type: "select";
    options: { value: string; label: string }[];
}

type FormFieldProps = InputProps | TextareaProps | SelectProps;

/**
 * Design-compliant FormField component following ABHIMA Events Design Document
 * 
 * States:
 * - Default: Charcoal 20% border, Ivory background
 * - Focus: 2px Antique Gold border (0.2s transition)
 * - Error: 2px Red border with error message
 * - Disabled: Charcoal 5% background, Charcoal 50% text
 * 
 * Design Rules:
 * - Poppins Regular 16px for input text
 * - Placeholder: Charcoal 50% opacity
 * - Proper label associations for accessibility
 * - Minimum 44px height for touch targets
 */
const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, FormFieldProps>(
    ({ label, error, type = "text", required, className = "", options, ...props }, ref) => {

        // Base input styles
        const baseInputStyles = `
    w-full px-4 py-3
    font-poppins text-base text-charcoal
    bg-ivory
    border rounded-[4px]
    transition-all duration-200 ease-out
    placeholder:text-charcoal-50
    disabled:bg-charcoal-5 disabled:text-charcoal-50 disabled:border-charcoal-10
    focus:outline-none
    min-h-[44px]
  `;

        // Premium focus effect with subtle glow
        const focusStyles = error
            ? "border-2 border-error focus:border-error focus:ring-2 focus:ring-red-100"
            : "border border-charcoal-20 focus:border-2 focus:border-gold focus:ring-2 focus:ring-gold/10 focus:shadow-sm";

        const inputClassName = `${baseInputStyles} ${focusStyles} ${className}`.trim().replace(/\s+/g, " ");

        const labelId = `field-${label.toLowerCase().replace(/\s+/g, '-')}`;

        return (
            <div className="w-full">
                <label
                    htmlFor={labelId}
                    className="block mb-2 text-charcoal font-poppins text-base font-medium"
                >
                    {label}
                    {required && <span className="text-error ml-1">*</span>}
                </label>

                {type === "textarea" ? (
                    <textarea
                        id={labelId}
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        className={`${combinedInputStyles} min-h-[120px] resize-y`}
                        aria-invalid={error ? "true" : "false"}
                        aria-describedby={error ? `${labelId}-error` : undefined}
                        required={required}
                        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                ) : type === "select" ? (
                    <select
                        id={labelId}
                        ref={ref as React.Ref<HTMLSelectElement>}
                        className={combinedInputStyles}
                        aria-invalid={error ? "true" : "false"}
                        aria-describedby={error ? `${labelId}-error` : undefined}
                        required={required}
                        {...(props as SelectHTMLAttributes<HTMLSelectElement>)}
                    >
                        <option value="">Select an option</option>
                        {options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        id={labelId}
                        type={type}
                        ref={ref as React.Ref<HTMLInputElement>}
                        className={combinedInputStyles}
                        aria-invalid={error ? "true" : "false"}
                        aria-describedby={error ? `${labelId}-error` : undefined}
                        required={required}
                        {...(props as InputHTMLAttributes<HTMLInputElement>)}
                    />
                )}

                {error && (
                    <p
                        id={`${labelId}-error`}
                        className="mt-2 text-sm text-error font-poppins"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

FormField.displayName = "FormField";

export default FormField;
