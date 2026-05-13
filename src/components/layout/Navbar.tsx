import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export type NavChild = { href: string; label: string };
export type NavLink = { href: string; label: string; children?: NavChild[] };

const serviceLinks: NavChild[] = [
  { href: "/services#healthcare-recruitment", label: "Healthcare Recruitment" },
  { href: "/services#career-counseling-and-admissions", label: "Career Counseling & Admissions" },
  { href: "/services#overseas-opportunities", label: "Overseas Opportunities" },
  { href: "/services#internship-and-training-support", label: "Internship & Training Support" },
  { href: "/hospital-services", label: "Hospital Support Services" },
];

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services", children: serviceLinks },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar({
  onEnquireClick,
}: {
  onEnquireClick: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">Saathi</span>
            <span className="text-2xl font-bold text-orange-500">Global</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <Link
                    to={link.href}
                    className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors py-5"
                  >
                    {link.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full w-72 bg-white shadow-lg border border-gray-100 rounded-lg py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="secondary" size="sm" onClick={onEnquireClick}>
              Enquire Now
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        onEnquireClick={onEnquireClick}
      />
    </nav>
  );
}
