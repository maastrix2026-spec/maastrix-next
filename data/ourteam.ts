export interface ExecutiveLeader {
  id: string;
  name: string;
  role: string;
  credentials: string;
  specialization: string;
  bio: string;
  imgSrc: string;
  focusMetric: string;
}

export const EXECUTIVE_LEADERS: ExecutiveLeader[] = [
  {
    id: "swarup-kumar-das",
    name: "Swarup Kumar Das",
    role: "Managing Director (MD)",
    credentials: "Enterprise Scale & Business Strategy",
    specialization: "Corporate Governance, Strategic Scaling, Venture Infrastructure",
    bio: "Drives the overarching corporate vision, commercial expansion strategy, and structural capitalization frameworks across multi-national delivery pipelines.",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop", // Placeholder: Replace with actual corporate headshot
    focusMetric: "10X Enterprise Value Scale"
  },
  {
    id: "anil-kumar-pattnayak",
    name: "Anil Kumar Pattnayak",
    role: "Chief Executive Officer (CEO)",
    credentials: "Ex-Operational Systems Director",
    specialization: "Operational Velocity, High-Yield Growth Delivery, Risk Mitigation",
    bio: "Orchestrates technical operations and tactical cross-border growth tracks, aligning mission-critical product lifecycles with strict SLA targets.",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", // Placeholder: Replace with actual corporate headshot
    focusMetric: "Zero-Downtime Executive SLAs"
  },
 
];