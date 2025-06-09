
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 text-white/80" />
      ) : (
        <Moon className="h-4 w-4 text-black/80" />
      )}
    </Button>
  );
};

export default ThemeToggle;
