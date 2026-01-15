import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    // Validate locale
    if (!locale || !['en-US', 'en-AE', 'de-DE', 'ru-RU'].includes(locale)) {
        locale = 'en-US';
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
