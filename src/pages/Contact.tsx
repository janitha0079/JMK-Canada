import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle2, Send } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { FacebookIcon } from "../components/icons/FacebookIcon";
import { business, services } from "../data/content";

const chipLabels = services.map((s) => s.name);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [chips, setChips] = useState<Record<string, boolean>>({});

  function toggleChip(label: string) {
    setChips((c) => ({ ...c, [label]: !c[label] }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const project = Object.keys(chips).filter((k) => chips[k]).join(", ") || "Not specified";
    const subject = encodeURIComponent(`Free Quote Request — ${project}`);
    const body = encodeURIComponent(`Name: ${name}\nContact: ${contact}\nProject type: ${project}\n\n${details}`);
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <PageHero
        eyebrow="Contact"
        title="Tell us about the space."
        description="We walk the site, talk scope and budget, and send back a transparent itemized quote. No pressure, no obligation, no surprise change orders."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
      />

      <section id="contact" className="border-t border-paper/10 bg-ink-deep py-[clamp(4rem,9vw,7.5rem)]">
        <div className="container-x grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(2rem,4vw,3.5rem)]">
          <div className="flex min-w-0 flex-col">
            <Reveal>
              <dl className="flex flex-col gap-6 border-t border-paper/10 pt-8">
                <div>
                  <dt className="text-[0.688rem] font-bold uppercase tracking-[0.18em] text-paper/50">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={business.phoneHref}
                      className="font-display text-[1.35rem] font-bold tracking-[-0.01em] text-paper transition-colors hover:text-amber"
                    >
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.688rem] font-bold uppercase tracking-[0.18em] text-paper/50">Shop</dt>
                  <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-paper/80">
                    {business.addressLine1}
                    <br />
                    {business.addressLine2}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.688rem] font-bold uppercase tracking-[0.18em] text-paper/50">Social</dt>
                  <dd className="mt-2 flex flex-wrap items-center gap-5">
                    <a
                      href={business.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper hover:text-amber transition-colors"
                    >
                      <FacebookIcon size={16} /> Facebook
                    </a>
                    <a
                      href={business.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-paper hover:text-amber transition-colors"
                    >
                      TikTok
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden rounded-[6px] border border-paper/[0.14]">
                <iframe
                  title="JMK Constructions shop location — Edmonton, AB"
                  src="https://www.google.com/maps?q=12251+Fort+Rd+NW,+Edmonton,+AB&output=embed"
                  className="h-56 w-full grayscale"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative min-w-0 overflow-hidden rounded-[6px] border border-paper/[0.14] bg-ink-soft p-[clamp(1.75rem,3.5vw,2.5rem)]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form key="form" exit={{ opacity: 0, scale: 0.98 }} onSubmit={handleSubmit} className="space-y-5">
                    <label className="block">
                      <span className="mb-2 block text-[0.688rem] font-bold uppercase tracking-[0.16em] text-paper/60">
                        Name
                      </span>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full min-h-[52px] rounded-sm border border-paper/20 bg-ink-deep px-4 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-[0.688rem] font-bold uppercase tracking-[0.16em] text-paper/60">
                        Phone or email
                      </span>
                      <input
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="How should we reach you?"
                        className="w-full min-h-[52px] rounded-sm border border-paper/20 bg-ink-deep px-4 text-sm text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                      />
                    </label>

                    <fieldset className="flex flex-col gap-2.5">
                      <legend className="text-[0.688rem] font-bold uppercase tracking-[0.16em] text-paper/60">
                        Project type
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {chipLabels.map((label) => (
                          <button
                            key={label}
                            type="button"
                            onClick={() => toggleChip(label)}
                            aria-pressed={!!chips[label]}
                            className={`min-h-11 whitespace-nowrap rounded-full px-4 text-xs font-bold tracking-[0.03em] transition-colors duration-250 ${
                              chips[label]
                                ? "bg-amber text-ink"
                                : "border border-paper/20 text-paper/75 hover:border-amber/60"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <label className="block">
                      <span className="mb-2 block text-[0.688rem] font-bold uppercase tracking-[0.16em] text-paper/60">
                        Details
                      </span>
                      <textarea
                        required
                        rows={4}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Rough scope, timeline, anything we should know"
                        className="w-full rounded-sm border border-paper/20 bg-ink-deep px-4 py-3 text-sm leading-relaxed text-paper placeholder:text-paper/30 focus:border-amber focus:outline-none"
                      />
                    </label>

                    <button
                      type="submit"
                      className="group inline-flex min-h-[58px] w-full items-center justify-center gap-2 rounded-sm bg-amber text-sm font-extrabold uppercase tracking-[0.08em] text-ink transition-[background,box-shadow] hover:bg-amber-soft hover:shadow-[0_18px_40px_-16px_rgba(217,142,62,0.8)]"
                    >
                      Request My Free Quote
                      <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-xs leading-relaxed text-paper/45">Typical reply within one business day.</p>
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
