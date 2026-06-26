export function getExpiryLabel(endTime, now = new Date()) {
  const end = new Date(endTime);
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));

  return diff > 0 ? `${diff} day${diff === 1 ? "" : "s"} left` : "Ends today";
}

export function isExpired(endTime, now = new Date()) {
  return new Date(endTime) < now;
}