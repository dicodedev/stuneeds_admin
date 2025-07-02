export default function PlanPrice(plan, frequency) {
  if (!plan || !frequency) {
    return 0;
  }

  let price = 0;
  if (frequency == "annual") {
    price = plan.price;
  } else if (frequency == "quarter") {
    price = plan.quarter_price;
  } else {
    price = plan.bi_price;
  }

  return Number(price);
}
