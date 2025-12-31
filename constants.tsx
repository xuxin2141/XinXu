
import { Publication, TeamMember, NewsItem, Project } from './types';

export const PROFESSOR_INFO = {
  name: "Dr. Xiao Jie",
  title: "Professor of Artificial Intelligence",
  department: "School of Computer Science & Technology",
  university: "Soochow University",
  email: "jie.xiao@suda.edu.cn",
  office: "Complex Building, Room 405",
  bio: "Dr. Xiao Jie is a Professor at the School of Computer Science and Technology. His research focuses on Machine Learning, Computer Vision, and their applications in biomedical engineering. He has published over 100 papers in top-tier journals and conferences.",
  researchSummary: "Our group focuses on pushing the boundaries of deep learning and pattern recognition. We are particularly interested in explainable AI and robust computer vision systems that can function in high-stakes environments like autonomous driving and medical diagnosis.",
  imageUrl: "https://picsum.photos/seed/prof-xiao/400/500"
};

export const PUBLICATIONS: Publication[] = [
  {
    id: '1',
    title: "Deep Temporal Representation Learning for Medical Image Sequence Analysis",
    authors: ["Jie Xiao", "Zhang San", "Li Si"],
    journal: "IEEE Transactions on Medical Imaging",
    year: 2024,
    doi: "10.1109/TMI.2024.123456",
    tags: ["Deep Learning", "Medical Imaging"],
    abstract: "This paper proposes a novel framework for capturing long-term temporal dependencies in surgical video streams..."
  },
  {
    id: '2',
    title: "Robust Feature Extraction via Contrastive Self-Supervised Learning",
    authors: ["Wang Wu", "Jie Xiao"],
    journal: "CVPR",
    year: 2023,
    tags: ["Computer Vision", "Self-Supervised"],
    abstract: "We introduce a new loss function for self-supervised contrastive learning that improves robustness against common image corruptions."
  },
  {
    id: '3',
    title: "Attention-based Graph Neural Networks for Chemical Property Prediction",
    authors: ["Zhang San", "Zhao Liu", "Jie Xiao"],
    journal: "Journal of Cheminformatics",
    year: 2023,
    tags: ["Graph Neural Networks", "Chemistry"],
    abstract: "Predicting molecular properties remains a challenge; we use GNNs with multi-head attention to capture spatial relationships."
  },
  {
    id: '4',
    title: "Efficient Transformers for Large-Scale Video Processing",
    authors: ["Li Si", "Jie Xiao"],
    journal: "NeurIPS",
    year: 2022,
    tags: ["Transformers", "Video"],
    abstract: "Processing high-resolution video requires immense computation. Our linear-complexity attention mechanism reduces overhead by 40%."
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'prof',
    name: "Dr. Jie Xiao",
    role: "Professor",
    education: "PhD from Tsinghua University",
    imageUrl: "https://picsum.photos/seed/prof-xiao/300/300",
    email: "jie.xiao@suda.edu.cn",
    researchInterests: ["Computer Vision", "Medical AI"]
  },
  {
    id: 'phd1',
    name: "Zhang San",
    role: "PhD Student",
    education: "B.S. from Soochow University",
    imageUrl: "https://picsum.photos/seed/stu1/300/300",
    researchInterests: ["Graph Neural Networks", "Bioinformatics"]
  },
  {
    id: 'phd2',
    name: "Li Si",
    role: "PhD Student",
    education: "M.S. from Fudan University",
    imageUrl: "https://picsum.photos/seed/stu2/300/300",
    researchInterests: ["Object Detection", "Robotics"]
  },
  {
    id: 'm1',
    name: "Wang Wu",
    role: "Master Student",
    imageUrl: "https://picsum.photos/seed/stu3/300/300",
    researchInterests: ["NLP", "Reinforcement Learning"]
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: "2024-05-15",
    title: "New Paper Accepted at CVPR 2024",
    content: "Our work on robust video processing was accepted for an oral presentation."
  },
  {
    id: 'n2',
    date: "2024-03-10",
    title: "Dr. Xiao invited to Keynote at National AI Summit",
    content: "Dr. Xiao will be discussing the future of medical AI in the upcoming summit."
  },
  {
    id: 'n3',
    date: "2023-12-01",
    title: "Zhang San successfully defended his Master's thesis",
    content: "Congratulations to Zhang San for his excellent research on GNNs."
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Explainable AI for Early Disease Detection",
    description: "Developing models that can provide human-readable explanations for medical diagnoses.",
    status: "Ongoing",
    fundingBody: "National Natural Science Foundation of China"
  },
  {
    id: 'p2',
    title: "Efficient Computer Vision for Low-Power Devices",
    description: "Optimizing deep learning models for edge deployment in smart city cameras.",
    status: "Completed",
    fundingBody: "Industrial Partner Program"
  }
];
