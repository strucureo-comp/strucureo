const PersonSchema = ({ locale }: { locale: string }) => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://strucureo.com/#nagaratinam",
                "name": "Nagaratinam S",
                "jobTitle": "Managing Director",
                "worksFor": { "@id": "https://strucureo.com/#organization" }
            },
            {
                "@type": "Person",
                "@id": "https://strucureo.com/#balaviyas",
                "name": "Balaviyas Viyas",
                "jobTitle": "Chief Executive Officer",
                "url": "https://www.linkedin.com/in/viyas56/",
                "sameAs": ["https://www.linkedin.com/in/viyas56/"],
                "worksFor": { "@id": "https://strucureo.com/#organization" }
            },
            {
                "@type": "Person",
                "@id": "https://strucureo.com/#dharini",
                "name": "Dharini Karthik",
                "jobTitle": "Chief Operating Officer",
                "url": "https://www.linkedin.com/in/dharini-karthik",
                "sameAs": ["https://www.linkedin.com/in/dharini-karthik"],
                "worksFor": { "@id": "https://strucureo.com/#organization" }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default PersonSchema;