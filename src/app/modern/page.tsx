import CardNav from "./components/CardNav";

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#ffffff",
    links: [
      { label: "Company", href: "#", ariaLabel: "About Company" },
      { label: "Careers", href: "#", ariaLabel: "About Careers" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#ffffff",
    links: [
      { label: "Featured", href: "#", ariaLabel: "Featured Projects" },
      { label: "Case Studies", href: "#", ariaLabel: "Project Case Studies" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#ffffff",
    links: [
      { label: "Email", href: "#", ariaLabel: "Email us" },
      { label: "Twitter", href: "#", ariaLabel: "Twitter" },
      { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" },
    ],
  },
];

export default function ModernPage() {
  return (
    <div className="modern-page">
      <CardNav
        logo="/modern-logo.svg"
        logoAlt="Devaansh mark"
        items={items}
        baseColor="#ffffff"
        menuColor="#111111"
        buttonBgColor="#111111"
        buttonTextColor="#ffffff"
      />
    </div>
  );
}
