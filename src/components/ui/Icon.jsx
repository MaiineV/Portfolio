import {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Calendar,
  Circle,
  Clock,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Gamepad2,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Settings2,
  Star,
  Tag,
  Trophy,
  User,
  Wrench,
  X,
} from 'lucide-react';

const ICONS = {
  ArrowRight,
  ArrowUp,
  Award,
  Briefcase,
  Calendar,
  Circle,
  Clock,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Gamepad2,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Settings2,
  Star,
  Tag,
  Trophy,
  User,
  Wrench,
  X,
};

// Minimal wrapper around lucide-react. Decorative by default
// (aria-hidden); pass `label` to give it accessible meaning.
export default function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  label,
  className,
  ...rest
}) {
  const Cmp = ICONS[name];
  if (!Cmp) {
    if (typeof window !== 'undefined' && window.console) {
      // eslint-disable-next-line no-console
      console.warn(`[Icon] Unknown lucide icon: ${name}`);
    }
    return null;
  }
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      {...rest}
    />
  );
}
