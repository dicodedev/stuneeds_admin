export default function WhatsappRedirect(user, condition) {
  let message = user.employer_id
    ? `Hello I'm ${
        user?.first_name + " " + user?.last_name
      }, I'm an employee of ${user?.employer.company_name}, consulting for ${
        condition?.title
      }.`
    : `Hello I'm ${
        user?.first_name + " " + user?.last_name
      }, I just made a payment to consult for ${condition?.title}.`;

  return `${import.meta.env.VITE_WHATSAPP}/?text=${message}`;
}
