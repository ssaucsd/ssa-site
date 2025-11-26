export interface event {
  name: string;
  upcoming: boolean;
  date: string;
  flyerUrl: string;
}

export const events: event[] = [
  {
    name: "Fall Concert",
    upcoming: true,
    date: "December 4, 2025",
    flyerUrl:
      "https://ba961nquml.ufs.sh/f/8WZL3qQlnribAwPNmbYq0QkcvuIJnysmrS2RUKHBWFD5eCEo",
  },
  {
    name: "Tapex Fundraiser",
    upcoming: true,
    date: "December 3, 2025",
    flyerUrl:
      "https://ba961nquml.ufs.sh/f/8WZL3qQlnribtkFF0LhkNZc1mibOKGHoS7280zB9gFRltfhT",
  },
  {
    name: "SD Symphony Social",
    upcoming: false,
    date: "November 14, 2025",
    flyerUrl: "/assets/events/sdsfall.webp",
  },
  {
    name: "SSA x Yogurt World Fundraiser",
    upcoming: false,
    date: "October 8, 2025",
    flyerUrl: "/assets/events/yyf.webp",
  },
  {
    name: "Fall GBM",
    upcoming: false,
    date: "October 1, 2025",
    flyerUrl: "/assets/events/fallgbm.webp",
  },
  {
    name: "Coffee & Classical at MOM's Cafe",
    upcoming: false,
    date: "April 18, 2025",
    flyerUrl: "/assets/events/ccm.webp",
  },
  {
    name: "Violin Masterclass with Harold Reeves",
    upcoming: false,
    date: "April 8, 2025",
    flyerUrl: "/assets/events/harold.webp",
  },
  {
    name: "Trip to the San Diego Symphony",
    upcoming: false,
    date: "February 15, 2025",
    flyerUrl: "/assets/events/oldsds.webp",
  },
  {
    name: "Vitamin String Quartet at EFA",
    upcoming: false,
    date: "November 15, 2024",
    flyerUrl: "/assets/events/vitamin.webp",
  },
  {
    name: "Trip to the San Diego Symphony",
    upcoming: false,
    date: "November 9, 2024",
    flyerUrl: "/assets/events/veryoldsds.webp",
  },
  {
    name: "Beach Social at La Jolla Shores",
    upcoming: false,
    date: "October 19, 2024",
    flyerUrl: "/assets/events/oldbeachsocial.webp",
  },
];
