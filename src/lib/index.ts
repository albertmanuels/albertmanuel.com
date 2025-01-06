export function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}