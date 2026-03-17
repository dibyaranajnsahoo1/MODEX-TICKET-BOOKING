import AppRoutes from "./routes/AppRoutes";
import { BookingProvider } from "./context/BookingContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <AppRoutes />
      </BookingProvider>
    </AuthProvider>
  );
}