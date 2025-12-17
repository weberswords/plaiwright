import { useState } from 'react'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "IS THIS ONLY FOR ENGLISH/ELA TEACHERS?",
      answer: "No! The program is designed for educators across ALL content areas and grade levels. Shakespeare provides conceptual frameworks, but your applications will be specific to your own teaching context—whether you teach math, science, social studies, elementary, special education, or any other subject. Troupes are intentionally formed with educators from different content areas to maximize learning and perspective-sharing. The skills you'll develop (critical thinking, tool evaluation, intentional design) transfer across all disciplines."
    },
    {
      question: "DO I NEED PRIOR EXPERIENCE WITH SHAKESPEARE OR AI?",
      answer: "No prior experience needed with either! Shakespeare: The program provides all necessary context about the plays—you're using them as pedagogical lenses, not doing literary analysis. We focus on themes and characters that illuminate AI integration challenges, not memorizing soliloquies. AI: We design for all experience levels, from curious beginners who've never used ChatGPT to experienced users already integrating AI tools. Troupes are intentionally mixed so everyone learns from each other. If you can use Google, you have the technical skills needed."
    },
    {
      question: "WHAT'S THE TIME COMMITMENT?",
      answer: "This is substantial, transformative professional development. Approximately 8-9 hours per week over 17 weeks (142 total hours): 10 virtual webinars (Wednesday evenings, 5:00-6:30 PM) = 12 hours; 4 Saturday community connections (5 hours each including experience, travel, reflection) = 20 hours; 4 collaborative troupe projects (lookbook, knowledge base, website, script) = 100 hours; Weekly reflections and final portfolio = 10 hours. Total: 142 hours = 47 NV-SIDE-certified CCSD contact units. Here's what makes this manageable: Most project work happens on YOUR schedule with your troupe. You're creating portfolio-worthy artifacts, not completing busywork. Troupe collaboration distributes the creative load. All webinars are recorded; community connections have virtual alternatives. You control the pace of most of the 100 project hours. Value perspective: That's 3 hours of meaningful work per contact unit earned. This isn't easy. But it's worth it."
    },
    {
      question: "WHAT WILL I ACTUALLY GET OUT OF THIS?",
      answer: "For 142 hours of meaningful work, you'll earn: 47 NV-SIDE-certified CCSD contact units ($6.38 per contact unit—just 3 hours of work per unit earned); 4 portfolio-ready artifacts you'll actually use (Digital lookbook examining your teaching practice, Living knowledge base of tools and strategies, Public website with lesson plans teaching critical AI literacy, Collaborative script showcasing your transformation); LIFT Framework that works with any AI tool (Lead with Human Intention, Integrate Available Instruments, Focus with AI, Transform through Experimentation—applicable now and 5 years from now); Professional community that lasts (Your troupe becomes your ongoing support system); Transferable leadership skills (Critical AI literacy, collaborative creation, adaptive design, reflective practice); 4 community connections examining how our communities navigate change, creativity, illusion, and power."
    },
    {
      question: "WHAT IF I CAN'T DEDICATE 8-9 HOURS EVERY WEEK?",
      answer: "We build flexibility into the program because we know educator workload is unpredictable. The 142 hours aren't evenly distributed—some weeks are lighter, some are heavier depending on project phases. Webinars (12 hours): Attend live for collaborative energy, or watch recordings within 24 hours on your schedule. We require 80% attendance (8 out of 10) for certification. Community Connections (20 hours): Four Saturday experiences spread across 17 weeks. Can't make all four in person? Virtual alternatives available. Projects (100 hours): THIS IS WHERE FLEXIBILITY LIVES. Your troupe decides when to meet and work. Some weeks you'll invest 15 hours, other weeks just 2-3. You control the pace of collaborative creation. Reflections (10 hours): Weekly journals (300-500 words) take 30-45 minutes. Complete them when it works for you. Bottom line: This is serious work, but you're not alone and you're not on a rigid schedule."
    }
  ]

  const artifacts = [
    {
      title: "The Measure of a Classroom",
      description: "Digital lookbook examining your instructional practices through character perspectives from Measure for Measure."
    },
    {
      title: "It's Not Nothing",
      description: "Public website showcasing lesson plans that integrate AI tools AND teach critical AI literacy."
    },
    {
      title: "Seeding a Forest",
      description: "Collaborative knowledge base of AI tools, traditional resources, and instructional strategies. Like the Forest of Arden, this living database grows as you discover what's available in your pedagogical ecosystem."
    },
    {
      title: "The Play's the Thing",
      description: "Collaborative script reflecting your 16-week transformation journey."
    },
    {
      title: "King Lear's Audience",
      description: "Present your troupe's script in intimate read-through rooms. Like King Lear emerging from the storm with hard-won wisdom, you'll share your journey with administrators, colleagues, and community members. Rotating audiences experience multiple troupes' work followed by Q&A discussions."
    }
  ]

  const audienceItems = [
    { title: "ALL CONTENT AREAS", description: "Math, Science, ELA, Social Studies, Arts, PE, CTE, Special Education, Elementary, Secondary—Shakespeare provides frameworks that work across ALL disciplines. Your applications will be specific to YOUR teaching context." },
    { title: "ALL GRADE LEVELS", description: "K-12 educators welcome. Troupes are intentionally mixed by grade level so you learn from diverse perspectives." },
    { title: "ALL ROLES", description: "Classroom teachers, instructional coaches, specialists, library media specialists, administrators—if you support student learning, you belong here." },
    { title: "NO SHAKESPEARE EXPERTISE REQUIRED", description: "We provide all necessary context. You're using plays as pedagogical lenses, not doing literary analysis. If you've never read Shakespeare since high school (or ever), you're in good company." },
    { title: "NO AI EXPERIENCE REQUIRED", description: "Designed for all experience levels from AI-curious beginners to experienced users. Troupes mix experience levels intentionally. If you can use Google, you have the technical skills needed." },
    { title: "NO PERFORMANCE SKILLS REQUIRED", description: "\"Behavioral cosplay\" means approaching troupe work through character perspectives, not memorizing lines or performing on stage (unless you want to)." },
    { title: "FLEXIBILITY BUILT IN", description: "Can't attend live? All webinars recorded within 24 hours." },
    { title: "COLLABORATIVE SUPPORT", description: "Your troupe becomes your support system for 17 weeks." }
  ]

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <div className="header-container">
          <a href="/" className="logo-link" aria-label="Modern plAI-wright Home">
            <span className="logo-icon" aria-hidden="true">&#9998;</span>
            <span className="logo-text">modern pl<span className="highlight">AI</span>-wright</span>
          </a>
          <nav aria-label="Main navigation">
            <a
              href="https://plaiwright.theintelligenthoodlums.com/"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Troupe
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-heading">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source
              src="https://cloud-1de12d.becdn.net/customfile/b0f106b69fec140df599cd13e243e87f9076d62441bbbe2b1d973d33fc82feb2/buckjaeger-A-bust-of-William-Shakespeare-as-an-astronaut-on-a-0730b0ca-d8bd-4be4-a767-22fef3c39071-2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-content">
            <h1 id="hero-heading">
              <span className="hero-tagline">a professional development experience<span className="accent-dots">...</span></span>
            </h1>
            <p className="hero-subtitle">For educators</p>
          </div>
        </section>

        <section className="banner" aria-labelledby="banner-heading">
          <div className="banner-content">
            <h2 id="banner-heading" className="banner-title">be brave. be bold. be bard.</h2>
            <p className="banner-subtitle">Transform Your Teaching with AI Through Shakespeare</p>
          </div>
        </section>

        <section className="about" aria-labelledby="about-heading">
          <div className="about-container">
            <div className="about-images" aria-hidden="true">
              <div className="about-image-placeholder"></div>
              <div className="about-image-placeholder secondary"></div>
            </div>
            <div className="about-content">
              <h2 id="about-heading" className="visually-hidden">About the Program</h2>
              <p>Most AI professional development treats teachers like we need to catch up to the technology.</p>
              <p>The <strong>Modern plAI-wright</strong> Project flips that.</p>
              <p>Few writers speak about the human experience with more passion, depth, and artistry than William Shakespeare. Who better to help us understand how to keep human judgment, critical thinking, and intentionality at the center of our work with AI?</p>
              <p>Through four of Shakespeare's plays—Measure for Measure, As You Like It, Much Ado About Nothing, and Hamlet—you'll develop the skills AI integration actually requires: knowing when to trust the tool and when to trust yourself, understanding your audience and context, and having the courage to experiment and fail.</p>
              <p>You're not learning to follow AI. <strong>You're learning to direct it.</strong></p>
              <p>Welcome to the Modern plAI-wright Project. Every classroom is a stage, and every teacher a plAI-wright.</p>
            </div>
          </div>
        </section>

        <section className="create" aria-labelledby="create-heading">
          <div className="create-container">
            <div className="create-content">
              <h2 id="create-heading">What You'll Create</h2>
              <p>You'll work in a troupe of four educators to create meaningful artifacts that demonstrate your transformation. These aren't worksheets—they're portfolio-ready projects you'll actually use and share.</p>
            </div>
          </div>
        </section>

        <section className="artifacts" aria-labelledby="artifacts-heading">
          <h2 id="artifacts-heading" className="visually-hidden">Program Artifacts</h2>
          <div className="artifacts-grid">
            {artifacts.map((artifact, index) => (
              <article key={index} className="artifact-card">
                <h3>{artifact.title}</h3>
                <p>{artifact.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="details" aria-labelledby="details-heading">
          <h2 id="details-heading" className="visually-hidden">Program Details</h2>
          <div className="details-grid">
            <div className="detail-card">
              <h3>Dates</h3>
              <p className="detail-highlight">January 21 – May 23, 2026</p>
              <p>17 weeks+ of transformative professional development</p>
            </div>
            <div className="detail-card">
              <h3>Time Commitment</h3>
              <p className="detail-highlight">Approximately 8-9 hours per week (142 total hours):</p>
              <ul>
                <li>10 virtual Wednesday webinars (5:00-6:30 PM)</li>
                <li>4 Saturday community connections</li>
                <li>Collaborative troupe projects (on YOUR schedule)</li>
                <li>Weekly reflections and portfolio development</li>
              </ul>
            </div>
            <div className="detail-card">
              <h3>Earn</h3>
              <p className="detail-highlight">47 NV-SIDE-certified CCSD contact units</p>
              <p>That's just 3 hours of meaningful work per contact unit</p>
            </div>
            <div className="detail-card">
              <h3>Investment</h3>
              <p className="detail-highlight">$300 per participant</p>
              <p>($6.38 per contact unit or $2.11 per hour of professional development)</p>
            </div>
            <div className="detail-card">
              <h3>Format</h3>
              <p className="detail-highlight">Collaborative troupes of 4 educators</p>
              <p>Intentionally mixed by grade level, content area, and AI experience</p>
              <p>Your troupe = your support system for 17 weeks</p>
            </div>
            <div className="detail-card">
              <h3>Platforms</h3>
              <p className="detail-highlight">Butter (virtual webinars), Spaces EDU (portfolio & collaboration), Google Workspace (project creation)</p>
              <p>All free tools—no paid subscriptions required</p>
            </div>
          </div>
        </section>

        <section className="audience" aria-labelledby="audience-heading">
          <div className="audience-container">
            <h2 id="audience-heading">Who is this for?</h2>
            <div className="audience-grid">
              {audienceItems.map((item, index) => (
                <div key={index} className="audience-item">
                  <span className="checkmark" aria-hidden="true">&#10003;</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-heading">
          <div className="faq-container">
            <h2 id="faq-heading" className="visually-hidden">Frequently Asked Questions</h2>
            <div className="accordion" role="region" aria-label="Frequently Asked Questions">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <h3>
                    <button
                      className="accordion-trigger"
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-button-${index}`}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span className="accordion-icon" aria-hidden="true">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className={`accordion-panel ${openFaq === index ? 'open' : ''}`}
                    hidden={openFaq !== index}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta" aria-labelledby="cta-heading">
          <div className="cta-container">
            <h2 id="cta-heading">READY TO BE BARD?</h2>
            <p className="cta-tagline">BE BRAVE. BE BOLD.</p>
            <p className="cta-tagline">BE BARD.</p>
            <a
              href="https://plaiwright.theintelligenthoodlums.com/"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN OUR TROUPE
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Modern plAI-wright Project. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
