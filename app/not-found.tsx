import Header from '@/components/site-header';
import Footer from '@/components/site-footer';

export default function NotFound() {
  return (
    <>
      <Header light />
      <main>
        <section className="page-intro section">
          <p className="eyebrow blue">404 / Missing page</p>
          <h1>
            Page not found.
            <br />
            <span className="muted">This one moved - or never existed.</span>
          </h1>
          <p className="intro">
            Check the URL, or head back home to keep exploring Ken Labs.
          </p>
          <a className="button blue-button" href="/">
            Back to home <span>↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
