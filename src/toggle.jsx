import useDarkMode from './Hook/UseDarkMode';

export const ThemeToggle = () => {
  const [isDark, toggleDarkMode] = useDarkMode();
  
  return (
    <button 
      onClick={toggleDarkMode}
      className="theme-toggle"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background:'none',
        fontSize: '1.5rem',
        cursor: 'pointer'
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};