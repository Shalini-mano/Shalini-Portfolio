import { ArrowUpRight, CodeXml, ExternalLink, Mail } from 'lucide-react'

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="shell"><div className="contact-panel"><div>
        <p className="section-kicker">Contact</p><h2>Let’s build something <span className="accent-text">useful.</span></h2>
        <p>Interested in a full-stack, Java or backend opportunity? I’d be glad to talk about what your team is building.</p>
        <div className="contact-links"><a className="contact-link" href="mailto:Shalinimano2595@gmail.com"><Mail aria-hidden="true" /> Shalinimano2595@gmail.com</a><a className="contact-link" href="https://github.com/Shalini-mano" target="_blank" rel="noreferrer"><CodeXml aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a><span className="contact-link disabled" aria-label="LinkedIn profile coming soon">LinkedIn <small>PROFILE SOON</small></span></div>
      </div><div className="contact-actions"><a className="button button-primary" href="mailto:Shalinimano2595@gmail.com">Get in touch <ArrowUpRight aria-hidden="true" /></a><a className="button" href="https://drive.google.com/file/d/1rstSXlEbL0AI1LyETr9LopAOxjUrmeTE/view?usp=sharing" target="_blank" rel="noreferrer"><ExternalLink aria-hidden="true" /> View CV</a></div></div></div>
    </section>
  )
}

export default Contact