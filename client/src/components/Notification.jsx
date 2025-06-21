import React, { useEffect } from "react";

const Notification = ({
    message,
    type = "info",
    show,
    onClose,
    duration = 3000,
}) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose && onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [show, duration, onClose]);

    if (!show) return null;

    const typeStyles = {
        info: "bg-blue-600",
        success: "bg-green-600",
        error: "bg-red-600",
        warning: "bg-yellow-500 text-black",
    };

    return (
        <div
            className={`fixed top-6 right-6 z-[200] min-w-[240px] max-w-xs px-6 py-4 rounded-lg shadow-lg text-white flex items-center gap-3 transition-all duration-300 animate-slide-in ${typeStyles[type]}
                sm:top-6 sm:right-6
                xs:top-2 xs:right-2 xs:min-w-[90vw] xs:max-w-[95vw] xs:px-3 xs:py-3 xs:text-sm
                w-[90vw] max-w-[95vw] sm:w-auto sm:max-w-xs
            `}
            style={{
                left: "auto",
                right: "1.5rem",
                top: "1.5rem",
                // On small screens, override with inline styles
                ...(window.innerWidth < 640
                    ? {
                            right: "0.5rem",
                            top: "0.5rem",
                            minWidth: "90vw",
                            maxWidth: "95vw",
                            padding: "0.75rem",
                            fontSize: "0.95rem",
                        }
                    : {}),
            }}
        >
            <span className="flex-1 break-words">{message}</span>
            <button
                onClick={onClose}
                className="ml-4 text-white hover:text-gray-200 text-xl font-bold focus:outline-none"
                aria-label="Close notification"
                style={{
                    fontSize: window.innerWidth < 640 ? "1.25rem" : "1.5rem",
                    marginLeft: window.innerWidth < 640 ? "0.5rem" : "1rem",
                }}
            >
                &times;
            </button>
            <style>{`
                @media (max-width: 640px) {
                    .notification-mobile {
                        top: 0.5rem !important;
                        right: 0.5rem !important;
                        min-width: 90vw !important;
                        max-width: 95vw !important;
                        padding: 0.75rem !important;
                        font-size: 0.95rem !important;
                    }
                }
                @keyframes slide-in {
                    from { opacity: 0; transform: translateY(-30px) scale(0.95);}
                    to { opacity: 1; transform: translateY(0) scale(1);}
                }
                .animate-slide-in {
                    animation: slide-in 0.3s cubic-bezier(.4,2,.6,1) both;
                }
            `}</style>
        </div>
    );
};

export default Notification;