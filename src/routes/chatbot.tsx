import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/Button";

export const Route = createFileRoute("/chatbot")({
  head: () => ({
    meta: [
      { title: "Research Chatbot — Coming Soon | Pritika Khatri" },
      { name: "description", content: "An interactive chatbot experience connected to Pritika Khatri’s ongoing doctoral research is being developed." },
      { property: "og:title", content: "Research Chatbot — Coming Soon | Pritika Khatri" },
      { property: "og:description", content: "An interactive chatbot experience connected to ongoing doctoral research is being developed." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/chatbot" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/chatbot" }],
  }),
  component: ChatbotPage,
});

function ChatbotPage() {
  return <section className="coming-soon"><div className="site-container coming-soon-inner"><p className="eyebrow">Doctoral research · UC Berkeley</p><div className="coming-mark" aria-hidden="true"><span /><span /><span /></div><h1>Coming soon</h1><p>An interactive chatbot experience connected to my doctoral research is being developed.</p><Button asChild variant="secondary"><a href="/#research"><ArrowLeft size={16} /> Explore the research</a></Button></div></section>;
}
