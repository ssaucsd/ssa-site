// you can add more to the PageMetaData type (such as Open Graph data) to be consumed by your PageTemplate component
export interface PageMetaData {
  url: string; // required by plugin
  bundleEntryPoint: string; // required by plugin
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}

// here you will list all your pages and their needed meta data.
export const pages: PageMetaData[] = [
  {
    url: "index.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Singapore Students Association at UCSD",
    description:
      "Welcome to the Singapore Students Association at UCSD! Join us for events, community, and support.",
    keywords: "SSA, UCSD, Singapore, Students, Association, Community, Events",
    ogTitle: "SSA at UCSD - Home",
    ogDescription:
      "Welcome to the Singapore Students Association at UCSD! Join us for events, community, and support.",
    ogType: "website",
  },
  {
    url: "board.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Meet the Board - SSA at UCSD",
    description:
      "Meet the dedicated board members of the Singapore Students Association at UCSD.",
    keywords: "SSA, UCSD, Board, Leadership, Team",
    ogTitle: "Meet the Board - SSA at UCSD",
    ogDescription:
      "Meet the dedicated board members of the Singapore Students Association at UCSD.",
    ogType: "website",
  },
  {
    url: "mission.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Our Mission - SSA at UCSD",
    description:
      "Learn about the mission and values of the Singapore Students Association at UCSD.",
    keywords: "SSA, UCSD, Mission, Values, Goals",
    ogTitle: "Our Mission - SSA at UCSD",
    ogDescription:
      "Learn about the mission and values of the Singapore Students Association at UCSD.",
    ogType: "website",
  },
  {
    url: "events.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Events - SSA at UCSD",
    description:
      "Check out upcoming events hosted by the Singapore Students Association at UCSD.",
    keywords: "SSA, UCSD, Events, Activities, Social",
    ogTitle: "Events - SSA at UCSD",
    ogDescription:
      "Check out upcoming events hosted by the Singapore Students Association at UCSD.",
    ogType: "website",
  },
  {
    url: "ensemble.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Ensemble - SSA at UCSD",
    description: "Discover the SSA Ensemble and their performances.",
    keywords: "SSA, UCSD, Ensemble, Music, Performance",
    ogTitle: "Ensemble - SSA at UCSD",
    ogDescription: "Discover the SSA Ensemble and their performances.",
    ogType: "website",
  },
  {
    url: "support.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Support - SSA at UCSD",
    description:
      "Find support resources and information for Singaporean students at UCSD.",
    keywords: "SSA, UCSD, Support, Resources, Help",
    ogTitle: "Support - SSA at UCSD",
    ogDescription:
      "Find support resources and information for Singaporean students at UCSD.",
    ogType: "website",
  },
  {
    url: "join.html",
    bundleEntryPoint: "/src/main.tsx",
    title: "Join Us - SSA at UCSD",
    description:
      "Become a member of the Singapore Students Association at UCSD today!",
    keywords: "SSA, UCSD, Join, Membership, Sign up",
    ogTitle: "Join Us - SSA at UCSD",
    ogDescription:
      "Become a member of the Singapore Students Association at UCSD today!",
    ogType: "website",
  },
];
