import { 
  Hammer, 
  Building2, 
  Ruler, 
  HardHat, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { NavItem, ServiceItem, ProjectItem, FeatureItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'General Contracting',
    description: 'Full-service construction management for projects of any scale, ensuring quality and efficiency from start to finish.',
    icon: Hammer,
  },
  {
    id: 2,
    title: 'Commercial Construction',
    description: 'State-of-the-art office buildings, retail spaces, and industrial facilities built to meet modern business needs.',
    icon: Building2,
  },
  {
    id: 3,
    title: 'Pre-Construction Planning',
    description: 'Detailed blueprinting, budgeting, and scheduling to ensure your project is viable before ground is even broken.',
    icon: Ruler,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: 'Skyline Office Tower',
    category: 'Commercial',
    imageUrl: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 2,
    title: 'Modern Family Residence',
    category: 'Residential',
    imageUrl: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 3,
    title: 'Industrial Logistics Hub',
    category: 'Industrial',
    imageUrl: 'https://picsum.photos/800/600?random=3',
  },
  {
    id: 4,
    title: 'Downtown Retail Complex',
    category: 'Commercial',
    imageUrl: 'https://picsum.photos/800/600?random=4',
  },
  {
    id: 5,
    title: 'Lakeside Renovation',
    category: 'Renovation',
    imageUrl: 'https://picsum.photos/800/600?random=5',
  },
  {
    id: 6,
    title: 'City Arts Center',
    category: 'Public',
    imageUrl: 'https://picsum.photos/800/600?random=6',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: 'Expert Engineering',
    description: 'Our team comprises certified engineers and architects with decades of combined experience.',
    icon: HardHat,
  },
  {
    id: 2,
    title: 'On-Time Delivery',
    description: 'We respect your time. Our rigorous scheduling ensures projects are completed by the agreed deadline.',
    icon: Clock,
  },
  {
    id: 3,
    title: 'Safety First',
    description: 'We maintain the highest safety standards to protect our workers and your property.',
    icon: ShieldCheck,
  },
];