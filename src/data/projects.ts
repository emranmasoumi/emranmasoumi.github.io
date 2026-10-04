export const projects = [
  {
    slug: 'ai-product-recommendation',
    number: '01',
    title: 'AI-Powered Product Recommendation System',
    category: 'AI Engineering · E-Commerce',
    role: 'AI & Python Developer · Solution Architect',
    image: '/images/projects/ai-recommendation.jpg',
    summary:
      'An AI-powered application for an e-commerce rug business that helps customers visualize and select products for their rooms.',
    overview:
      'The system combines a Python/FastAPI backend with image-processing and recommendation components. The architecture is modular and designed to support further AI and LLM integration as the product evolves.',
    built: [
      'Python / FastAPI backend with REST API endpoints',
      'Image-processing components for room and product workflows',
      'Recommendation components for similarity, style, colour and user preferences',
      'Validation, request handling and modular business logic',
      'Docker-based application deployment',
      'Nginx reverse proxy with HTTPS on a cloud server'
    ],
    technologies: [
      'Python',
      'FastAPI',
      'AI / Computer Vision',
      'REST API',
      'Docker',
      'Nginx'
    ],
    outcome:
      'A production-oriented foundation for an e-commerce AI system, being developed toward personalized recommendations based on room and product attributes.'
  },
  {
    slug: 'customer-segmentation',
    number: '02',
    title: 'Customer Segmentation & E-Commerce Analytics',
    category: 'Data Science · Machine Learning',
    role: 'Data Scientist · Machine Learning Engineer',
    image: '/images/projects/customer-segmentation.jpg',
    summary:
      'An end-to-end customer analytics and machine learning pipeline built from transactional e-commerce data.',
    overview:
      'The project transforms raw transactional records into customer-level features and meaningful segments. The analysis connects machine learning outputs with business questions around targeting, retention and marketing strategy.',
    built: [
      'Data cleaning and transformation pipeline',
      'Customer-level feature engineering',
      'RFM-style behavioral analysis',
      'Clustering-based customer segmentation',
      'Segment profiling and purchasing-behavior analysis',
      'Business-oriented interpretation of model outputs'
    ],
    technologies: [
      'Python',
      'Pandas',
      'scikit-learn',
      'Machine Learning',
      'Data Science'
    ],
    outcome:
      'A reusable analytical workflow for turning transactional data into interpretable customer segments and actionable business insights.'
  },
  {
    slug: 'rag-document-assistant',
    number: '03',
    title: 'RAG Document Assistant',
    category: 'LLM Engineering · Generative AI',
    role: 'AI / LLM Engineer',
    image: '/images/projects/rag-assistant.jpg',
    summary:
      'A Retrieval-Augmented Generation application for asking natural-language questions about private documents.',
    overview:
      'The application follows a modular RAG pipeline: documents are ingested and chunked, embeddings are generated, relevant context is retrieved, and an LLM produces answers grounded in the retrieved information.',
    built: [
      'Document ingestion and processing pipeline',
      'Document chunking and embedding generation',
      'Vector-based context retrieval',
      'Prompt handling and grounded LLM generation',
      'Modular backend components for retrieval and inference',
      'FastAPI endpoints for application integration'
    ],
    technologies: [
      'Python',
      'RAG',
      'Large Language Models',
      'LangChain',
      'FastAPI'
    ],
    outcome:
      'A modular foundation for document-based AI assistants where retrieval and generation can be developed and evaluated as separate components.'
  },
  {
    slug: 'arofrag',
    number: '04',
    title: 'Scientific Computing & Automation Software',
    category: 'Scientific Computing · C++ / Python',
    role: 'Lead Developer · Computational Scientist',
    image: '/images/projects/arofrag.jpg',
    summary:
      'AROFRAG is scientific computing software for automating molecular fragmentation and computational chemistry workflows.',
    overview:
      'The software was designed to automate complex molecular fragmentation workflows and support large-scale quantum chemistry calculations. It combines algorithm development in Python and C++ with reproducible scientific computation.',
    built: [
      'Algorithms for systematic molecular fragmentation',
      'Molecular-structure processing workflows',
      'Python and C++ scientific software components',
      'Automation of repetitive computational tasks',
      'Workflows supporting large-scale quantum chemistry calculations',
      'Reproducible computational processing'
    ],
    technologies: [
      'Python',
      'C++',
      'Automation',
      'Algorithm Development',
      'Scientific Computing'
    ],
    outcome:
      'The software reduced repetitive manual work and enabled reproducible computational workflows. The methodology and software were validated through peer-reviewed scientific research.'
  }
];
