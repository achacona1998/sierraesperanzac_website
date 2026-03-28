# Code Review Rules - Sierra Esperanza Creations Website

## Project Stack
- React 19 + Vite 7 + Tailwind CSS 4
- Supabase (DB, Storage, Edge Functions)
- Framer Motion for animations
- i18n ES/EN

## General
- No console.log/console.error in production code
- No hardcoded secrets or API keys
- All environment variables via import.meta.env
- Proper error handling on all async operations

## React
- Functional components only
- No deprecated lifecycle methods
- Proper useEffect dependencies
- No dangerouslySetInnerHTML without sanitization
- Error boundaries for critical sections

## JavaScript
- No var declarations
- Prefer const over let
- No eval() or new Function()
- Proper null/undefined checks
- Template literals over string concatenation

## Security
- No inline event handlers with user input
- Sanitize all user inputs before rendering
- CORS properly configured
- RLS policies on all Supabase tables
- .env must be in .gitignore

## Performance
- Images must be AVIF/WebP (no PNG/JPG for backgrounds)
- Lazy loading for below-fold content
- No unnecessary re-renders
- Proper key props on lists

## SEO
- Proper meta tags (title, description, OG)
- Correct html lang attribute
- Semantic HTML elements

## CSS/Tailwind
- No arbitrary values unless necessary
- Responsive design for all breakpoints
- No !important
