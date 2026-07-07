const PersonSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://strucureo.com/#nagaratinam",
                "name": "Nagaratinam S",
                "jobTitle": "Managing Director",
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