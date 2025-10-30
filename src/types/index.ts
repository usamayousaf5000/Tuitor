export interface LaunchDate {
  day: string;
  month: string;
  year: string;
}

export interface ComingSoonProps {
  launchDate: LaunchDate;
  onContactClick: () => void;
}
