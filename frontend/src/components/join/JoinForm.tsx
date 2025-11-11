import { useState } from "react";
import type { FormEvent } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./JoinForm.scss";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeqAfXHr8gYVR7HUYnbBAjY2pYg1641C2p1Fv4uC4YcFWLzLQ/formResponse";

  const ENTRY_IDS = {
    name: "entry.651401770",
    email: "entry.1281671811",
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData();
      googleFormData.append(ENTRY_IDS.name, formData.name);
      googleFormData.append(ENTRY_IDS.email, formData.email);

      // Submit to Google Forms
      // Using no-cors mode because Google Forms doesn't return CORS headers
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
      });

      // Since we're using no-cors, we won't get a response, but if we reach here, the request was sent
      setSubmitStatus({
        type: "success",
        message:
          "Thank you for subscribing! We'll keep you updated on our concerts and events.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or contact us directly.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="join-form-container">
      <h2>Subscribe to Our Mailing List</h2>
      <p className="form-description">
        Stay updated with our latest concerts, events, and rehearsals!
      </p>

      {submitStatus.type && (
        <Alert
          variant={submitStatus.type === "success" ? "success" : "danger"}
          onClose={() => setSubmitStatus({ type: null, message: "" })}
          dismissible
        >
          {submitStatus.message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="join-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>
            Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>
            Email Address <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@ucsd.edu"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            variant="danger"
            type="submit"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default JoinForm;
