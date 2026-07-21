import { site } from "@/lib/site";

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsActivityLocation", "GovernmentOrganization"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: "CSN Sala Polivalentă",
      url: site.url,
      logo: `${site.url}/logo.png`,
      telephone: site.contact.phoneRaw,
      faxNumber: site.contact.fax,
      email: site.contact.email,
      foundingDate: "1974-08-10",
      maximumAttendeeCapacity: site.capacity,
      parentOrganization: { "@type": "GovernmentOrganization", name: site.parent },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calea Piscului 10",
        addressLocality: "București",
        addressRegion: "Sector 4",
        addressCountry: "RO",
      },
      geo: { "@type": "GeoCoordinates", latitude: 44.4139, longitude: 26.1147 },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
      areaServed: { "@type": "City", name: "București" },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.shortName,
      inLanguage: "ro-RO",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
