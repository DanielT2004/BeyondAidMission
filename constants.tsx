
import { DonationOption, TeamMember, Partner } from './types';

export const DONATION_EXTERNAL_URL = "https://belovedmission.org/partnership/beyond-aid-mission";

export const  INSTAGRAM_LINK = "https://www.instagram.com/beyondaidmission/";
export const LINKEDIN_LINK = "https://www.linkedin.com/company/beyond-aid-mission/posts/?feedView=all";
export const  TIKTOK_LINK  = "https://www.tiktok.com/@beyondaidmission1?_r=1&_t=ZP-92sSy0uETZW";

export const DONATION_OPTIONS: DonationOption[] = [
  { amount: 25, label: "Care Kit", impact: "Basic wound care kit for local clinics", icon: "🩹" },
  { amount: 50, label: "Supplies", impact: "Sterile gloves and syringes for 20 surgeries", icon: "🧤" },
  { amount: 100, label: "Life Support", impact: "Heart monitoring equipment transport", icon: "❤️" },
  { amount: 500, label: "Container", impact: "Logistics for the Ethiopia container shipment", icon: "🚢" }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Lina Kamil", role: "Founder", imageUrl: "https://i.pravatar.cc/150?u=10" },
  { name: "Ruhama Gidi", role: "Fundraising Lead", imageUrl: "https://i.pravatar.cc/150?u=1" },
  { name: "Etegenete Mengistu", role: "Fundraising Lead", imageUrl: "https://i.pravatar.cc/150?u=2" },
  { name: "Daniel Tadesse", role: "Tech lead", imageUrl: "https://i.pravatar.cc/150?u=3" },
  { name: "Fevan Defere", role: "Marketing Lead", imageUrl: "https://i.pravatar.cc/150?u=4" },
  { name: "Naomi Haileselassie", role: "Community Engagement", imageUrl: "https://i.pravatar.cc/150?u=5" },
  { name: "Nazrawit Berhe ", role: "Community Engagement", imageUrl: "https://i.pravatar.cc/150?u=6" },
  { name: "Raiye Hailu  ", role: "Donation Quality Supply(DSQ)", imageUrl: "https://i.pravatar.cc/150?u=7" },
  { name: "Arayam Hailu", role: "Donation Quality Supply(DSQ)", imageUrl: "https://i.pravatar.cc/150?u=8" }
];

export const PARTNERS: Partner[] = [
  {
    name: "Beloved Mission",
    logo: "https://picsum.photos/seed/beloved/150/80",
    description: "501c3 partner matching 50% of funds"
  },
  {
    name: "Children’s Heart Fund Ethiopia",
    logo: "https://picsum.photos/seed/ethiopia/150/80",
    description: "Primary hospital partner"
  }
];
