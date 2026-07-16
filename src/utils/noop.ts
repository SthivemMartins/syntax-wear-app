// Noop exports to prevent Vite from trying to resolve Next.js dependencies
// This file is used as an alias for "next/navigation" in vite.config.ts
export const useParams = () => ({});
export const usePathname = () => "";
export const useSearchParams = () => new URLSearchParams();
export const useRouter = () => ({});
