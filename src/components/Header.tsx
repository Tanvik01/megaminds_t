import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Languages, CodeIcon, PenTool } from 'lucide-react';

const categories = [
  {
    icon: BookOpen,
    title: "School Tuitions",
    description: "Expert guidance for all school subjects from grades 1-12",
    link: "/courses/school-tuitions",
  },
  {
    icon: GraduationCap,
    title: "Entrance Exams",
    description: "Specialized coaching for JEE, NEET, and other entrance exams",
    link: "/courses/entrance-exams",
  },
  {
    icon: Languages,
    title: "Communication Skills",
    description: "English proficiency, public speaking, and personality development",
    link: "/courses/communication-skills",
  },
  {
    icon: CodeIcon,
    title: "Tech Courses",
    description: "Programming, web development, and computer applications",
    link: "/courses/tech-courses",
  },
  {
    icon: PenTool,
    title: "Competitive Exams",
    description: "Preparation for banking, SSC, UPSC, and other government exams",
    link: "/courses/competitive-exams",
  },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-darkBlue/10">
      <nav className="container-custom flex items-center justify-between py-2" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">MegaMinds Academy</span>
            <img src="/mma_logo.png" alt="MegaMinds Academy" className="h-12 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-darkBlue"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-darkBlue hover:text-blue transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href="https://admin.megamindsacademy.in/site/userlogin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-x-2"
          >
            Login
          </a>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-x-2"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Talk to our experts
          </Link>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-darkBlue/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">MegaMinds Academy</span>
              <img src="/mma_logo.png" alt="MegaMinds Academy" className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-darkBlue"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-darkBlue/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-darkBlue hover:bg-yellow/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <a
                  href="https://admin.megamindsacademy.in/site/userlogin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full inline-flex items-center justify-center"
                >
                  Login
                </a>
                <Link
                  to="/contact"
                  className="btn-primary w-full inline-flex items-center justify-center gap-x-2"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  Talk to our experts
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
