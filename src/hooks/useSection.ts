import { useState } from 'react';
import { SectionId } from '../types';

export function useSection() {
  const [currentSection, setCurrentSection] = useState<SectionId>(() => {
    const saved = sessionStorage.getItem('currentSection');
    return (saved as SectionId) || 'home';
  });

  const [visitedSections, setVisitedSections] = useState<string[]>(() => {
    try {
      const saved = sessionStorage.getItem('visitedSections');
      return saved ? JSON.parse(saved) : ['home'];
    } catch {
      return ['home'];
    }
  });

  const showSection = (id: SectionId) => {
    setCurrentSection(id);
    sessionStorage.setItem('currentSection', id);

    setVisitedSections((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      sessionStorage.setItem('visitedSections', JSON.stringify(next));
      return next;
    });
  };

  // We count unique sections visited (excluding 'secret')
  const visitCount = visitedSections.filter((id) => id !== 'secret').length;

  return {
    currentSection,
    showSection,
    visitCount,
  };
}
