import toast from "react-hot-toast";
import PrimaryButton from "../../btns/PrimaryButton";
import InputBox from "../../input-box/InputBox";
import Textarea from "../../input-box/Textarea";
import { useState } from "react";

function Form() {
  const [fromSubmitting, setFormSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitting(true);
    const form = e.target;

    setTimeout(() => {
      toast.success("Message Sent.", {
        style: {
          border: "1px solid #007bff7d",
          backgroundColor: "#000",
          padding: "16px",
          color: "#fff",
        },
        iconTheme: {
          primary: "#034dbd",
          secondary: "#FFFAEE",
        },
      });
      setFormSubmitting(false);
      form.reset();
    }, 2000);
  };
  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <InputBox label={"Email"} type={"email"} placeholder="email here" />
        <InputBox label={"Subject"} type={"text"} placeholder="subject here" />
        <Textarea
          label={"Message"}
          placeholder="your message.."
          className="-mb-4"
        />
        <div>
          <PrimaryButton disabled={fromSubmitting}>Send Message</PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default Form;
