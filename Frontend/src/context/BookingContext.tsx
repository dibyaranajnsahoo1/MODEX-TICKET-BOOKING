import { createContext, useContext, useState } from "react";

const BookingContext = createContext<any>(null);

export const BookingProvider = ({ children }: any) => {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [status, setStatus] = useState("");

  return (
    
    <BookingContext.Provider value={{
      selectedSeats,
      setSelectedSeats,
      status,
      setStatus
    }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);