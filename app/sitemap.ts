import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.tuitor.com';

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/pricing`, lastModified: new Date() },
        { url: `${baseUrl}/curriculum`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        { url: `${baseUrl}/tutoring`, lastModified: new Date() },
        { url: `${baseUrl}/test/11-plus`, lastModified: new Date() },
        { url: `${baseUrl}/test/naplan`, lastModified: new Date() },
    ];
}
