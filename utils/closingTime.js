export default function closingTimeCountdown(closingTime) {
  const now = new Date();
  const closing = new Date(closingTime);

  return (closing.getTime() - now.getTime()) / 3600000;
}
