export interface BlogSection {
  heading: string;
  paragraphs: string[];
  items?: string[];
}

export interface BlogPost {
  slug: string;
  number: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  featured?: boolean;
  content: {
    introduction: string;
    sections: BlogSection[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-reliable-rag-systems',
    number: '01',
    title: 'Building Reliable RAG Systems',
    category: 'AI Engineering',
    date: '2026-10-04',
    readTime: '8 min read',
    excerpt:
      'Architecture, retrieval, evaluation and practical deployment of reliable Retrieval-Augmented Generation systems.',
    tags: ['RAG', 'LLM', 'AI Engineering', 'Information Retrieval'],
    featured: true,

    content: {
      introduction:
        'Retrieval-Augmented Generation has become one of the most practical approaches for building AI systems that work with private, domain-specific, or frequently changing knowledge. However, a reliable RAG system requires much more than connecting a vector database to an LLM.',

      sections: [
        {
          heading: 'Architecture matters',
          paragraphs: [
            'A production RAG system should be designed as a complete information retrieval and generation pipeline.',
            'Document ingestion, chunking, embedding, retrieval, reranking, context construction and generation all influence the final answer.'
          ],
          items: [
            'Document ingestion and preprocessing',
            'Chunking and metadata design',
            'Embedding and vector retrieval',
            'Reranking and context selection',
            'Generation and response validation'
          ]
        },
        {
          heading: 'Retrieval quality comes first',
          paragraphs: [
            'A powerful language model cannot compensate for poor retrieval. If the relevant information never reaches the context window, the model has little chance of producing a reliable answer.',
            'For this reason, retrieval should be evaluated independently from generation.'
          ]
        },
        {
          heading: 'Evaluation is essential',
          paragraphs: [
            'Reliable RAG systems require systematic evaluation rather than relying only on subjective inspection of a few answers.',
            'Retrieval quality, relevance, groundedness, faithfulness and answer quality should be measured separately where possible.'
          ]
        },
        {
          heading: 'From prototype to deployment',
          paragraphs: [
            'Moving a RAG application from a notebook to production introduces additional concerns including latency, observability, caching, failure handling, access control and cost.',
            'A production-ready architecture should therefore treat retrieval and generation as measurable software components rather than a single AI prompt.'
          ]
        }
      ]
    }
  },

  {
    slug: 'from-computational-chemistry-to-ai-engineering',
    number: '02',
    title: 'From Computational Chemistry to AI Engineering',
    category: 'Career & Research',
    date: '2026-09-20',
    readTime: '7 min read',
    excerpt:
      'How scientific thinking shaped the way I approach AI systems, computational problems and engineering challenges.',
    tags: [
      'AI Engineering',
      'Computational Chemistry',
      'Scientific Computing',
      'Career'
    ],

    content: {
      introduction:
        'Moving from computational chemistry toward AI engineering may appear to be a transition between two very different fields. In practice, many of the underlying skills are remarkably similar.',

      sections: [
        {
          heading: 'Thinking in models',
          paragraphs: [
            'Scientific research begins with a problem that must be represented through a model. Computational chemistry taught me to think carefully about assumptions, approximations, parameters and the limitations of a model.',
            'The same mindset is valuable when designing machine learning and AI systems.'
          ]
        },
        {
          heading: 'Working with complex data',
          paragraphs: [
            'Research involves generating, processing, validating and interpreting large amounts of computational data.',
            'This experience naturally translates into modern data science workflows involving preprocessing, feature engineering, statistical analysis and model evaluation.'
          ]
        },
        {
          heading: 'Validation and uncertainty',
          paragraphs: [
            'One of the most important lessons from scientific computing is that a computational result is not automatically a reliable result.',
            'Models need validation, quantitative evaluation and careful analysis of uncertainty. These principles are equally important when building AI systems.'
          ]
        },
        {
          heading: 'From research code to engineering',
          paragraphs: [
            'Developing automated Python workflows and computational algorithms provided a bridge from scientific research toward software and AI engineering.',
            'The transition is therefore less about abandoning scientific computing and more about applying the same analytical discipline to a broader class of intelligent systems.'
          ]
        }
      ]
    }
  },

  {
    slug: 'rag-vs-fine-tuning',
    number: '03',
    title: 'RAG vs Fine-Tuning',
    category: 'Machine Learning',
    date: '2026-09-05',
    readTime: '6 min read',
    excerpt:
      'A practical framework for deciding when to use Retrieval-Augmented Generation, fine-tuning, or a combination of both.',
    tags: ['RAG', 'Fine-Tuning', 'LLM', 'Machine Learning'],

    content: {
      introduction:
        'RAG and fine-tuning solve different problems. Choosing between them requires understanding whether the challenge is primarily about knowledge, behaviour, style, or model capability.',

      sections: [
        {
          heading: 'When RAG is the better choice',
          paragraphs: [
            'RAG is particularly useful when an AI system needs access to external or changing information without modifying the underlying model.',
            'It is often a strong choice for enterprise knowledge bases, documentation, internal search and domain-specific question answering.'
          ]
        },
        {
          heading: 'When fine-tuning makes sense',
          paragraphs: [
            'Fine-tuning is more appropriate when the goal is to change how a model behaves rather than simply providing it with additional information.',
            'Examples include adapting output style, learning specific task patterns, or improving performance on a well-defined domain task.'
          ]
        },
        {
          heading: 'A practical decision framework',
          paragraphs: [
            'The first question should be whether the missing capability is knowledge or behaviour.',
            'If the system needs new information, retrieval is often the first approach to investigate. If the model needs to learn a new behaviour or task pattern, fine-tuning may be more appropriate.'
          ],
          items: [
            'Need access to changing knowledge → consider RAG',
            'Need domain-specific behaviour → consider fine-tuning',
            'Need both knowledge and behaviour adaptation → consider combining both approaches',
            'Need reliable answers → evaluate retrieval and generation independently'
          ]
        },
        {
          heading: 'The engineering perspective',
          paragraphs: [
            'The decision should ultimately be driven by measurable requirements such as accuracy, latency, maintainability, cost and data availability.',
            'There is no universal winner between RAG and fine-tuning. The right architecture depends on the problem being solved.'
          ]
        }
      ]
    }
  }
];
