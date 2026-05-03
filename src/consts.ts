// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Geonho Song";
export const SITE_DESCRIPTION = "The academic portfolio of Geonho(Harry) Song.";

export const CV_URL = "https://shravangoswami.com/resume.pdf";

export const CONTACT = {
  organization: "Georgia Institute of Technology",
  addressLines: ["Class of 2031"],
  emails: ["harrysong.20070102@gmail.com"],
};

export type SocialIcon = "website" | "scholar" | "email" | "github";
// | "linkedin"
// | "twitter"

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: "GitHub",
    href: "https://github.com/standpot",
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:harrysong.20070102@gmail.com",
    icon: "email",
  },
  // {
  //   label: "LinkedIn",
  //   href: "https://www.linkedin.com/in/shravangoswami/",
  //   icon: "linkedin",
  // },
  // {
  //   label: "X",
  //   href: "https://x.com/shravangoswamii",
  //   icon: "twitter",
  // },
];

export const FOOTER_CREDIT = {
  designerName: "Shravan Goswami",
  designerUrl: "https://shravangoswami.com",
  sourceLabel: "Open Source",
  sourceUrl: "https://github.com/shravanngoswamii/astro-scholar",
};
