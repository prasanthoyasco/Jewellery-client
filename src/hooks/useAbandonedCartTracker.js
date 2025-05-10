import { useEffect } from "react";
import { trackAbandonedCart } from "../api/analytics";
import { getUserLocation } from "../utils/getUserLocation";
import { v4 as uuidv4 } from "uuid";

export const useAbandonedCartTracker = (cartItems) => {
  useEffect(() => {
    if (!cartItems || cartItems.length === 0) return;

    const sessionId = localStorage.getItem("guest_session") || uuidv4();
    localStorage.setItem("guest_session", sessionId);

    const sendCart = async () => {
      const location = await getUserLocation();
      await trackAbandonedCart({
        sessionId,
        products: cartItems.map(item => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        location,
      });
    };

    const timeout = setTimeout(sendCart, 10000); // send after 10s inactivity
    return () => clearTimeout(timeout);
  }, [cartItems]);
};

/*
const cartItems = useCartItems(); // from your context or redux
useAbandonedCartTracker(cartItems);
*/