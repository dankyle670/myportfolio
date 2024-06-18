function getCurrentTimeInItaly() {
  const now = /* @__PURE__ */ new Date();
  const offsetItaly = 2;
  now.setHours(now.getUTCHours() + offsetItaly);
  return now;
}
function formatTimeForItaly(date) {
  const options = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    // This will format the time in 12-hour format with AM/PM
    timeZone: "Europe/Rome"
  };
  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " CET";
  return formattedTime;
}
function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export { formatTimeForItaly as a, formatDate as f, getCurrentTimeInItaly as g };
