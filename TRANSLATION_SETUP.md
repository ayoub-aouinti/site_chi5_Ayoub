# Website Translation Setup - i18next Implementation

## Overview
Your website has been successfully configured with multi-language support for **Arabic (ar)**, **English (en)**, **French (fr)**, and **German (de)** using the `i18next` library.

## What Was Added

### 1. **Dependencies Installed**
```json
{
  "i18next": "^23.x",
  "react-i18next": "^14.x",
  "i18next-browser-languagedetector": "^7.x"
}
```

### 2. **Directory Structure**
```
src/
├── i18n/
│   └── config.ts          # i18next configuration
├── locales/
│   ├── ar.json            # Arabic translations
│   ├── en.json            # English translations
│   ├── fr.json            # French translations
│   └── de.json            # German translations
└── components/
    ├── Navbar.tsx         # Updated with language switcher
    ├── Hero.tsx           # Uses translation keys
    ├── About.tsx          # Uses translation keys
    ├── Contact.tsx        # Uses translation keys
    ├── Testimonials.tsx   # Updated
    ├── Recitations.tsx    # Updated
    ├── ScientificWorks.tsx # Updated
    └── Footer.tsx         # Updated
```

### 3. **Translation Files**
Each translation file (`ar.json`, `en.json`, `fr.json`, `de.json`) contains all the text content organized by sections:
- `nav`: Navigation menu items
- `hero`: Hero section content
- `about`: About section
- `testimonials`: Testimonial section
- `recitations`: Recitations section
- `scientificWorks`: Scientific works section
- `contact`: Contact form labels and messages
- `footer`: Footer content

### 4. **Updated Components**
All components have been updated to use the `useTranslation()` hook:
```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  
  return <h1>{t('key.name')}</h1>;
};
```

### 5. **Language Switcher in Navbar**
A new language selector dropdown has been added to the Navbar component featuring:
- Quick language switching (ar, en, fr, de)
- Persistent language selection (stored in localStorage)
- Responsive dropdown menu
- Visual indicator for current language

### 6. **RTL/LTR Support**
The website automatically switches between:
- **RTL (Right-to-Left)**: When viewing in Arabic
- **LTR (Left-to-Left)**: When viewing in English, French, or German

The HTML direction is automatically set via:
- `document.documentElement.dir = 'rtl'` for Arabic
- `document.documentElement.dir = 'ltr'` for other languages

### 7. **CSS Updates**
The `index.css` file has been updated to support both RTL and LTR:
```css
html[lang="en"] body,
html[lang="fr"] body,
html[lang="de"] body {
  direction: ltr;
}
```

## How It Works

### Language Detection & Storage
The system uses `i18next-browser-languagedetector` to:
1. Detect browser language preference
2. Check localStorage for saved language selection
3. Default to Arabic if no preference is detected

### Dynamic Language Switching
```tsx
const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
};
```

When a user selects a language:
- i18next updates the translation context
- All components using `useTranslation()` re-render with new translations
- localStorage is automatically updated
- HTML direction is adjusted if needed

## Adding New Content

### To add new translatable text:

1. **Update the JSON files** with your new keys:
```json
// src/locales/ar.json
{
  "newSection": {
    "title": "العنوان",
    "description": "الوصف"
  }
}
```

2. **Use in your component**:
```tsx
const { t } = useTranslation();
<h1>{t('newSection.title')}</h1>
<p>{t('newSection.description')}</p>
```

## Translation Organization

### Current Keys Structure:
- `nav.*` - Navigation items
- `hero.*` - Hero section
- `about.*` - About/Bio section
- `testimonials.*` - Testimonials section
- `recitations.*` - Recitations/Videos section
- `scientificWorks.*` - Scientific works section
- `contact.*` - Contact form fields
- `footer.*` - Footer content

## Namespace Usage
Currently using the default namespace. To use multiple namespaces:
```tsx
const { t } = useTranslation('common'); // specify namespace
```

## Best Practices

1. **Organize translations logically** - Group related content by features
2. **Use consistent naming** - Use dot notation for nested keys
3. **Keep translations updated** - Update all language files together
4. **Test all languages** - Ensure RTL/LTR switching works correctly
5. **Monitor performance** - Translation files are loaded on initialization

## Deployment Notes

- Translation files are bundled with your app (no external API calls)
- Language preference persists across sessions (localStorage)
- All languages available immediately - no lazy loading needed
- Build size impact: ~5KB (gzipped) for all language files

## Troubleshooting

### Text not translating?
1. Check the key exists in all JSON files
2. Verify `useTranslation()` hook is imported
3. Check browser console for missing key warnings

### RTL/LTR issues?
1. Verify `<html>` tag has correct `lang` attribute
2. Check CSS is using proper directional classes (`rtl:` and `ltr:`)
3. Clear browser cache and localStorage

### Language not persisting?
1. Check localStorage is enabled in browser
2. Verify no browser privacy extensions blocking localStorage
3. Check browser developer tools > Application > Local Storage

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Migration Guide

All hardcoded Arabic text has been replaced with translation keys. The default language is Arabic, so the site maintains its original look while gaining multi-language capabilities.

---

**Last Updated**: February 8, 2026
**Languages Supported**: Arabic, English, French, German
**Framework**: React 18 + TypeScript + i18next + Tailwind CSS
