import './App.css'

const focusAreas = [
  'Scientific machine learning',
  'Large language models',
  'Multimodal retrieval systems',
  'GPU and HPC simulation',
]

const mlProjects = [
  {
    title: 'AstroGPT',
    stage: 'Active',
    summary:
      'Teacher-student distillation framework for controllable scientific text generation over 80,000+ astrophysics abstracts.',
    highlights: [
      'Built ingestion and preprocessing pipelines from arXiv metadata to schema-constrained training corpora.',
      'Using LLaMA-8B teacher outputs to fine-tune GPT-2 student models and evaluate quality-vs-cost tradeoffs.',
      'Added filtering and quality control steps to reduce hallucinations and improve reproducibility.',
    ],
    stack: 'PyTorch, NLP, LLM distillation, experiment tracking',
    github: 'https://github.com/daspushpita/MiniAstroGPT',
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
    stack: 'Multimodal ML, embeddings, retrieval, ranking',
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
    github: 'https://github.com/daspushpita/predict-parkinsons',
  },
  {
    title: "Parkinson's Severity Prediction",
    stage: 'Completed',
    summary:
      "Supervised multimodal ML pipeline for Parkinson's disease severity prediction.",
    highlights: [
      'Implemented feature selection, preprocessing, and model training across LR, XGBoost, and RF.',
      'Authored approximately 95% of the codebase and full evaluation pipeline.',
      'Achieved 66% accuracy and 96% recall with regularized logistic regression.',
    ],
    stack: 'Scikit-learn, XGBoost, multimodal tabular ML',
    github: 'https://github.com/daspushpita/heat_ml',
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
      'Published in The Astrophysical Journal Letters (2024) and MNRAS (2022).',
    ],
    stack: 'Fortran, C, MPI, Python, finite-volume methods, AMR, CFD, GRMHD, HPC',
  },
  {
    title: 'Ray-Tracing from Global GRMHD Simulations',
    stage: 'Published',
    summary:
      'Developed a ray-tracing pipeline for synthetic X-ray pulse profiles from accreting neutron-star surface emission.',
    highlights: [
      'Integrated 3D GRMHD simulation outputs with radiative post-processing.',
      'Built analysis tooling for turbulence in highly magnetized, radiation-dominated flows.',
      'Published in The Astrophysical Journal (2025) for physically grounded synthetic observables and model comparison.',
    ],
    stack: 'Python, ray tracing, simulation post-processing, HPC',
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

const careerTimeline = [
  {
    period: 'Jul 2024 - Jan 2026',
    title: 'THEA Postdoctoral Fellow',
    organization: 'Columbia University (New York, USA)',
    details:
      'Developed GPU-accelerated simulations of turbulence in highly magnetized radiation-dominated environments and ray-tracing pipelines from global 3D GRMHD simulations.',
  },
  {
    period: 'Sep 2019 - Jun 2024',
    title: 'Graduate Research Scientist',
    organization: 'University of Amsterdam (The Netherlands)',
    details:
      'Built first 3D finite-volume GRMHD simulations of accreting neutron stars with AMR, with MPI-parallelized Fortran/C solvers and large-scale HPC data pipelines.',
  },
  {
    period: 'Sep 2019 - Jun 2024',
    title: 'Ph.D. in Physics',
    organization: 'University of Amsterdam (The Netherlands)',
    details: 'Doctoral training focused on computational astrophysics, GRMHD, and high-performance scientific computing.',
  },
  {
    period: 'Aug 2014 - Jun 2019',
    title: '5-Year BS-MS',
    organization: 'Indian Institute of Science Education and Research (IISER) Kolkata, India',
    details: 'Integrated training in physics, applied mathematics, and computational methods for scientific research.',
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
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="repo-link">
          View Project on GitHub
        </a>
      )}
    </article>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <a href="#top" className="brand">
          Pushpita Das
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#career">Career</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero reveal">
          <div className="hero-content">
            <p className="eyebrow">
              Computational Scientist | Machine Learning & Data Science | High-Performance Computing | Physics-Driven
              Modeling
            </p>
            <p className="lede">
              PhD-trained researcher focused on scientific machine learning, multimodal AI, and high-performance numerical
              modeling. I build reproducible systems that connect theory, data, and computation.
            </p>
            <div className="focus-row">
              {focusAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
          <div className="hero-photo-wrap hero-photo-slot">
            <img className="hero-photo" src="/profile-photo.jpg" alt="Pushpita Das profile photo" />
          </div>
        </section>

        <section id="projects" className="section-block">
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
            <h2>GRMHD and Ray-Tracing Projects</h2>
          </div>
          <div className="project-grid">
            {physicsProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="career" className="section-block career-section">
          <div className="section-title reveal">
            <p>Education and Experience</p>
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

        <section id="publications" className="section-block publications">
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

        <section id="contact" className="section-block contact-section">
          <div className="section-title reveal">
            <p>Get in Touch</p>
            <h2>Contact</h2>
          </div>
          <div className="contact-card reveal">
            <p>Open to research collaborations and ML engineering roles.</p>
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
      </main>

      <footer className="footer reveal">
        <p>Pushpita Das</p>
        <div>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
