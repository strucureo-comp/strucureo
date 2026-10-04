import { siteGraph } from '@/lib/jsonld';

const OrganizationSchema = () => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph()) }}
        />
    );
};

export default OrganizationSchema;
