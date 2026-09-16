import Header from '@/components/site-header';
import Footer, { NextStep } from '@/components/site-footer';

export const metadata = {
  title: 'The Lab - Ken Labs',
  description: 'Ideas, prototypes and practical experiments in websites, marketing and AI automation from Ken Labs.',
};

export default function Lab() {
  return <>
    <Header light />
    <main>
      <section className="section lab-intro">
        <p className="eyebrow blue">The Lab / Work in progress</p>
        <div className="lab-intro-grid">
          <h1>Ideas worth<br/><span className="muted">trying.</span></h1>
          <p className="intro">A look at what we’re exploring, building and learning. Early ideas stay labelled as early ideas; working demos and real results will be shared as they happen.</p>
        </div>
      </section>
      <section className="lab-feature section" aria-labelledby="walkthrough-title">
        <div className="lab-feature-top"><span>EXPERIMENT 001</span><span className="lab-status"><span aria-hidden="true" /> Exploring</span></div>
        <div className="lab-feature-grid">
          <div className="lab-feature-copy">
            <p className="eyebrow blue">Property / Visual experience</p>
            <h2 id="walkthrough-title">What if a listing felt like walking through the space?</h2>
            <p className="intro">We’re exploring a first-person property walkthrough built from listing photos or video. The idea is to help prospective buyers or renters get a clearer feel for a home before booking a viewing.</p>
            <div className="lab-detail-grid">
              <div><span>THE INPUT</span><p>Existing property photos or video.</p></div>
              <div><span>THE EXPERIMENT</span><p>Turn that media into a guided, first-person viewing experience.</p></div>
              <div><span>THE QUESTION</span><p>Can this make it easier to decide whether to book a visit?</p></div>
            </div>
            <p className="lab-disclaimer">Concept in exploration. No public demo or measured result yet.</p>
          </div>
          <div className="lab-visual" aria-label="Abstract illustration of a route through a property">
            <div className="lab-visual-grid" aria-hidden="true"><span className="lab-room room-one"/><span className="lab-room room-two"/><span className="lab-room room-three"/><span className="lab-path"/><span className="lab-start">01</span><span className="lab-end">↗</span></div>
            <div className="lab-visual-caption"><span>FROM STILL FRAMES</span><span>TO A SENSE OF SPACE</span></div>
          </div>
        </div>
      </section>
      <section className="section lab-more" aria-label="More Lab experiments">
        <article className="lab-idea"><div className="lab-idea-number">EXPERIMENT 002 <span className="lab-status"><span aria-hidden="true"/> Exploring</span></div><div><h3>AI agents that handle more of the journey.</h3><p>We’re testing how an AI agent could help answer enquiries, collect the right details and move a request to the next step. The useful version would fit the business’s process, not just answer questions.</p></div><div className="lab-idea-side"><p>Possible uses</p><span>Enquiries</span><span>Bookings</span><span>Follow-ups</span></div></article>
        <article className="lab-idea"><div className="lab-idea-number">EXPERIMENT 003 <span className="lab-status"><span aria-hidden="true"/> Exploring</span></div><div><h3>Agent readiness for websites.</h3><p>We’re exploring WebMCP, an emerging way for websites to offer clear, structured actions to AI agents. The aim is to help an agent find information or complete a supported task without guessing its way through buttons and screenshots. We’re testing where this makes a real difference for businesses.</p></div><div className="lab-idea-side"><p>Possible uses</p><span>Search</span><span>Enquiries</span><span>Bookings</span></div></article>
        <div className="lab-invitation"><div><p className="eyebrow blue">Still exploring</p><h3>See an idea that fits your business?</h3><p>These experiments are not public products yet. If you want to explore a version built around your business, let’s talk through what it would need to do.</p></div><a href="/contact#enquiry" className="button blue-button">Enquire about a build <span>↗</span></a></div>
      </section>
      <NextStep />
    </main>
    <Footer />
  </>;
}
