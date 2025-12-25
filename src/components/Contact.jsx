import { useState } from "react";
import "./components.css";
import { useMutation } from "@tanstack/react-query";
import { Submit } from "../api/Submit";

function Contact() {
  const [names, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("job");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [successText, setSuccessText] = useState("");
  const [successType, setSuccessType] = useState("");

  const isDisabled =
    !names || !email || !phone || !purpose || message.length < 25;

  const mutation = useMutation({
    mutationFn: Submit,
    onSuccess: () => {
      console.log("Form Submitted");
      setSuccessText("✅Your Form Submitted Successfully");
      setSuccessType("success");
      setTimeout(() => setSuccessText(""), 3000);
    },
    onError: () => {
      console.log("Error Data not submitted");
      setSuccessText("❌Error Submitting Form");
      setSuccessType("error");
      setTimeout(() => setSuccessText(""), 4000);
    },
  });

  // ---- FIXED FUNCTION ----
  async function contactForm(e) {
    e.preventDefault();

    mutation.mutate({
      names,
      email,
      phone,
      purpose,
      message,
    });

    // Reset states
    setName("");
    setEmail("");
    setPhone("");
    setPurpose("job");
    setMessage("");
  }

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-container">
          <h2>Contact</h2>

          <form onSubmit={contactForm}>
            {/* Name */}
            <label htmlFor="name">Name : </label>
            <div className="name-in">
              <input
                id="name"
                value={names}
                placeholder="Your Name..."
                type="text"
                onBlur={() => !names.trim() && setNameError(true)}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
              />
            {nameError && <span className="error">Name is required</span>}
            </div>

            {/* Email */}
            <label htmlFor="email">Email : </label>
            <div className="email">
              <input
                id="email"
                value={email}
                placeholder="email.."
                type="email"
                onBlur={() => !email.trim() && setEmailError(true)}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
              />
            {emailError && <span className="error">email is required</span>}
            </div>

            {/* Phone */}
            <label htmlFor="phone">Phone Number : </label>
            <div className="phone-no">
              <input
                id="phone"
                value={phone}
                placeholder="phone number.."
                type="tel"
                onBlur={() => !phone.trim() && setPhoneError(true)}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(false);
                }}
              />
            {phoneError && (
              <span className="error">Phone number is required</span>
            )}
            </div>

            {/* Purpose */}
            <label htmlFor="purpose">Purpose : </label>
            <div className="purpose">
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              >
                <option value="job">Job Offering</option>
                <option value="freelancing">Freelancing</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <label htmlFor="message">Leave any message : </label>
            <textarea
              id="message"
              value={message}
              placeholder="Describe Your Message.."
              onBlur={() => !message.trim() && setMessageError(true)}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageError(false);
              }}
            ></textarea>

            {messageError && (
              <span className="error text-area-err">message is required</span>
            )}

            {successText ? (
              <p style={{ color: successType === "success" ? "green" : "red" }}>
                {successText}
              </p>
            ) : null}

            <button disabled={isDisabled} type="submit">
              {mutation.isPending ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
