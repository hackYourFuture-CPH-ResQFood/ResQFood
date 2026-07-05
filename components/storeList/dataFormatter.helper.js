import { getStoreName } from "@/app/brands";
import formatDistance from "@/utils/formatDistance";
import {
  getTodaySchedule,
  getStatus,
  getWorkingHours,
} from "@/utils/formatWorkingStatus";

export default function dataFormatter(store) {
  if (!store) return null;

  const todaySchedule = getTodaySchedule(store.hours);
  const currentStatus = getStatus(todaySchedule?.closed, todaySchedule?.close);

  const formattedObj = {
    name: getStoreName(store.brand),
    brand: store.brand,
    address: store.address?.street,
    distance: formatDistance(store?.distance_km),
    status: currentStatus,
    workingHours: getWorkingHours(
      currentStatus,
      todaySchedule?.open,
      todaySchedule?.close,
    ),
  };

  return formattedObj;
}
