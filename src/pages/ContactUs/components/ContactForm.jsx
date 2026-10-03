import { useState } from "react";

import Reveal from "../../../components/common/Reveal";
import SectionTag from "../../../components/common/SectionTag";

import { contactDetails, contactFormText } from "../data";
import { submitInquiry } from "../api";

const empty = {
  name: "",
  phone: "",
  email: "",
  location: "",
  message: "",
  website: "",
};

// "+91 98765 43210", "098765-43210", "9876543210"
// -> "9876543210"
const tenDigits = (value) => {
  const digits = value.replace(/\D/g, "");

  return digits.length > 10 ? digits.slice(-10) : digits;
};

// Returns validation errors.
// Empty object = form is valid.
function validate(v) {
  const errors = {};

  if (v.name.trim().length < 2) {
    errors.name = "Please enter your name";
  }

  if (!/^[6-9]\d{9}$/.test(tenDigits(v.phone))) {
    errors.phone = "Enter a valid 10-digit mobile number";
  }

  if (
    v.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())
  ) {
    errors.email = "Enter a valid email address";
  }

  if (v.message.trim().length < 10) {
    errors.message =
      "Please tell us a little more (at least 10 characters)";
  }

  return errors;
}

const inputClass = (hasError) =>
  `mt-[7px] w-full rounded-[6px] border bg-white px-[14px] font-inter text-[16px] text-[#101E33] outline-none transition placeholder:text-[#9AA3AD] focus:border-[#FFC629] focus:ring-2 focus:ring-[#FFC629]/40 sm:text-[15px] ${
    hasError ? "border-red-500" : "border-[#3A4552]/70"
  }`;

function Field({ label, optional, error, children }) {
  return (
    <label className="block">
      <span className="font-inter text-[13px] font-semibold text-[#101E33]">
        {label}

        {optional && (
          <span className="font-normal text-[#7B8591]">
            {" "}
            (optional)
          </span>
        )}
      </span>

      {children}

      {error && (
        <span
          role="alert"
          className="mt-1 block font-inter text-[12.5px] text-red-600"
        >
          {error}
        </span>
      )}
    </label>
  );
}

function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  // idle | sending | sent | error

  const update = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    const found = validate(values);

    setErrors(found);

    if (Object.keys(found).length) return;

    // Hidden spam-trap field
    if (values.website) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      await submitInquiry({
        name: values.name.trim(),
        phone: tenDigits(values.phone),
        email: values.email.trim(),
        location: values.location.trim(),
        message: values.message.trim(),
      });

      setValues(empty);
      setStatus("sent");
    } catch (err) {
      console.error("Contact form:", err);
      setStatus("error");
    }
  };

  const cardClass =
    "rounded-[24px] bg-[#F8F8F8] p-5 shadow-[0_16px_50px_rgba(6,30,45,0.18)] sm:p-8 lg:rounded-[28px] lg:p-[34px]";

  // ============================================================
  // SUCCESS / THANK YOU STATE
  // ============================================================

  if (status === "sent") {
    return (
      <Reveal delay={120}>
        <div
          role="status"
          className={`
            ${cardClass}
            flex
            min-h-[360px]
            flex-col
            items-center
            justify-center
            py-12
            text-center
            sm:min-h-[400px]
            sm:py-16
          `}
        >
          {/* Success Icon */}
          <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#1FB877]">
            <svg
              viewBox="0 0 16 16"
              className="h-[28px] w-[28px]"
              aria-hidden="true"
            >
              <path
                d="m3.5 8.4 3 3 6-6.4"
                fill="none"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* Thank You Heading */}
          <h3 className="mt-5 w-full text-center font-manrope text-[26px] font-semibold leading-[34px] text-[#101E33] sm:text-[28px]">
            {contactFormText.success.title}
          </h3>

          {/* Success Description */}
          <p className="mx-auto mt-3 w-full max-w-[430px] text-center font-inter text-[15.5px] leading-[26px] text-[#4B5663]">
            {contactFormText.success.text}
          </p>

          {/* Send Another Request */}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            style={{
              backgroundColor: "#FFC629",
              color: "#0B1F2E",
            }}
           className="
  mt-7
  flex
  h-[52px]
  min-w-[220px]
  items-center
  justify-center
  rounded-full
  px-8
  font-manrope
  text-[16px]
  font-semibold
  transition
  duration-200
  hover:bg-[#ffd24d]
"
          >
            Send another request
          </button>
        </div>
      </Reveal>
    );
  }

  const sending = status === "sending";

  // ============================================================
  // CONTACT FORM
  // ============================================================

  return (
    <Reveal delay={120}>
      <form
        onSubmit={onSubmit}
        noValidate
        className={`relative overflow-hidden ${cardClass}`}
      >
        {/* Form Tag */}
        <SectionTag>{contactFormText.tag}</SectionTag>

        {/* Form Heading */}
        <h2
          className="
            mt-[6px]
            font-manrope
            text-[28px]
            font-semibold
            leading-[1.25]
            text-[#101E33]
            sm:text-[32px]
            lg:text-[34px]
            lg:leading-[44px]
          "
        >
          {contactFormText.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        {/* Form Description */}
        <p className="mt-2 font-inter text-[15px] leading-[24px] text-[#1A1A1A]">
          {contactFormText.text}
        </p>

        {/* ======================================================
            FORM FIELDS
        ======================================================= */}

        <div className="mt-6 grid gap-x-4 gap-y-4 sm:grid-cols-2">
          {/* Full Name */}
          <Field label="Full Name" error={errors.name}>
            <input
              name="name"
              value={values.name}
              onChange={update}
              autoComplete="name"
              placeholder="Enter your name"
              aria-invalid={Boolean(errors.name)}
              className={`${inputClass(errors.name)} h-[46px]`}
            />
          </Field>

          {/* Phone Number */}
          <Field label="Phone Number" error={errors.phone}>
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              value={values.phone}
              onChange={update}
              autoComplete="tel"
              placeholder="Enter your mobile number"
              aria-invalid={Boolean(errors.phone)}
              className={`${inputClass(errors.phone)} h-[46px]`}
            />
          </Field>

          {/* Email */}
          <Field
            label="Email Address"
            optional
            error={errors.email}
          >
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={update}
              autoComplete="email"
              placeholder="Enter your email address"
              aria-invalid={Boolean(errors.email)}
              className={`${inputClass(errors.email)} h-[46px]`}
            />
          </Field>

          {/* Location */}
          <Field label="Location" optional>
            <input
              name="location"
              value={values.location}
              onChange={update}
              autoComplete="address-level2"
              placeholder="Enter your city/location"
              className={`${inputClass(false)} h-[46px]`}
            />
          </Field>

          {/* Message */}
          <div className="sm:col-span-2">
            <Field
              label="Message / Requirement"
              error={errors.message}
            >
              <textarea
                name="message"
                rows={4}
                value={values.message}
                onChange={update}
                placeholder="Tell us about your solar requirement"
                aria-invalid={Boolean(errors.message)}
                className={`${inputClass(
                  errors.message
                )} min-h-[110px] resize-y py-3`}
              />
            </Field>
          </div>
        </div>

        {/* ======================================================
            HIDDEN SPAM TRAP
        ======================================================= */}

        <div
          className="absolute -left-[9999px] top-0"
          aria-hidden="true"
        >
          <label>
            Website

            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={update}
            />
          </label>
        </div>

        {/* ======================================================
            ERROR MESSAGE
        ======================================================= */}

        {status === "error" && (
          <p
            role="alert"
            className="
              mt-4
              rounded-[8px]
              bg-red-50
              px-4
              py-3
              font-inter
              text-[14px]
              leading-[22px]
              text-red-700
            "
          >
            Sorry, we couldn’t send your request. Please try again, or
            call us on{" "}
            <a
              href={`tel:+91${contactDetails.phones[0]}`}
              className="font-semibold underline"
            >
              {contactDetails.phones[0]}
            </a>
            .
          </p>
        )}

        {/* ======================================================
            GREEN SUBMIT BUTTON
        ======================================================= */}

        <button
          type="submit"
          disabled={sending}
          style={{
            backgroundColor: sending ? "#8ACFAF" : "#1FB877",
            color: "#FFFFFF",
            WebkitTextFillColor: "#FFFFFF",
          }}
          className="
            mt-5
            flex
            h-[50px]
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-2
            rounded-[6px]
            font-inter
            text-[15px]
            font-bold
            !text-white
            opacity-100
            transition-all
            duration-200
            hover:bg-[#179A64]
            disabled:cursor-not-allowed
          "
        >
          {sending ? (
            <span
              style={{
                color: "#FFFFFF",
                WebkitTextFillColor: "#FFFFFF",
              }}
              className="!text-white"
            >
              Sending...
            </span>
          ) : (
            <>
              <span
                style={{
                  color: "#FFFFFF",
                  WebkitTextFillColor: "#FFFFFF",
                }}
                className="!text-white"
              >
                Submit Request
              </span>

              <svg
                viewBox="0 0 16 16"
                className="h-[16px] w-[16px]"
                aria-hidden="true"
              >
                <path
                  d="M2.5 8h10m0 0L8.5 4M12.5 8l-4 4"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          )}
        </button>
      </form>
    </Reveal>
  );
}

export default ContactForm;