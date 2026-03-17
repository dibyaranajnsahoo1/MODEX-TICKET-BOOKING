export default function Alert({
  status,
  context
}: {
  status: string;
  context?: "booking" | "admin";
}) {
  if (!status) return null;

  const type =
    status === "CONFIRMED"
      ? "success"
      : status === "FAILED"
      ? "error"
      : "warning";

  let message = status;

  if (context === "booking") {
    message =
      status === "CONFIRMED"
        ? "Booking Successful 🎉"
        : status === "FAILED"
        ? "Booking Failed ❌"
        : status;
  }

  if (context === "admin") {
    message =
      status === "CONFIRMED"
        ? "Added Successfully ✅"
        : status === "FAILED"
        ? "Failed to Add ❌"
        : status;
  }

  return (
    <div className={`alert ${type}`}>
      <span className="alert-icon">
        {type === "success" ? "✅" : type === "error" ? "❌" : "⚠️"}
      </span>
      <span className="alert-text">{message}</span>
    </div>
  );
}