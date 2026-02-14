"use client";

import { useState, FormEvent } from "react";
import { useForm } from "@formspree/react";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";

interface FormData {
    name: string;
    contact: string;
    eventType: string;
    eventDate: string;
    eventLocation: string;
    planningScale: string;
    message: string;
}

const eventTypeOptions = [
    { value: "wedding", label: "Wedding & Ceremonial Celebrations" },
    { value: "corporate", label: "Corporate & Brand Experiences" },
    { value: "private", label: "Private & Social Celebrations" },
    { value: "spiritual", label: "Spiritual & Cultural Events" },
];

const planningScaleOptions = [
    { value: "intimate", label: "Intimate (< 50 guests)" },
    { value: "mid-scale", label: "Mid-scale (50–150 guests)" },
    { value: "large-scale", label: "Large-scale (150–300 guests)" },
    { value: "destination", label: "Destination / Multi-day (300+ guests or multi-city)" },
];

/**
 * Contact Form with lead qualification fields
 * Integrates with Formspree for email delivery
 * 
 * Required Fields (per PRD):
 * - Name
 * - Email/Phone (at least one)
 * - Event Type
 * - Event Date
 * - Event Location
 * - Planning Scale
 */
export default function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "");
    const [formData, setFormData] = useState<FormData>({
        name: "",
        contact: "",
        eventType: "",
        eventDate: "",
        eventLocation: "",
        planningScale: "",
        message: "",
    });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.contact.trim()) {
            newErrors.contact = "Email or phone number is required";
        }

        if (!formData.eventType) {
            newErrors.eventType = "Please select an event type";
        }

        if (!formData.eventDate) {
            newErrors.eventDate = "Event date is required";
        }

        if (!formData.eventLocation.trim()) {
            newErrors.eventLocation = "Event location is required";
        }

        if (!formData.planningScale) {
            newErrors.planningScale = "Please select planning scale";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        await handleSubmit(e);
    };

    if (state.succeeded) {
        return (
            <div className="max-w-2xl mx-auto text-center py-12">
                <div className="mb-6">
                    <svg
                        className="w-16 h-16 mx-auto text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <h3 className="font-poppins font-semibold text-2xl text-charcoal mb-4">
                    Thank you for reaching out
                </h3>
                <p className="font-poppins text-base text-charcoal-70 mb-8 leading-relaxed">
                    Thank you for reaching out to Abhima Events. Our team will connect with you shortly to understand your celebration in detail.
                </p>
                <div className="space-y-3 text-sm text-charcoal-70">
                    <p className="font-poppins">If you don't receive a response within 24 hours, please reach out directly:</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="mailto:info@abhimaevents.com" className="text-gold hover:text-charcoal transition-colors">
                            info@abhimaevents.com
                        </a>
                        <span className="hidden sm:inline text-charcoal-20">|</span>
                        <a href="https://wa.me/919876543210" className="text-gold hover:text-charcoal transition-colors">
                            WhatsApp
                        </a>
                        <span className="hidden sm:inline text-charcoal-20">|</span>
                        <a href="tel:+919876543210" className="text-gold hover:text-charcoal transition-colors">
                            +91 98765 43210
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
            <FormField
                label="Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
                placeholder="Your full name"
            />

            <FormField
                label="Email or Phone"
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                error={errors.contact}
                placeholder="your@email.com or +91 98765 43210"
            />

            <FormField
                label="Event Type"
                type="select"
                required
                options={eventTypeOptions}
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                error={errors.eventType}
            />

            <FormField
                label="Event Date"
                type="date"
                required
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                error={errors.eventDate}
            />

            <FormField
                label="Event Location"
                type="text"
                required
                value={formData.eventLocation}
                onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                error={errors.eventLocation}
                placeholder="City or venue location"
            />

            <FormField
                label="Estimated Planning Scale"
                type="select"
                required
                options={planningScaleOptions}
                value={formData.planningScale}
                onChange={(e) => setFormData({ ...formData, planningScale: e.target.value })}
                error={errors.planningScale}
            />

            <FormField
                label="Message"
                type="textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your celebration (optional)"
            />

            <div className="pt-4">
                <Button
                    type="submit"
                    variant="primary"
                    disabled={state.submitting}
                >
                    {state.submitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
            </div>

            {state.errors && state.errors.length > 0 && (
                <div className="p-4 bg-error/10 border border-error rounded-[4px]">
                    <p className="text-error font-poppins text-sm">
                        There was an error submitting your form. Please try again or contact us directly.
                    </p>
                </div>
            )}
        </form>
    );
}
