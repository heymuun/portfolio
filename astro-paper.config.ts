import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
     url: "https://heymun-pareek.dev/",
    title: "Heymun Pareek",
     description: "Cybersecurity student documenting projects, learning, certifications, and future content.",
     author: "Heymun Pareek",
     profile: "https://www.linkedin.com/in/heymun-pareek/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
        url: "https://github.com/heymuun/portfolio/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/heymuun" },
    { name: "x",        url: "https://x.com/TheRedHatHacker" },
    { name: "linkedin", url: "https://www.linkedin.com/in/heymun-pareek/" },
    { name: "mail",     url: "mailto:heymun.microsoft@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});