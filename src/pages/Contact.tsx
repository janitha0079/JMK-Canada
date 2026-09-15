import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, Send } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { FacebookIcon } from "../components/icons/FacebookIcon";
import { business, services } from "../data/content";

const projectTypes = services.map((s) => s.name);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", project: projectTypes[0], message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Free Quote Request — ${form.project}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nProject: ${form.project}\n\n${form.message}`
    );
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Call, message us on Facebook, or send your project details below — we'll get back to you with next steps and a free, no-pressure quote."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Reveal>
              <a
                href={business.phoneHref}
                className="group flex items-start gap-4 rounded-sm border border-ink/10 bg-white/40 p-6 transition-all hover:-translate-y-0.5 hover:border-ink"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-ink text-amber">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50">Call or Text</p>
                  <p className="mt-1 font-display text-lg font-bold">{business.phone}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <a
                href={`mailto:${business.email}`}
                className="group flex items-start gap-4 rounded-sm border border-ink/10 bg-white/40 p-6 transition-all hover:-translate-y-0.5 hover:border-ink"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-ink text-amber">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50">Email</p>
                  <p className="mt-1 font-display text-lg font-bold">{business.email}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-start gap-4 rounded-sm border border-ink/10 bg-white/40 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-ink text-amber">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50">Service Area</p>
                  <p className="mt-1 font-display text-lg font-bold">{business.serviceArea}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-sm border border-ink/10 bg-white/40 p-6 transition-all hover:-translate-y-0.5 hover:border-ink"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-ink text-amber">
                  <FacebookIcon size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink/50">Facebook</p>
                  <p className="mt-1 font-display text-lg font-bold">Message us directly</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="overflow-hidden rounded-sm border border-ink/10">
                <iframe
                  title="JMK Custom Renovations service area map — Edmonton, AB"
                  src="https://www.google.com/maps?q=Edmonton,+Alberta&output=embed"
                  className="h-64 w-full grayscale"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-sm bg-ink p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, scale: 0.98 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h2 className="font-display text-2xl font-extrabold text-paper">Request a Free Quote</h2>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-paper/60">
                          Full Name
                        </span>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-sm border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                          placeholder="Jordan Smith"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-paper/60">
                          Phone Number
                        </span>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full rounded-sm border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                          placeholder="(780) 555-0123"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-paper/60">
                        Project Type
                      </span>
                      <select
                        value={form.project}
                        onChange={(e) => setForm({ ...form, project: e.target.value })}
                        className="w-full rounded-sm border border-paper/20 bg-ink px-4 py-3 text-sm text-paper focus:border-amber focus:outline-none"
                      >
                        {projectTypes.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-wide text-paper/60">
                        Tell us about your project
                      </span>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-sm border border-paper/20 bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                        placeholder="Scope, timeline, budget range — anything that helps us prepare a useful quote."
                      />
                    </label>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-sm bg-amber px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
                    >
                      Send Request
                      <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                  >
                    <CheckCircle2 size={52} className="text-amber" />
                    <h3 className="font-display text-2xl font-extrabold text-paper">Almost there!</h3>
                    <p className="max-w-xs text-sm leading-relaxed text-paper/60">
                      Your email app should be open with the details pre-filled — hit send and
                      we'll be in touch shortly. You can also just call us directly.
                    </p>
                    <a
                      href={business.phoneHref}
                      className="mt-2 inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-paper hover:border-amber hover:text-amber"
                    >
                      <Phone size={16} /> {business.phone}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
