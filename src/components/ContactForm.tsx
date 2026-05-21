import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Ganti dengan Formspree form ID kamu
// Daftar gratis di https://formspree.io → buat form → copy ID-nya
const FORMSPREE_ID = "maqkegwl";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(formRef.current),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-[#171717]/70 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Let&apos;s talk.</h2>
      <p className="text-muted-foreground text-sm md:text-base mb-8">
        Got a project in mind? Drop me a message and I&apos;ll get back to you within 24 hours.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="from_name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#fafafa]/40 focus:ring-1 focus:ring-[#fafafa]/20 transition text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="from_email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#fafafa]/40 focus:ring-1 focus:ring-[#fafafa]/20 transition text-sm"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            placeholder="Project inquiry"
            className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#fafafa]/40 focus:ring-1 focus:ring-[#fafafa]/20 transition text-sm"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#fafafa]/40 focus:ring-1 focus:ring-[#fafafa]/20 transition text-sm resize-none"
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#fafafa] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(250,250,250,0.3)] disabled:opacity-60 disabled:cursor-not-allowed transition-shadow"
        >
          {status === "idle" && (
            <>
              Kirim <Send className="w-4 h-4" />
            </>
          )}
          {status === "sending" && (
            <>
              Mengirim... <Loader2 className="w-4 h-4 animate-spin" />
            </>
          )}
          {status === "success" && (
            <>
              Terkirim! <CheckCircle2 className="w-4 h-4" />
            </>
          )}
          {status === "error" && (
            <>
              Gagal, coba lagi <AlertCircle className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </form>

      {/* Status feedback */}
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-green-400 font-mono text-center"
        >
          Pesan berhasil dikirim ke Gmail saya. Terima kasih!
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-sm text-red-400 font-mono text-center"
        >
          Terjadi kesalahan. Silakan coba lagi atau email langsung.
        </motion.p>
      )}
    </div>
  );
}
