import {useState} from "react";

export default function Contact() {
  const [formData, setFormData] = useState({name: "", phone: "", message: ""});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const {name, phone, message} = formData;
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`);
    window.location.href = `mailto:amitacharya22780@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-xl border-2 border-gray-500 bg-black/5 p-8 dark:bg-white/5"
    >
      <div className="text-center text-3xl font-bold text-green-600 dark:text-green-700">
        Contact Us
      </div>

      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full rounded-md border-2 border-gray-500 px-4 py-2 outline-none focus:border-blue-500"
        required
      />

      <input
        type="tel"
        placeholder="Contact Number"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        className="w-full rounded-md border-2 border-gray-500 px-4 py-2 outline-none focus:border-blue-500"
        required
      />

      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        className="w-full rounded-md border-2 border-gray-500 px-4 py-2 outline-none focus:border-blue-500"
        required
      />

      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Send Email
      </button>
    </form>
  );
}
