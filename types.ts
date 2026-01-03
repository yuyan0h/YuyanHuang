export interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  gpa?: string;
  details?: string[];
}

export interface Project {
  title: string;
  role: string;
  duration: string;
  advisor?: string;
  description: string[];
  category?: string; // e.g. "#1 AI FOR URBAN SUSTAINABILITY"
}

export interface Publication {
  authors: string;
  year: string;
  title: string;
  venue: string;
  link?: string;
  status?: string; 
  type: 'Journal Papers' | 'Conference Papers' | 'Presentations' | 'Book Chapters' | 'Reports & White Papers';
}

export interface Award {
  title: string;
  year: string;
  description?: string;
}

export interface Experience {
  title: string;
  organization: string;
  location?: string;
  duration: string;
  description: string[];
}

export interface Photo {
  src: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface PhotographyProject {
  id: string;
  title: string;
  description: string;
  location?: string;
  year?: string;
  images: Photo[];
}

export enum SectionType {
  ABOUT = 'about',
  EXPERIENCES = 'experiences', // Projects (Research) + Work + Edu
  PUBLICATIONS = 'publications',
  PERSONAL = 'personal',
}