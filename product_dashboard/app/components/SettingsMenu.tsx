'use client';

import { useStore } from '../store/store';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsMenu({ isOpen, onClose }: SettingsMenuProps) {
  const { userPreferences, updateUserPreferences } = useStore();

  const handleThemeChange = (theme: 'light' | 'dark') => {
    console.log('Changing theme to:', theme);
    updateUserPreferences({ theme });

    // Apply the theme to the body class (if required for styling)
    document.body.className = theme;
  };

  const handleLanguageChange = (language: string) => {
    console.log('Changing language to:', language);
    updateUserPreferences({ language });
  };

  const handleCurrencyChange = (currency: string) => {
    console.log('Changing currency to:', currency);
    updateUserPreferences({ currency });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Theme Selection */}
          <div>
            <label className="block mb-2">Theme</label>
            <Select
              value={userPreferences.theme}
              onValueChange={handleThemeChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Language Selection */}
          <div>
            <label className="block mb-2">Language</label>
            <Select
              value={userPreferences.language}
              onValueChange={handleLanguageChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Currency Selection */}
          <div>
            <label className="block mb-2">Currency</label>
            <Select
              value={userPreferences.currency}
              onValueChange={handleCurrencyChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
                <SelectItem value="INR">INR</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
