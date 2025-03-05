import PrimaryButton from "../../btns/PrimaryButton";
import InputBox from "../../input-box/InputBox";
import Textarea from "../../input-box/Textarea";

function Form() {
  return (
    <div>
      <form className="flex flex-col gap-6">
        <InputBox label={"Email"} type={"email"} placeholder="email here" />
        <InputBox label={"Subject"} type={"text"} placeholder="subject here" />
        <Textarea
          label={"Message"}
          placeholder="your message.."
          className="-mb-4"
        />
        <div>
          <PrimaryButton>Send Message</PrimaryButton>
        </div>
      </form>
    </div>
  );
}

export default Form;
