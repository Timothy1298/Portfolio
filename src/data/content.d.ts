export interface ContentType {
  name: string;
  title: string;
  summary: string;
  heroCTA: Array<{ label: string; href: string; download?: boolean }>;
  about: {
    bio: string;
    experience: Array<{ role: string; company: string; year: string; details?: string }>;
    education: Array<{ degree: string; school: string; year: string }>;
    certifications: Array<{ name: string; year: string }>;
  };
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    others: string[];
    stats: Array<{ label: string; value: number }>;
  };
  projects: Array<{
    id: string;
    title: string;
    summary: string;
    tags: string[];
    image: string;
    link: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    feedback: string;
    avatar: string;
  }>;
  blog: Array<{
    id: string;
    title: string;
    date: string;
    summary: string;
    tags: string[];
    link: string;
  }>;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
declare const content: ContentType;
export default content;
