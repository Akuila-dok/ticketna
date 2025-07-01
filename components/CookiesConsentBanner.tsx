// components/CookieConsentBanner.tsx
"use client"; // This component needs to be a Client Component

import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link"; // If you have a Privacy Policy page

function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom" // Can be "bottom", "top", "bottom-right", "bottom-left"
      buttonText="Accept & Close"
      cookieName="ticketna-cookie-consent" // A unique name for your cookie
      style={{
        background: "linear-gradient(to right, #0F766E, #134E4A)", // Dark teal gradient
        color: "#E0F2F7", // Light text color
        alignItems: "center",
        padding: "15px",
        fontSize: "15px",
      }}
      buttonStyle={{
        backgroundColor: "#F97316", // Orange-400
        color: "white",
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      declineButtonText="Decline" // Optional: Add a decline button
      declineButtonStyle={{
        backgroundColor: "#EF4444", // Red-500
        color: "white",
        fontSize: "14px",
        fontWeight: "bold",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        marginLeft: "10px", // Spacing between buttons
      }}
      enableDeclineButton // Enable the decline button
      onAccept={() => {
        // Optional: Function to call when cookies are accepted
        console.log("Cookies accepted by user!");
        // You might fire analytics events here
      }}
      onDecline={() => {
        // Optional: Function to call when cookies are declined
        console.log("Cookies declined by user!");
        // You might disable non-essential cookies here
      }}
      // Optional: Delay showing the banner if you want
      // debug={process.env.NODE_ENV === "development"} // Show banner always in development for testing
    >
      This website uses cookies to enhance the user experience. By using our
      site, you agree to our use of cookies.{" "}
      <Link href="/privacy-policy" className="text-orange-300 underline hover:text-orange-200">
        Learn more about our Privacy Policy and Cookie Usage.
      </Link>
    </CookieConsent>
  );
}

export default CookieConsentBanner;