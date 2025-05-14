import { useEffect } from "react";
import { trackAbandonedCart } from "../api/analyticsAPI";
import { getUserLocation } from "../utils/getUserLocation";
import { v4 as uuidv4 } from "uuid";

export const useAbandonedCartTracker = (cartItems, user) => {
  useEffect(() => {
    if (!cartItems || cartItems.length === 0) return;

    const sessionId = localStorage.getItem("guest_session") || uuidv4();
    localStorage.setItem("guest_session", sessionId);

    const sendCart = async () => {
      try {
        console.log("[AbandonedCart] Collecting user location...");
        const location = await getUserLocation();
        console.log("[AbandonedCart] User Location:", location);

        const userData = user
          ? {
              name: user.name || "Guest",
              phone: user.phone || "N/A",
            }
          : {
              name: "Guest",
              phone: "N/A",
            };

        const payload = {
          sessionId,
          user: userData, // No _id needed
          items: cartItems.map((item) => ({
            product: item._id,
            quantity: item.quantity || 1,
          })),
          location,
        };

        console.log("[AbandonedCart] Sending payload:", payload);

        const response = await trackAbandonedCart(payload);
        console.log("[AbandonedCart] Server response:", response?.data);
      } catch (error) {
        console.error("[AbandonedCart] Error sending cart data:", error);
      }
    };

    const timeout = setTimeout(sendCart, 10000);
    return () => clearTimeout(timeout);
  }, [cartItems, user]);
};
