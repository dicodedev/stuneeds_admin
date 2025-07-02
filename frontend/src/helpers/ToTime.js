export default function ToTime(time = null) {
  let value = Math.round(
    time ? new Date(time).getTime() : new Date().getTime()
  );
  return value;
}
