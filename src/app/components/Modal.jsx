"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Modal({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        router.back(); // Close modal on "Esc" key
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => router.back()} // Close when clicking outside
    >
      <div className="bg-white p-4 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
