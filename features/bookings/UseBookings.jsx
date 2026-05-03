import { useState, useEffect } from "react";

export function useBookings() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data
    setTimeout(() => {
      setBookings([
        {
          id: 1,
          cabins: { name: "Cabin 101" },
          guests: { fullName: "John Doe", email: "john@example.com" },
          startDate: "2026-03-24",
          endDate: "2026-03-26",
          numNights: 2,
          status: "unconfirmed",
          totalPrice: 200,
        },
        {
          id: 2,
          cabins: { name: "Cabin 102" },
          guests: { fullName: "Jane Smith", email: "jane@example.com" },
          startDate: "2026-03-25",
          endDate: "2026-03-27",
          numNights: 2,
          status: "checked-in",
          totalPrice: 300,
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  return { bookings, count: bookings.length, isLoading };
}
