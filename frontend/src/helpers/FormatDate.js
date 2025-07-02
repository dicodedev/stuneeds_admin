// formatDate.js

export function formatDate(dateInput) {
    const date = new Date(dateInput);
  
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    const ampm = hours >= 12 ? "pm" : "am";
    const hour12 = hours % 12 || 12;
  
    const getOrdinalSuffix = (n) => {
      if (n >= 11 && n <= 13) return n + "th";
      switch (n % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
        default:
          return n + "th";
      }
    };
  
    return `${getOrdinalSuffix(day)} ${month}, ${hour12}.${minutes}${ampm}`;
  }
  