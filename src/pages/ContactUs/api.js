import emailjs from "@emailjs/browser";

export async function submitInquiry(data) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log("EmailJS Config:", {
    serviceId,
    templateId,
    publicKey: publicKey ? "LOADED" : "MISSING",
  });

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are missing");
  }

  try {
    const response = await emailjs.send(
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

    console.log("EMAIL SENT SUCCESSFULLY:", response);

    return response;
  } catch (error) {
    console.error("EMAILJS ERROR:", error);
    console.error("STATUS:", error?.status);
    console.error("TEXT:", error?.text);

    throw error;
  }
}