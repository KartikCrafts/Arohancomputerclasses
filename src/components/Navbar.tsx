import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Calculator, 
  ShieldCheck, 
  Users, 
  Menu, 
  X, 
  Briefcase, 
  Monitor, 
  Info, 
  PhoneCall 
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDemoModal: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenDemoModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Compact, clear navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: GraduationCap },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'fee-calc', label: 'Fee & EMI', icon: Calculator },
    { id: 'finder', label: 'Course Quiz', icon: Sparkles },
    { id: 'verify', label: 'Verify Diploma', icon: ShieldCheck },
    { id: 'placements', label: 'Placements', icon: Briefcase },
    { id: 'infrastructure', label: 'AC Labs', icon: Monitor },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8DFC8] shadow-xs">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 py-2.5">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <div 
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0 mr-4 xl:mr-10"
          >
            <div className="w-10 h-10 rounded-xl bg-[#5D4037] text-[#F9F6F0] flex items-center justify-center shadow-md group-hover:bg-[#4A3B32] transition-colors">
              <GraduationCap className="w-5 h-5 text-[#EADDCB]" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#262320]">
                Aarohan <span className="text-[#5D4037]">IT Academy</span>
              </h1>
              <p className="text-[10px] text-[#5D4037]/80 font-bold tracking-wide uppercase">
                ISO 9001:2015 Certified
              </p>
            </div>
          </div>

          {/* Centered Desktop Navigation Bar with Distance */}
          <nav className="hidden xl:flex items-center justify-center gap-1.5 px-4 xl:px-8 mx-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#5D4037] text-[#F9F6F0] shadow-xs'
                      : 'text-[#262320] hover:bg-[#F3EDE2] hover:text-[#5D4037]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#EADDCB]' : 'text-[#8D6E63]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons on Right */}
          <div className="flex items-center gap-3 shrink-0 ml-4 xl:ml-10">
            {/* Book Trial Class Button */}
            <button
              onClick={() => onOpenDemoModal()}
              className="bg-[#4A3B32] hover:bg-[#262320] text-[#F9F6F0] font-extrabold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 border border-[#8D6E63] shrink-0"
            >
              <Sparkles className="w-4 h-4 text-[#EADDCB] animate-spin" style={{ animationDuration: '4s' }} />
              <span className="hidden sm:inline">Book Free Trial</span>
              <span className="sm:hidden">Trial</span>
            </button>

            {/* Mobile Navigation Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#262320] hover:bg-[#F3EDE2] border border-[#DBC9B5]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E8DFC8] px-4 py-3 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold transition-all text-left ${
                    isActive
                      ? 'bg-[#5D4037] text-[#F9F6F0] shadow-xs'
                      : 'text-[#262320] hover:bg-[#F3EDE2]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#EADDCB]' : 'text-[#5D4037]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
