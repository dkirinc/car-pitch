import { staticText } from '../../../content/static';

const sources = { static: staticText } as const;

export function usePageText() {
    const t = (source: keyof typeof sources, key: string): string => {
        const parts = key.split('.');
        let value: unknown = sources[source];
        for (const part of parts) {
            if (value == null || typeof value !== 'object') return '';
            value = (value as Record<string, unknown>)[part];
        }
        return typeof value === 'string' ? value : '';
    };
    return { t };
}
