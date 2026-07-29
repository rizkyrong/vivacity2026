import cafePhoto from "@/imports/MobilePageLinkBioViva/7b50649a25a62db5203b89e6060ecdd14b23f70c.png";
import grabfoodLogo from "@/imports/MobilePageLinkBioViva/61e5816254042a5e96920c69aebd8c7cc964b735.png";
import gofoodLogo from "@/imports/MobilePageLinkBioViva/045993d48a5ff1f2af55e2fdaf68b4328eab5556.png";
import menuPdf from "@/imports/Menu_from_Viva_City.pdf";
import "./index.css";

type IconName = "pin" | "whatsapp" | "menu" | "tiket";

const Arrow = () => <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;

function Icon({ name }: { name: IconName }) {
  if (name === "pin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  if (name === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8.2 8.2 0 0 1-11.8 7.35L4 20l1.2-4A8.2 8.2 0 1 1 20 11.5Z" /><path d="M9 8.5c.2 3 2.5 5.2 5.3 5.5l1.1-1.1 1.1.7c.3.2.4.6.2.9-.8 1.1-1.8 1.3-2.7.9-3.5-1.5-5.5-3.5-6.7-6.5-.3-.8 0-1.8.9-2.4.3-.2.7-.1.9.2L9 8.5Z" /></svg>;
  if (name === "menu") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>;
  return <span className="tiket-mark">tiket<span>.com</span></span>;
}

function SocialIcon({ name }: { name: "instagram" | "tiktok" | "mail" }) {
  if (name === "instagram") return <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.8" r=".8" fill="currentColor"/></svg>;
  if (name === "tiktok") return <svg viewBox="0 0 24 24"><path d="M14 4v9.2a4.3 4.3 0 1 1-3.2-4.15"/><path d="M14 4c.7 2.1 2 3.4 4 3.8"/></svg>;
  return <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
}

function LinkCard({ href, label, icon, image }: { href: string; label: string; icon?: IconName; image?: string }) {
  return <a className="link-card" href={href} target="_blank" rel="noreferrer">
    <span className={`link-icon ${image ? "image-icon" : ""}`}>{image ? <img src={image} alt="" /> : icon && <Icon name={icon} />}</span>
    <span className="link-label">{label}</span><Arrow />
  </a>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="section-title"><span /> <p>{children}</p> <span /></div>;
}

export default function App() {
  return <main className="page-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <section className="bio-card">
      <header className="profile">
        <div className="brand-mark"><span>V</span><i>Viva City</i></div>
        <p className="eyebrow">Cafe · Stay · Gather</p>
        <h1>Viva City Group</h1>
        <p className="intro">Good food, good stays, and good moments in Cilegon.</p>
        <div className="hours"><span>Damkar</span><p>Mon–Fri & Sun 10.00–21.00 WIB · Sat 10.00–21.30 WIB</p><span>PCI</span><p>Every day 10.00–21.30 WIB</p></div>
        <nav className="socials" aria-label="Social media">
          <a href="https://www.instagram.com/vivacitycafe_homestay/?hl=id" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon name="instagram" /></a>
          <a href="https://www.tiktok.com/@vivacitycafe_cilegon" target="_blank" rel="noreferrer" aria-label="TikTok"><SocialIcon name="tiktok" /></a>
          <a href="mailto:vivacitycafe24@gmail.com" aria-label="Email"><SocialIcon name="mail" /></a>
        </nav>
      </header>

      <div className="links">
        <SectionTitle>Café</SectionTitle>
        <LinkCard href="https://maps.app.goo.gl/uxUyVdRGsP3yYwaw9" label="Viva City at Damkar" icon="pin" />
        <LinkCard href="https://maps.app.goo.gl/NLVu2JHvWiDxJZ8fA" label="Viva City at Kawasan PCI" icon="pin" />
        <a className="menu-card" href={menuPdf} target="_blank" rel="noreferrer">
          <img src={cafePhoto} alt="Viva City Cafe interior" /><div className="menu-overlay" />
          <span className="menu-copy"><small>DISCOVER OUR FLAVOURS</small><strong>Menu from Viva City</strong><em>View menu <Arrow /></em></span>
        </a>
        <LinkCard href="https://wa.me/6285312005222" label="Order via WhatsApp" icon="whatsapp" />
        <LinkCard href="https://food.grab.com/id/en/restaurant/vivacity-cafe-kotabumi-delivery/6-C6NADBMEA653CN?sourceID=20260729%5C_060343%5C_a61b493bcce3446ba6a0ae56359b80d9%5C_MEXMPS" label="Order on GrabFood" image={grabfoodLogo} />
        <LinkCard href="https://gofood.co.id/serang/restaurant/vivacity-cafe-kav-gm-591ef92e-999d-411c-9bc3-eb652837376b" label="Order on GoFood" image={gofoodLogo} />

        <SectionTitle>Accommodation & Homestay</SectionTitle>
        <LinkCard href="https://maps.app.goo.gl/WLgSqeSDn9FkHvkR8" label="Gallery Viva City" icon="pin" />
        <LinkCard href="https://www.tiket.com/id-id/hotel/indonesia/gallery-vivacity-801001736316909349" label="Book on tiket.com" icon="tiket" />
        <LinkCard href="https://wa.me/6281574917458" label="Reservation via WhatsApp" icon="whatsapp" />
      </div>
      <footer>© 2026 Viva City Group <span>·</span> Cilegon, Indonesia</footer>
    </section>
  </main>;
}
