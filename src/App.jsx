import { useEffect, useState } from 'react'
import './App.css'

const focusAreas = [
  'Computational fluid dynamics (CFD)',
  'Scientific machine learning',
  'Large language models',
  'Multimodal retrieval systems',
  'GPU and HPC simulation',
]

const mlProjects = [
  {
    title: 'The Geometry of Yes',
    stage: 'Published',
    summary:
      'Mechanistic interpretability study mapping how internal emotion directions relate to sycophancy in open-weight instruction-tuned LLMs.',
    highlights: [
      'Replicated emotion-space geometry in Qwen 2.5-32B-Instruct and Gemma 3 27B IT, with PC1 recovering a clean positive-to-negative valence axis.',
      'Defined steering groups for core positive emotion, negative emotion, compliance, and social distress, then tested sycophancy across single-turn and multi-turn evaluation prompts.',
      'Used Gram-Schmidt residual directions to separate compliance from core positive emotion; pure compliance reduced sycophancy while preserving warm tone.',
    ],
    stack: 'Mechanistic interpretability, activation steering, residual-stream analysis, PCA denoising, Gram-Schmidt projection, PyTorch, Hugging Face Transformers',
    github: 'https://github.com/daspushpita/emotion-mechanisms-llm',
    article: {
      label: 'LessWrong Post',
      href: 'https://www.lesswrong.com/posts/v6uCyDNBKhrHevhzM/the-geometry-of-yes-mapping-sycophancy-inside-an-llm-s-1',
    },
  },
  {
    title: 'AstroGPT',
    stage: 'Published',
    summary:
      'Teacher-student distillation framework for controllable scientific text generation over 80,000+ astrophysics abstracts.',
    highlights: [
      'Built ingestion and preprocessing pipelines from arXiv metadata to schema-constrained training corpora.',
      'Using LLaMA-8B teacher outputs to fine-tune GPT-2 student models and evaluate quality-vs-cost tradeoffs.',
      'Added filtering and quality control steps to reduce hallucinations and improve reproducibility.',
    ],
    stack: 'PyTorch, NLP, LLM distillation, Generative AI, Transformers, experiment tracking',
    github: 'https://github.com/daspushpita/MiniAstroGPT',
    app: {
      label: 'Hugging Face App',
      href: 'https://huggingface.co/spaces/pudas96/AstroGPT',
    },
  },
  {
    title: 'CoT Decision Dynamics',
    stage: 'Active',
    summary:
      'Studying when chain-of-thought reasoning faithfully reflects a model\'s internal computation and when generated reasoning diverges from the decision process.',
    highlights: [
      'Built a modular evaluation pipeline comparing baseline and CoT accuracy across about 500 ARC-style reasoning samples on DeepSeek Distill LLaMA.',
      'Found that CoT improves accuracy in about 22% of cases but actively harms accuracy in about 7%, suggesting reasoning traces can override correct internal signals.',
      'Designing hidden-state probing experiments to test whether correct answers are linearly decodable from intermediate representations even when CoT produces incorrect outputs.',
    ],
    stack: 'LLM reasoning, CoT faithfulness, hidden-state dynamics, linear probing, mechanistic interpretability',
    github: 'https://github.com/daspushpita/cot-decision-dynamics',
  },
  {
    title: 'EchoAgent',
    stage: 'Active',
    summary:
      'Multimodal representation learning system that maps natural-language prompts into structured attributes for retrieval.',
    highlights: [
      'Designing joint embeddings across text, metadata, and audio features.',
      'Combines vector similarity with rule-based filtering for interpretable ranking.',
      'Built scalable data ingestion and prompt parsing pipelines for rapid iteration.',
    ],
    stack: 'Multimodal ML, embeddings, retrieval, ranking, Generative AI, Transformers',
    github: 'https://github.com/EchoAgent-team/EchoAgent',
  },
  {
    title: 'PINN for Diffusion Equation',
    stage: 'Completed',
    summary:
      'Parallelized physics-informed neural network modeling full space-time diffusion dynamics across varying coefficients.',
    highlights: [
      'Implemented PDE-constrained losses and compared against baseline CNNs.',
      'Reached 1.83% relative L2 error on out-of-distribution coefficient regimes.',
      'Developed end-to-end evaluation with ablations and systematic error analysis.',
    ],
    stack: 'PINNs, TensorFlow/PyTorch, scientific ML',
    github: 'https://github.com/daspushpita/heat_ml',
  },
  {
    title: "Parkinson's Severity Prediction",
    stage: 'Completed',
    summary:
      "Supervised multimodal ML pipeline for Parkinson's disease severity prediction.",
    highlights: [
      'Implemented feature selection, preprocessing, and model training across logistic regression, XGBoost, and random forest.',
      'Authored approximately 95% of the codebase and full evaluation pipeline.',
      'Achieved 66% accuracy and 96% recall with regularized logistic regression.',
    ],
    stack: 'Scikit-learn, XGBoost, multimodal tabular ML',
    github: 'https://github.com/daspushpita/predict-parkinsons',
  },
]

const physicsProjects = [
  {
    title: 'GRMHD simulations of accreting neutron stars',
    stage: 'Published',
    summary:
      'Developed the first multi-dimensional GRMHD simulations of accreting neutron stars using finite-volume methods with adaptive mesh refinement (AMR).',
    highlights: [
      'Built MPI-parallelized Fortran/C solvers to capture magnetized plasma dynamics in extreme relativistic conditions.',
      'Designed scalable CPU-cluster workflows and processed over 80 TB of simulation data with optimized CPU, memory, and I/O performance.',
      'Led full-cycle computational fluid dynamics workflows across solver development, radiation transport, and large-scale data analysis.',
    ],
    stack: 'Fortran, C, MPI, Python, finite-volume methods, AMR, CFD, GRMHD, HPC',
    publication: {
      citation: 'Published in The Astrophysical Journal Letters (2024) and MNRAS (2022).',
      links: [
        { label: 'ApJL DOI', href: 'https://doi.org/10.3847/2041-8213/ad151f' },
        { label: 'MNRAS DOI', href: 'https://doi.org/10.1093/mnras/stac1817' },
      ],
    },
  },
  {
    title: 'Ray-Tracing from Global GRMHD Simulations',
    stage: 'Published',
    summary:
      'Developed a ray-tracing pipeline for synthetic X-ray spectra from accreting neutron-star surface emission.',
    highlights: [
      'Integrated 3D GRMHD simulation outputs with radiative post-processing.',
      'Mapped accretion-hotspot geometry across stellar magnetic inclinations using global 3D GRMHD simulations.',
      'Quantified how hotspot morphology shapes predicted X-ray pulse behavior for accreting neutron stars.',
      'Used for physically grounded synthetic observables and model comparison.',
    ],
    stack: 'Python, ray tracing, simulation post-processing, HPC',
    publication: {
      citation: 'Published in The Astrophysical Journal (2025).',
      link: {label: 'ApJ DOI', href: 'https://doi.org/10.3847/1538-4357/add472' },
    },
  },
]

const publications = [
  {
    citation:
      'Das, P., Salmi, T., Davelaar, J., Porth, O., and Watts, A. L. (2025). Pulse Profiles of Accreting Neutron Stars from GRMHD Simulations. The Astrophysical Journal, 987(1).',
    link: 'https://doi.org/10.3847/1538-4357/add472',
  },
  {
    citation:
      'Das, P., and Porth, O. (2024). Three-dimensional GRMHD Simulations of Neutron Star Jets. The Astrophysical Journal Letters, 960:L12 (10pp).',
    link: 'https://doi.org/10.3847/2041-8213/ad151f',
  },
  {
    citation:
      'Das, P., Porth, O., and Watts, A. L. (2022). GRMHD simulations of accreting neutron stars with non-dipole fields. Monthly Notices of the Royal Astronomical Society, 515(3), 3144-3161.',
    link: 'https://doi.org/10.1093/mnras/stac1817',
  },
]

const blogs = [
  {
    title: "The Geometry of Yes: Mapping Sycophancy Inside an LLM's Emotion Space",
    outlet: 'LessWrong',
    date: 'July 7, 2026',
    summary:
      'A mechanistic interpretability write-up on emotion-space geometry in Qwen and Gemma, showing that positive-emotion residual directions raise sycophancy while pure compliance can reduce it without making responses harsh.',
    link: 'https://www.lesswrong.com/posts/v6uCyDNBKhrHevhzM/the-geometry-of-yes-mapping-sycophancy-inside-an-llm-s-1',
  },
]

const achievements = [
  {
    title: 'Computing Time Grants (as PI)',
    items: [
      'NWO Call 2022 (11.49 million CPU hours).',
      'PRACE DECI 19 call (2.64 million CPU hours).',
      'Small NWO Request 2022 (1 million CPU hours).',
      'Small NWO Request 2021 (500k CPU hours).',
      'Small NWO Request 2020 (500k CPU hours).',
    ],
  },
  {
    title: 'Research Fellowships',
    items: [
      'THEA Postdoctoral Fellow at Columbia University (July 2024 - January 2026).',
      'Innovation in Science Pursuit and Inspired Research (INSPIRE) Fellowship Grant from the Department of Science and Technology, Government of India (August 2014 - July 2019).',
      "Visitor Student Program (VSP) fellowship from Raman Research Institute in 2015, 2016, and 2019.",
    ],
  },
  {
    title: 'Research Community Contributions',
    items: [
      'Reviewer for The Astrophysical Journal (ApJ), Astronomy & Astrophysics (A&A), and Monthly Notices of the Royal Astronomical Society (MNRAS).',
      'Presented results at 6 international conferences as an invited speaker and delivered contributed talks at several other meetings.',
    ],
  },
]

const careerTimeline = [
  {
    period: 'Jul 2024 - Jan 2026',
    title: 'THEA Postdoctoral Fellow',
    organization: 'Columbia University (New York, USA)',
    details:
      'Developed GPU-accelerated computational fluid dynamics simulations of turbulence in highly magnetized radiation-dominated environments and ray-tracing pipelines from global 3D GRMHD simulations.',
  },
  {
    period: 'Sep 2019 - Jun 2024',
    title: 'Ph.D. in Physics',
    organization: 'University of Amsterdam (The Netherlands)',
    details:
      'Research focused on general-relativistic magnetohydrodynamics (GRMHD) simulations of compact objects. Developed the first 3D finite-volume GRMHD simulations of accreting neutron stars with Adaptive Mesh Refinement (AMR). Built MPI-parallelized Fortran/C solvers and managed large-scale HPC data pipelines for computational astrophysics.'
  },
  {
    period: 'Aug 2014 - Jun 2019',
    title: '5-Year BS-MS (Integrated Dual Degree)',
    organization: 'Indian Institute of Science Education and Research (IISER) Kolkata (India)',
    details: 'Integrated BS-MS specializing in physics, with a rigorous background in applied mathematics and computational methods for scientific research.',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-head">
        <h3>{project.title}</h3>
        <span className="project-stage">{project.stage}</span>
      </div>
      <p>{project.summary}</p>
      <div className="highlights">
        {project.highlights.map((highlight) => (
          <p key={highlight}>{highlight}</p>
        ))}
      </div>
      <p className="stack">{project.stack}</p>
      {project.publication && (
        <div className="project-publication">
          <p>{project.publication.citation}</p>
          <div className="paper-links">
            {project.publication.links?.length ? (
              project.publication.links.map((paperLink) => (
                <a key={paperLink.href} href={paperLink.href} target="_blank" rel="noreferrer" className="paper-link">
                  {paperLink.label}
                </a>
              ))
            ) : (
              <a href={project.publication.link} target="_blank" rel="noreferrer" className="paper-link">
                DOI
              </a>
            )}
          </div>
        </div>
      )}
      {(project.github || project.article || project.app) && (
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="repo-link">
              View Project on GitHub
            </a>
          )}
          {project.article && (
            <a href={project.article.href} target="_blank" rel="noreferrer" className="repo-link">
              {project.article.label}
            </a>
          )}
          {project.app && (
            <a href={project.app.href} target="_blank" rel="noreferrer" className="repo-link">
              {project.app.label}
            </a>
          )}
        </div>
      )}
    </article>
  )
}

function BlogCard({ blog }) {
  return (
    <article className="blog-card reveal">
      <div className="blog-meta">
        <span>{blog.outlet}</span>
        <span>{blog.date}</span>
      </div>
      <h3>{blog.title}</h3>
      <p>{blog.summary}</p>
      <a href={blog.link} target="_blank" rel="noreferrer" className="repo-link">
        Read Post
      </a>
    </article>
  )
}

const routes = [
  { path: '/projects', label: 'Projects' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/publications', label: 'Publications' },
  { path: '/contact', label: 'Contact' },
]

function normalizePath(pathname) {
  const cleanPath = pathname.replace(/\/+$/, '')
  return cleanPath || '/'
}

function HomePage() {
  return (
    <>
      <section className="hero reveal">
        <div className="hero-content">
          <p className="eyebrow">
            Computational Scientist | Computational Fluid Dynamics | Machine Learning & Data Science |
            High-Performance Computing | Physics-Driven Modeling
          </p>
          <p className="lede">
            Computational scientist with a PhD in astronomy building scientific machine learning, computational fluid
            dynamics (CFD), and physics-based simulation systems. I develop reproducible workflows that connect theory,
            large-scale data, and high-performance computation.
          </p>
          <div className="focus-row">
            {focusAreas.map((area) => (
              <span
                key={area}
                className={area === 'Computational fluid dynamics (CFD)' ? 'focus-pill focus-pill-cfd' : 'focus-pill'}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-photo-wrap hero-photo-slot">
          <img className="hero-photo" src="/profile-photo.jpg" alt="Pushpita Das profile photo" />
        </div>
      </section>

      <section className="section-block">
        <div className="section-title reveal">
          <p>Experience</p>
          <h2>Career Timeline</h2>
        </div>
        <div className="timeline-list">
          {careerTimeline.map((entry) => (
            <article key={`${entry.title}-${entry.period}`} className="timeline-item reveal">
              <p className="timeline-period">{entry.period}</p>
              <div className="timeline-content-card">
                <h3>{entry.title}</h3>
                <p className="timeline-org">{entry.organization}</p>
                <p>{entry.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ProjectsPage() {
  return (
    <>
      <section className="section-block">
        <div className="section-title reveal">
          <p>Selected Work</p>
          <h2>Machine Learning Projects</h2>
        </div>
        <div className="project-grid">
          {mlProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-title reveal">
          <p>Astrophysics Research</p>
          <h2>General Relativistic Magnetohydrodynamics (GRMHD) and Ray-Tracing Projects</h2>
        </div>
        <div className="project-grid">
          {physicsProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

function BlogsPage() {
  return (
    <section className="section-block blogs">
      <div className="section-title reveal">
        <p>Writing</p>
        <h2>Blogs</h2>
      </div>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard key={blog.link} blog={blog} />
        ))}
      </div>
    </section>
  )
}

function AchievementsPage() {
  return (
    <section className="section-block achievements">
      <div className="section-title reveal">
        <p>Milestones</p>
        <h2>Achievements</h2>
      </div>
      <div className="achievement-list">
        {achievements.map((achievement) => (
          <article key={achievement.title} className="achievement-item reveal">
            <h3>{achievement.title}</h3>
            <ul>
              {achievement.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function PublicationsPage() {
  return (
    <section className="section-block publications">
      <div className="section-title reveal">
        <p>Research</p>
        <h2>Selected Publications</h2>
      </div>
      <div className="publication-list">
        {publications.map((paper) => (
          <article key={paper.link} className="publication-item reveal">
            <p>{paper.citation}</p>
            <a href={paper.link} target="_blank" rel="noreferrer">
              DOI
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="section-block contact-section">
      <div className="section-title reveal">
        <p>Get in Touch</p>
        <h2>Contact</h2>
      </div>
      <div className="contact-card reveal">
        <p>Open to research collaborations and roles in scientific ML, CFD, and HPC simulation.</p>
        <div className="contact-links">
          <a href="mailto:pushpitads1996@gmail.com">Email</a>
          <a href="https://github.com/daspushpita" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pushpita-das/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function CurrentPage({ path }) {
  switch (path) {
    case '/projects':
      return <ProjectsPage />
    case '/career':
      return <HomePage />
    case '/blogs':
      return <BlogsPage />
    case '/achievements':
      return <AchievementsPage />
    case '/publications':
      return <PublicationsPage />
    case '/contact':
      return <ContactPage />
    case '/':
      return <HomePage />
    default:
      return <HomePage />
  }
}

function getInitialPath() {
  const redirectedPath = window.sessionStorage.getItem('redirectPath')

  if (redirectedPath) {
    window.sessionStorage.removeItem('redirectPath')
    window.history.replaceState({}, '', redirectedPath)
    return normalizePath(redirectedPath)
  }

  return normalizePath(window.location.pathname)
}

function App() {
  const [path, setPath] = useState(getInitialPath)

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname))
      window.scrollTo({ top: 0 })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (event, nextPath) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return
    }

    event.preventDefault()
    if (path !== nextPath) {
      window.history.pushState({}, '', nextPath)
      setPath(nextPath)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="top-nav">
        <a href="/" className="brand" onClick={(event) => navigate(event, '/')}>
          Pushpita Das
        </a>
        <nav>
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className={path === route.path ? 'active-nav' : undefined}
              onClick={(event) => navigate(event, route.path)}
            >
              {route.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <CurrentPage path={path} />
      </main>

      <footer className="footer reveal">
        <p>Pushpita Das</p>
        <div>
          <a href="/" onClick={(event) => navigate(event, '/')}>Home</a>
        </div>
      </footer>
    </div>
  )
}

export default App
