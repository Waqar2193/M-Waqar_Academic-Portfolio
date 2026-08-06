export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  googleScholar: string;
  orcid: string;
  twitter?: string;
  researchgate?: string;
  office?: string;
  address?: string;
}

export const contact: ContactInfo = {
  email: "m-waqar@stu.jejunu.ac.kr",
  linkedin: "http://www.linkedin.com/in/waqar2193/",
  github: "https://github.com/Waqar2193",
  googleScholar: "https://scholar.google.com/citations?user=fSifQmcAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0002-8413-2926",
  researchgate: "https://www.researchgate.net/profile/Muhammad-Waqar-73?ev=hdr_xprf",
  office: "Machine Learning Laboratory, Jeju National University",
  address: "Jeju, Republic of Korea",
};