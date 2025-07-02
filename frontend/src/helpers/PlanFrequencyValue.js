export default function PlanFrequencyValue(value) {
  if (!value) {
    return "";
  }

  const frequencies = {
    quarter: "Quarterly",
    annual: "Annually",
  };

  return frequencies[value] ?? "Bi-annually";
}
