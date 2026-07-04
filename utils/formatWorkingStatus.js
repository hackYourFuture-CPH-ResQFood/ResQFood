import closingTimeCountdown from "./closingTime";
import formatTime from "./formatTime";

export const StoreStatus = {
  OPEN: "open",
  CLOSING_SOON: "closingSoon",
  CLOSED: "closed",
};

export const CLOSING_SOON_THRESHOLD_HOURS = 1;

export function getTodaySchedule(hours) {
  return hours?.[0];
}

export function getStatus(isClosed, closingTime) {
  const hoursUntilClosing = closingTimeCountdown(closingTime);

  if (isClosed || hoursUntilClosing <= 0) return StoreStatus.CLOSED;

  if (hoursUntilClosing > CLOSING_SOON_THRESHOLD_HOURS) return StoreStatus.OPEN;

  return StoreStatus.CLOSING_SOON;
}

export function getWorkingHours(status, openingTime, closingTime) {
  if (status === "closed") return `Opens at ${formatTime(openingTime)}`;
  if (status === "open") return `Closing at ${formatTime(closingTime)}`;

  return `Closing soon at ${formatTime(closingTime)}`;
}
