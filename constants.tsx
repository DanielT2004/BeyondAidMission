
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
  { name: "Founder Name", role: "Executive Director", imageUrl: "https://i.pravatar.cc/150?u=1" },
  { name: "Dr. Medical Lead", role: "Medical Director", imageUrl: "https://i.pravatar.cc/150?u=2" },
  { name: "Logistics Expert", role: "Supply Chain Lead", imageUrl: "https://i.pravatar.cc/150?u=3" },
  { name: "Outreach Lead", role: "Partner Relations", imageUrl: "https://i.pravatar.cc/150?u=4" },
  { name: "Tech Advisor", role: "Operations Technology", imageUrl: "https://i.pravatar.cc/150?u=5" },
  { name: "Volunteer Coord.", role: "Lead Volunteer", imageUrl: "https://i.pravatar.cc/150?u=6" },
  { name: "Clinical Liaison", role: "Addis Hospital Contact", imageUrl: "https://i.pravatar.cc/150?u=7" },
  { name: "Donor Relations", role: "Fundraising Chair", imageUrl: "https://i.pravatar.cc/150?u=8" },
  { name: "Project Manager", role: "Ethiopia Mission Lead", imageUrl: "https://i.pravatar.cc/150?u=9" },
  { name: "Strategy Lead", role: "Advisory Board", imageUrl: "https://i.pravatar.cc/150?u=10" }
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
