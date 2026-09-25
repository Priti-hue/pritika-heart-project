import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ExternalLink, Mail } from "lucide-react";
import { Button } from "../components/Button";
import { Gallery } from "../components/Gallery";
import { portfolio } from "../content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pritika Khatri | Public Health, Research & Creative Work" },
      { name: "description", content: "Portfolio of Pritika Khatri, a public health leader and DrPH student at UC Berkeley working across research, community partnerships, poetry, music, and adventure." },
      { property: "og:title", content: "Pritika Khatri | Public Health, Research & Creative Work" },
      { property: "og:description", content: "Public health leadership, doctoral research, selected writing, and creative work by Pritika Khatri." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: `https://id-preview--e88875b5-627e-494d-b19a-3efb4498cbf6.lovable.app${portfolio.socialPreview}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://id-preview--e88875b5-627e-494d-b19a-3efb4498cbf6.lovable.app${portfolio.socialPreview}` },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function SectionHead({ number, eyebrow, title, dark = false }: { number: string; eyebrow: string; title: string; dark?: boolean }) {
  return <div className="section-head"><div className={`section-rule ${dark ? "border-research-border" : "border-border"}`}><span>{number}</span><span>{eyebrow}</span></div><h2 className="section-title">{title}</h2></div>;
}

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-figure">
          <img className="hero-photo" src={portfolio.campus.src} srcSet={`${portfolio.campus.srcSmall} 1400w, ${portfolio.campus.src} 2000w`} sizes="100vw" alt={portfolio.campus.alt} fetchPriority="high" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-overlay">
            <div className="site-container">
              <p className="eyebrow hero-eyebrow animate-enter">{portfolio.descriptor}</p>
              <h1 id="hero-title" className="hero-name animate-enter-delay">Pritika<br />Khatri</h1>
            </div>
          </div>
        </div>
        <div className="site-container hero-brief">
          <div className="hero-statement animate-enter-later">
            <p>{portfolio.statement}</p>
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild><a href="#work">Explore my work <ArrowDown size={16} /></a></Button>
              <Button asChild variant="secondary"><a href="#contact">Get in touch</a></Button>
            </div>
            <div className="quiet-links">
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="site-container page-section scroll-mt-24">
        <SectionHead number="01" eyebrow="About" title="A life shaped by service and curiosity." />
        <div className="about-editorial">
          <aside className="about-rail">
            <div><p className="rail-label">Doctoral research</p><p className="rail-value">UC Berkeley<br />Ongoing</p></div>
            <div><p className="rail-label">Experience</p><p className="rail-value">16 years<br />Government · nonprofit · healthcare · private sector</p></div>
            <div><p className="rail-label">Creative work</p><p className="rail-value">Poetry · Music · Travel</p></div>
          </aside>
          <div className="about-body">
            <div className="about-top">
              <p className="about-lead">{portfolio.about.lead}</p>
              <div className="about-portrait"><img src={portfolio.headshot} alt="Portrait of Pritika Khatri" loading="lazy" /></div>
            </div>
            <div className="about-passages">
              {portfolio.about.passages.map((line, index) => <p key={index}>{line}</p>)}
            </div>
          </div>
        </div>
        <div className="credentials-panel">
          <div>
            <p className="mini-heading">Education</p>
            <div className="divide-y divide-border border-t border-border">
              {portfolio.education.map(([degree, institution, status]) => <div key={degree} className="education-row"><div><h3>{degree}</h3><p>{institution}</p></div>{status && <span>{status}</span>}</div>)}
            </div>
          </div>
          <div className="panel-foot">
            <p className="mini-heading">Languages</p>
            <div className="lang-chips">{portfolio.languages.map((lang) => <span key={lang}>{lang}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="work" className="site-container page-section scroll-mt-24">
        <SectionHead number="02" eyebrow="Selected work" title="Leadership grounded in communities." />
        <div className="work-list">
          {portfolio.work.map((item, index) => <article key={item.organization} className="work-row">
            <div className="work-index">0{index + 1}</div>
            <div><p className="eyebrow text-accent">{item.organization}</p><h3>{item.role}</h3><p className="work-dates">{item.dates}</p></div>
            <div><p className="work-description">{item.description}</p><ul className="evidence-list">{item.evidence.map((line) => <li key={line}>{line}</li>)}</ul></div>
          </article>)}
        </div>
        <details className="timeline-details">
          <summary>Earlier roles and additional experience <span aria-hidden="true">+</span></summary>
          <div className="timeline">{portfolio.earlier.map((item) => <article key={item.role}><p className="timeline-date">{item.dates}</p><div><h3>{item.role}</h3><p className="timeline-org">{item.organization}</p><p>{item.detail}</p></div></article>)}</div>
        </details>
      </section>

      <section id="research" className="research-section scroll-mt-20">
        <div className="site-container py-20 md:py-28">
          <SectionHead dark number="03" eyebrow="Doctoral research · UC Berkeley" title="Can a conversation open the door to better health?" />
          <div className="research-grid">
            <div><p className="status-label">Ongoing research</p><h3>Chatbots, trust, and adolescent sexual and reproductive health</h3></div>
            <div className="research-side"><p>{"My doctoral research explores the use of chatbots to improve adolescents’ access to sexual and reproductive health information in low- and middle-income countries. It also examines the trust adolescents feel when discussing sensitive SRH topics with a chatbot."}</p><Button asChild variant="light"><Link to="/chatbot">Try the Chatbot <ArrowRight size={16} /></Link></Button></div>
          </div>
        </div>
      </section>

      <section className="site-container page-section writing-section" aria-labelledby="writing-heading">
        <div id="writing-heading"><SectionHead number="04" eyebrow="Selected writing" title="Research and perspectives." /></div>
        <div className="reading-list">{portfolio.writing.map((item) => <article key={item.title}><span className="status-chip">{item.label}</span><h3>{item.title}</h3><p>{item.authors}</p></article>)}</div>
        <details className="more-writing"><summary>More research <span aria-hidden="true">+</span></summary><ul>{portfolio.moreWriting.map((item) => <li key={item}>{item}</li>)}</ul></details>
      </section>

      <section id="beyond" className="site-container page-section scroll-mt-24">
        <SectionHead number="05" eyebrow="Beyond work" title="Words, music, and the open road." />
        <p className="beyond-intro">Outside my professional work, I make space for poetry, original music, and adventure.</p>
        <div className="creative-grid">
          <article className="creative-feature"><p className="mini-heading">Poetry · {portfolio.poetry.language}</p><h3>{portfolio.poetry.title}</h3><p>{portfolio.poetry.performer}. Pritika gave a solo poetry recital at Sarwanam Theatre in Kathmandu in 2022.</p><a className="text-link" href="https://nepallive.com/story/285788" target="_blank" rel="noreferrer">Nepal Live coverage <ExternalLink size={14} /></a><audio className="mt-8 w-full" src={portfolio.poetry.src} controls preload="metadata" aria-label={`${portfolio.poetry.title}, ${portfolio.poetry.performer}`}>Your browser does not support audio playback.</audio></article>
          <article className="creative-feature"><p className="mini-heading">Original music</p><h3>Original composition</h3><p>Original composition by Pritika Khatri.</p><video className="composition-video" src={portfolio.composition.src} poster={portfolio.composition.poster} controls preload="metadata" playsInline aria-label="Original composition by Pritika Khatri">Your browser does not support video playback.</video></article>
        </div>
        <div className="gallery-heading"><p className="mini-heading">Travel and adventure</p><p>Moments from the open road.</p></div>
        <Gallery />
      </section>

      <section id="contact" className="contact-section scroll-mt-20">
        <div className="site-container contact-grid">
          <div><p className="eyebrow">06 · Contact</p><h2>Let’s connect.</h2></div>
          <div><p className="contact-copy">For conversations about public health, adolescent health research, community partnerships, or creative collaboration, I’d love to hear from you.</p><div className="contact-links"><a href={`mailto:${portfolio.email}`}><Mail size={18} />{portfolio.email}</a><a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={16} /></a></div></div>
        </div>
      </section>
      <footer className="site-container flex flex-col gap-2 border-t border-border py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>Pritika Khatri</span><span className="photo-credit">Campus photograph: <a href={portfolio.campus.creditUrl} target="_blank" rel="noreferrer">{portfolio.campus.credit}</a> · {portfolio.campus.license}</span><span>© {new Date().getFullYear()}</span></footer>
    </>
  );
}
