// BrandingLogo.tsx
import "../styles/service-pages.css";

export default function BrandingLogo() {
  return (
    <section className="service-page">
      {/* Main glowing title */}
      <h1>
        <span  className="service-title">Branding & Logo Design</span>
       </h1>

      {/* Paragraph with subtle neon glow */}
      <p className="service-description">
        We craft strong brand identities that communicate your values clearly.
        From logo design to complete visual systems, we ensure consistency,
        recognition, and emotional impact.
      </p>

      {/* Interactive sub-services as cards */}
      <ul className="service-cards">
        <li>Logo Design & Redesign</li>
        <li>Color & Typography Systems</li>
        <li>Brand Guidelines</li>
        <li>Visual Identity Strategy</li>
      </ul>
    </section>
  );
}
