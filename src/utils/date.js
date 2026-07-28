// ISO 문자열 → "2026. 7. 25." 형태로 간단히 표시합니다.
export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}
