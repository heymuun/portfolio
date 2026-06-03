export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  image?: string;
}

export const certifications: Certification[] = [];
