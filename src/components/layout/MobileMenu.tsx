import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import type { NavLink } from "./Navbar";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  onEnquireClick: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  onEnquireClick,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold text-blue-600">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-2">
          {links.map((link) => (
            <div key={link.href}>
              <Link
                to={link.href}
                onClick={onClose}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 mt-1 space-y-1 border-l border-gray-200 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onClose}
                      className="block px-3 py-1.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t space-y-3">
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              onEnquireClick();
              onClose();
            }}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}
