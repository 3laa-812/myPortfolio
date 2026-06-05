import { useEffect } from 'react';
import { useSection } from './hooks/useSection';
import { useIsMobile } from './hooks/useIsMobile';
import StatusBar from './components/layout/StatusBar';
import MobileStatusBar from './components/layout/MobileStatusBar';
import MobileBottomNav from './components/layout/MobileBottomNav';
import Sidebar from './components/layout/Sidebar';
import Home from './components/sections/Home';
import Identity from './components/sections/Identity';
import Now from './components/sections/Now';
import Projects from './components/sections/Projects';
import Systems from './components/sections/Systems';
import Lab from './components/sections/Lab';
import Journey from './components/sections/Journey';
import Playbook from './components/sections/Playbook';
import Manifesto from './components/sections/Manifesto';
import Metrics from './components/sections/Metrics';
import Future from './components/sections/Future';
import Secret from './components/sections/Secret';

export default function App() {
  const { currentSection, showSection, visitCount } = useSection();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events in inputs, textareas, editables
      const activeEl = document.activeElement;
      if (
        activeEl?.tagName === 'INPUT' ||
        activeEl?.tagName === 'TEXTAREA' ||
        (activeEl as HTMLElement)?.isContentEditable
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      switch (key) {
        case 'h':
          showSection('home');
          break;
        case 'i':
          showSection('identity');
          break;
        case 'n':
          showSection('now');
          break;
        case 'p':
          showSection('projects');
          break;
        case 's':
          showSection('systems');
          break;
        case 'l':
          showSection('lab');
          break;
        case 'j':
          showSection('journey');
          break;
        case 'b':
          showSection('playbook');
          break;
        case 'm':
          showSection('manifesto');
          break;
        case 'x':
          showSection('metrics');
          break;
        case 'f':
          showSection('future');
          break;
        case '/':
        case '?':
          e.preventDefault();
          showSection('secret');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSection]);

  const handleSecretUnlock = () => {
    showSection('secret');
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Desktop status bar */}
      <StatusBar />

      {/* Mobile status bar (5-tap easter egg) */}
      {isMobile && (
        <MobileStatusBar
          onSecretUnlock={handleSecretUnlock}
          visitCount={visitCount}
        />
      )}

      {/* Desktop sidebar */}
      <Sidebar
        currentSection={currentSection}
        showSection={showSection}
        visitCount={visitCount}
      />

      <main className="main-content">
        {currentSection === 'home' && <Home showSection={showSection} />}
        {currentSection === 'identity' && <Identity />}
        {currentSection === 'now' && <Now />}
        {currentSection === 'projects' && <Projects />}
        {currentSection === 'systems' && <Systems />}
        {currentSection === 'lab' && <Lab />}
        {currentSection === 'journey' && <Journey />}
        {currentSection === 'playbook' && <Playbook />}
        {currentSection === 'manifesto' && <Manifesto />}
        {currentSection === 'metrics' && <Metrics />}
        {currentSection === 'future' && <Future />}
        {currentSection === 'secret' && <Secret />}
      </main>

      {/* Mobile bottom navigation */}
      {isMobile && (
        <MobileBottomNav
          currentSection={currentSection}
          showSection={showSection}
          visitCount={visitCount}
        />
      )}
    </div>
  );
}
