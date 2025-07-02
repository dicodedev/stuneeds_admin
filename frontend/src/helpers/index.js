export function CustomCondition(data) {
  let message = `Hello I'm ${data.full_name}, ${data.condition}.`;
  return `${import.meta.env.VITE_WHATSAPP}/?text=${message}`;
}
