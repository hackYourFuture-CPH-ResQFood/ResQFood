export default function formatTime(timeString) {
  const date = new Date(timeString);

  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}
