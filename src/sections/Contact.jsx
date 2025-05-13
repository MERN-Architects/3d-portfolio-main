import { useState } from 'react';
import emailjs from '@emailjs/browser';
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <TitleHeader 
          title="Get In Touch"
          sub="📧 Let's Connect"
        />
        <div className="max-w-2xl mx-auto mt-16">
          <div className="card-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white min-h-[150px]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
              {status && (
                <p className={`text-center ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
