import React, { useState } from 'react';
import { COURSES_DATA } from './data/courses';
import { Course, CourseCategory } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CourseFinderModal } from './components/CourseFinderModal';
import { FeeCalculator } from './components/FeeCalculator';
import { CertificateVerifier } from './components/CertificateVerifier';
import { LabAndFaculty } from './components/LabAndFaculty';
import { DemoBookingModal } from './components/DemoBookingModal';
import { PlacementsView } from './components/PlacementsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';

export type TabType = 
  | 'home' 
  | 'courses' 
  | 'fee-calc' 
  | 'finder' 
  | 'verify' 
  | 'placements' 
  | 'infrastructure' 
  | 'faculty' 
  | 'about' 
  | 'contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  
  // Modal states
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [demoPreselectedCourseId, setDemoPreselectedCourseId] = useState<string | undefined>(undefined);

  // Courses Filtering State
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleOpenDemoModal = (courseId?: string) => {
    setDemoPreselectedCourseId(courseId);
    setIsDemoModalOpen(true);
  };

  const handleExploreCourses = () => {
    setActiveTab('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#262320] font-sans selection:bg-[#5D4037] selection:text-white flex flex-col">
      
      {/* Main Navbar - Compact, pure English, no announcement bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab: string) => setActiveTab(tab as TabType)} 
        onOpenDemoModal={(courseId) => handleOpenDemoModal(courseId)} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 1. HOME TAB */}
        {activeTab === 'home' && (
          <div>
            <Hero 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onExploreClick={handleExploreCourses}
              onOpenDemoModal={() => handleOpenDemoModal()} 
            />

            <CourseCatalog
              courses={COURSES_DATA}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSelectCourse={(c) => setSelectedCourse(c)}
              onBookDemo={(id) => handleOpenDemoModal(id)}
            />
          </div>
        )}

        {/* 2. COURSES TAB */}
        {activeTab === 'courses' && (
          <div className="pt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
              <h1 className="text-3xl font-black text-[#262320]">
                All 12 Certified Diploma & Certificate Programs
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl mx-auto">
                Select your stream to view complete module breakdown, software covered, and job roles.
              </p>
            </div>
            <CourseCatalog
              courses={COURSES_DATA}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSelectCourse={(c) => setSelectedCourse(c)}
              onBookDemo={(id) => handleOpenDemoModal(id)}
            />
          </div>
        )}

        {/* 3. FEE & EMI CALCULATOR TAB */}
        {activeTab === 'fee-calc' && (
          <FeeCalculator
            courses={COURSES_DATA}
            onBookDemo={(courseId) => handleOpenDemoModal(courseId)}
          />
        )}

        {/* 4. COURSE FINDER QUIZ TAB */}
        {activeTab === 'finder' && (
          <CourseFinderModal
            courses={COURSES_DATA}
            onSelectCourse={(c) => setSelectedCourse(c)}
            onBookDemo={(courseId) => handleOpenDemoModal(courseId)}
          />
        )}

        {/* 5. VERIFY DIPLOMA TAB */}
        {activeTab === 'verify' && (
          <CertificateVerifier />
        )}

        {/* 6. PLACEMENTS TAB */}
        {activeTab === 'placements' && (
          <PlacementsView onBookDemo={() => handleOpenDemoModal()} />
        )}

        {/* 7. INFRASTRUCTURE & AC LABS TAB */}
        {activeTab === 'infrastructure' && (
          <LabAndFaculty onBookDemo={() => handleOpenDemoModal()} />
        )}

        {/* 8. FACULTY TAB */}
        {activeTab === 'faculty' && (
          <LabAndFaculty onBookDemo={() => handleOpenDemoModal()} />
        )}

        {/* 9. ABOUT US TAB */}
        {activeTab === 'about' && (
          <AboutView onBookDemo={() => handleOpenDemoModal()} />
        )}

        {/* 10. CONTACT US TAB */}
        {activeTab === 'contact' && (
          <ContactView onBookDemo={() => handleOpenDemoModal()} />
        )}

      </main>

      {/* Footer */}
      <Footer
        setActiveTab={(tab: string) => setActiveTab(tab as TabType)}
        onOpenDemoModal={() => handleOpenDemoModal()}
      />

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onBookDemo={(courseId) => {
            setSelectedCourse(null);
            handleOpenDemoModal(courseId);
          }}
        />
      )}

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        preselectedCourseId={demoPreselectedCourseId}
      />

    </div>
  );
}
