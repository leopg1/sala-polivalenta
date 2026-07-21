export const site = {
  name: "Complexul Sportiv Național „Sala Polivalentă”",
  shortName: "Sala Polivalentă",
  tagline: "Cea mai importantă arenă acoperită a Capitalei",
  established: 1974,
  capacity: 5300,
  url: "https://salapolivalenta.ro",
  parent: "Ministerul Sportului",
  contact: {
    address: "Calea Piscului 10, Sector 4, București",
    email: "secretariat@salapolivalenta.ro",
    emailAchizitii: "achizitii@salapolivalenta.ro",
    phone: "021 316 72 76",
    phoneRaw: "+40213167276",
    fax: "021 316 25 57",
    maps: "https://www.google.com/maps/search/?api=1&query=Calea+Piscului+10+Sector+4+Bucuresti",
  },
} as const;

export const nav = [
  { label: "Acasă", href: "/" },
  { label: "Despre", href: "/despre" },
  { label: "Program", href: "/program" },
  { label: "Galerie", href: "/galerie" },
  { label: "Informare Publică", href: "/informare-publica" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Termeni și Condiții", href: "/termeni-si-conditii" },
  { label: "Politica de Confidențialitate", href: "/confidentialitate" },
  { label: "Politica Cookies", href: "/cookies" },
  { label: "GDPR", href: "/gdpr" },
] as const;
