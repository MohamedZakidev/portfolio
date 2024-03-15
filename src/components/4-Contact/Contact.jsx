import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-us">
      <h1 className="flex"><span className="icon icon-envelope"></span>Contact me</h1>
      <p>Contact me for more information and Get notified when i puplish something new</p>
      <div className="flex">
        <form className="flex">
          <div className="flex">
            <label htmlFor="email">Email Adress:</label>
            <input id="email" name="email" type="text" />
          </div>

          <div className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="animation">animation</div>
      </div>
    </section>
  );
}
