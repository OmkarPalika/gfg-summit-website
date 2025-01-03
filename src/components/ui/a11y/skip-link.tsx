import { useState } from 'react';

export function SkipLink() {
  const [focused, setFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 bg-emerald-600 text-white px-4 py-2 rounded-md
        transition-transform duration-200
        ${focused ? 'translate-y-0' : '-translate-y-full'}
      `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      Skip to main content
    </a>
  );
}