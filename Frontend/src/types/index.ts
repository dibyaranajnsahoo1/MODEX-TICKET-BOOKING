export interface Show {
  id: number;
  name: string;
  start_time: string;
  total_seats: number;
}

export interface Seat {
  seat_number: number;
  status: "AVAILABLE" | "BOOKED" | "LOCKED";
}