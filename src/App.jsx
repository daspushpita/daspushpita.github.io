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
  },
]

const physicsProjects = [
  {
    title: 'GRMHD simulations of accreting neutron stars',
    stage: 'Published',
    summary:
      'Developed large-scale 3D GRMHD simulations of accreting neutron stars across jet-producing and multipolar magnetic field regimes.',
    highlights: [
      'Built MPI-parallelized Fortran/C workflows for robust multiphysics simulations on HPC clusters.',
      'Modeled both jet formation and non-dipole (multipolar) field geometries in extreme magnetized flows.',
      'Processed and analyzed approximately 80 TB of simulation data.',
      'Published in ApJL (2024) and MNRAS (2022).',
    ],
    stack: 'Fortran, C, MPI, Python, GRMHD, HPC',
  },
  {
    title: 'Ray-Tracing from Global GRMHD Simulations',
    stage: 'Research',
    summary:
      'Developed a ray-tracing pipeline for synthetic X-ray spectra from accreting neutron-star surface emission.',
    highlights: [
      'Integrated 3D GRMHD simulation outputs with radiative post-processing.',
      'Built analysis tooling for turbulence in highly magnetized, radiation-dominated flows.',
      'Used for physically grounded synthetic observables and model comparison.',
    ],
    stack: 'Python, ray tracing, simulation post-processing, HPC',
  },
]

const publications = [
  {
    citation:
      'Das, P. et al. (2025). Pulse Profiles of Accreting Neutron Stars from GRMHD Simulations. The Astrophysical Journal.',
    link: 'https://doi.org/10.3847/1538-4357/add472',
  },
  {
    citation:
      'Das, P. and Porth, O. (2024). Three-dimensional GRMHD Simulations of Neutron Star Jets. The Astrophysical Journal Letters.',
    link: 'https://doi.org/10.3847/2041-8213/ad151f',
  },
  {
    citation:
      'Das, P. et al. (2022). GRMHD simulations of accreting neutron stars with non-dipole fields. MNRAS.',
    link: 'https://doi.org/10.1093/mnras/stac1817',
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
            <p>Computational Astrophysics</p>
            <h2>GRMHD and Ray-Tracing Projects</h2>
          </div>
          <div className="project-grid">
            {physicsProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
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
