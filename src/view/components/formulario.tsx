import MyButton from "./myButton";

export default function Formulario() {
  return (
    <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
      <label htmlFor="subject">Subject: </label>
      <input
        type="text"
        id="subject"
        name="subject"
        required
        minLength={3}
        maxLength={60}
        placeholder="Your Subject"
        className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
      />
      <label htmlFor="message">Message: </label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        placeholder="Your Message"
        required
        className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
      ></textarea>
      <MyButton texto="Submit"></MyButton>
    </form>
  );
}
