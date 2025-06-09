
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
      className="border-white/20 dark:border-white/20 light:border-black/20 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-colors"
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4 text-white/80 dark:text-white/80 light:text-foreground/80" />
      ) : (
        <Moon className="h-4 w-4 text-black/80 dark:text-black/80 light:text-foreground/80" />
      )}
    </Button>
  );
};

export default ThemeToggle;
