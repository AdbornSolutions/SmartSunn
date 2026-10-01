import emailjs from "@emailjs/browser";

export async function submitInquiry(data) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS is not configured");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      location: data.location,
      message: data.message,
    },
    publicKey
  );
}