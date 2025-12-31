
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  tags: string[];
  abstract: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Professor' | 'PhD Student' | 'Master Student' | 'Postdoc' | 'Alumni';
  education?: string;
  researchInterests?: string[];
  imageUrl: string;
  email?: string;
  link?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Ongoing' | 'Completed';
  fundingBody?: string;
}
