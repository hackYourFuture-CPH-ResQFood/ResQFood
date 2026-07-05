export default function formatDistance(distance) {
  if (distance == null) return null;
  return distance > 1
    ? `${Number(distance).toPrecision(1)}km`
    : `${Math.round(distance * 1000)}m`;
}
