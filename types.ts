
export interface DonationOption {
  amount: number;
  label: string;
  impact: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Partner {
  name: string;
  logo: string;
  description: string;
}

export interface ProgressStats {
  raised: number;
  goal: number;
  matchingLimit: number;
}
