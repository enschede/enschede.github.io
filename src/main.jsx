import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {filler, photos, profile, testimonials} from './content';
import './style.css';

const page = location.pathname.split('/').pop().replace('.html', '') || 'index';
const isHome = page === 'index';
const homeLink = id => `${isHome ? '' : './index.html'}#${id}`;
const Arrow = () => <span aria-hidden="true">↗</span>;

function Photo({name, eager = false, className = ''}) {
    const [id, alt] = photos[name];
    const src = id.startsWith('photo-') ? `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85` : id;
    return <img className={className} src={src}
                alt={alt} loading={eager ? 'eager' : 'lazy'} width="1600" height="1100"/>;
}

function Header() {
    const [open, setOpen] = useState(false);
    return <header className="header"><a className="brand" href="./index.html">{profile.name}<span
        className="brand-dot">.</span></a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="navigation"
                onClick={() => setOpen(!open)}>{open ? 'Sluiten ×' : 'Menu ☰'}</button>
        <nav id="navigation" className={open ? 'open' : ''} aria-label="Hoofdnavigatie" onClick={() => setOpen(false)}>
            <a href={homeLink('ciam')}>Over CIAM</a><a href={homeLink('testimonials')}>Testimonials</a><a
            aria-current={page === 'blog' ? 'page' : undefined} href="./blog.html">Verhalen</a><a
            aria-current={page === 'mijn-verhaal' ? 'page' : undefined} href="./mijn-verhaal.html">Mijn verhaal</a><a
            className="nav-contact" href={homeLink('kennismaken')}>Even kennismaken <Arrow/></a></nav>
    </header>
}

function Label({number, children}) {
    return <p className="eyebrow"><span>{number} /</span> {children}</p>
}

function TextLink({href, children}) {
    return <a className="text-link" href={href}>{children}<Arrow/></a>
}

function Contact() {
    const phone = profile.phone.replace(/[^+0-9]/g, '').replace(/^0/, '+31');
    return (
        <section className="company-footer section" id="contact"
                 aria-label="World of CIAM bedrijfs- en contactgegevens">
            <Label number="07">Contact</Label><h2>Contact</h2>
            <div className="company-footer-grid">
                <div>
                    <h3>Adres</h3>
                    <address>
                        <strong>I am Enschede BV</strong>
                        <span>Ekersdijk 269<br/>7534 PX Enschede<br/>Nederland</span>
                    </address>
                </div>
                <div>
                    <h3>Telefoon</h3>
                    <a href={`tel:${phone}`}>{profile.phone}</a>
                    <div className="contact-messengers">
                        <a className="button" href={`https://wa.me/${phone.replace('+', '')}`}>WhatsApp <Arrow/></a>
                        <a className="button" href={`https://signal.me/#p/${phone}`}>Signal <Arrow/></a>
                    </div>
                </div>
                <div>
                    <h3>E-mail</h3>
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div>
                    <h3>LinkedIn</h3>
                    {profile.linkedin ?
                        <a className="linkedin-icon" href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                           aria-label="Bekijk mijn LinkedIn-profiel (opent in een nieuw tabblad)"
                           title="Bekijk mijn LinkedIn-profiel">
                            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"
                                 focusable="false">
                                <path
                                    d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z"/>
                            </svg>
                        </a> : <p>Profiel volgt binnenkort.</p>}
                </div>
            </div>
            <div className="company-legal">
                <p>Besloten vennootschap · KvK-nummer 83929606 · EU VAT ID NL863037975B01</p>
                <p>Statutaire naam: I am Enschede BV · Handelsnaam: World of CIAM</p>
            </div>
            <div className="company-bottom">
                <span>© {new Date().getFullYear()} I am Enschede BV</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
        </section>
    );
}

function BookingEmbed() {
    useEffect(() => {
        if (!document.getElementById('meetergo-integration')) {
            const script = document.createElement('script');
            script.id = 'meetergo-integration';
            script.src = 'https://cdn.meetergo.com/v4/integration.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);
    return <div className="booking-embed" aria-label="Plan een kennismaking via Meetergo">
        <div className="meetergo-iframe" link="https://cal.meetergo.com/marc/kennismaken?lang=nl" data-align="center"
             data-resize="true"/>
        <p>Laadt de agenda niet? <a className="text-link" href="https://cal.meetergo.com/marc/kennismaken?lang=nl">Open
            de boekingspagina <Arrow/></a></p>
    </div>;
}

const bannerLogos = [
    ['logo-KPN-.png', 'KPN'],
    ['medux-logo.326ae0ik4pu2v.svg', 'Medux'],
    ['ANWB-logo-B4BA884D61-seeklogo.com.png', 'ANWB'],
    ['kadaster-logo-1.png', 'Kadaster'],
    ['logo group 2000.png', 'Group 2000'],
    ['2560px-Tele2_logo.svg.png', 'Tele2'],
    ['unisys.png', 'Unisys'],
    ['Vodafone Ziggo.png', 'VodafoneZiggo'],
    ['alliander.png', 'Alliander'],
    ['Logo_Schouten-Zekerheid-opgedikt.svg', 'Schouten Zekerheid']
];

function LogoBanner() {
    return <aside className="logo-banner" aria-label="Organisatielogo’s">
        <div className="logo-banner-track">
            {[false, true].map(duplicate => <ul className="logo-banner-list" key={String(duplicate)} aria-hidden={duplicate ? true : undefined}>
                {bannerLogos.map(([file, name]) => <li key={file}>
                    <img src={`./images/banner/${encodeURIComponent(file)}`} alt={duplicate ? '' : name}/>
                </li>)}
            </ul>)}
        </div>
        <button className="logo-motion-toggle" type="button" onClick={event => {
            const banner = event.currentTarget.closest('.logo-banner');
            const paused = banner.classList.toggle('is-paused');
            event.currentTarget.setAttribute('aria-pressed', String(paused));
            event.currentTarget.textContent = paused ? 'Afspelen' : 'Pauzeren';
        }} aria-label="Logobeweging pauzeren of hervatten" aria-pressed="false">Pauzeren</button>
    </aside>;
}

function Home() {
    return <>
        <section className="hero" id="welkom">
            <div className="hero-copy"><Label number="01">Welkom, fijn dat je er bent</Label><h1>MAAK INLOGGEN MAKKELIJKER,<br/>VEILIGER EN GOEDKOPER</h1><p>CIAM gaat over hoe je de business ondersteunt met digitale identiteit van de klant</p><a className="button"
                                                                                                 href="./mijn-verhaal.html">Ontdek
                mijn verhaal <span>↓</span></a><p className="small-note">{profile.tagline}</p></div>
            <div className="hero-image"><Photo name="hero" eager/>
                <div className="image-note">Een frisse blik begint met even stilstaan.</div>
            </div>
            <div className="hero-bottom"><span>Met aandacht voor wat ertoe doet</span><a href="#ciam">Scroll om te
                ontdekken ↓</a></div>
        </section>
        <LogoBanner/>
        <section className="split section" id="ciam">
            <div className="photo-frame"><Photo name="about"/></div>
            <div className="section-copy">
                <Label number="02">Het speelveld van CIAM</Label>
                <h2>JE WILT DAT DE BUSINESS MAXIMAAL KAN LEVEREN. HOE HELPT CIAM DAARBIJ?</h2>
                <p>Je wilt nieuwe klanten verwelkomen, bestaande klanten beter bedienen en nieuwe digitale diensten snel naar de markt brengen. Dan moet toegang goed geregeld zijn. Eenvoudig een account aanmaken, veilig inloggen en doorgaan met waarvoor je kwam. CIAM legt daarvoor de basis.</p>
                <p>Als product owner wil je minder afhakers bij registratie, minder telefoontjes over inlogproblemen en meer klanten die je diensten gebruiken. Maar waar begin je? En hoe vertaal je die ambities naar een roadmap waarmee je team aan de slag kan?</p>
                <p>Als architect wil je een gezamenlijke basis voor klantidentiteit en toegang. Zodat teams nieuwe diensten sneller kunnen aansluiten en niet telkens hetzelfde hoeven op te lossen. Passend bij het bestaande landschap én de plannen van de business.</p>
                <p>Daar zit de waarde van CIAM: een betere klantreis, sneller nieuwe diensten aanbieden en minder kosten voor beheer en ondersteuning. Dat vraagt om keuzes. Wat moet nu, wat kan later en hoe houd je de toegang veilig?</p>
                <p>In mijn projecten kwamen steeds dezelfde vragen terug. We tekenden vaak dezelfde plaatjes. Iedere organisatie is anders, maar veel vraagstukken hebben we ergens anders al eens opgelost. Waarom zou je telkens opnieuw beginnen?</p>
                <p>Daaruit ontstond mijn aanpak ‘CIAM in 4 stappen’. Vragen die anders pas onderweg opduiken, stellen we vooraf. We inventariseren wat er is, bepalen de richting en maken een blauwdruk en migratieplan. Daarna volgen realisatie en overdracht, in beheersbare stappen.</p>
                <p>Zo krijgt de business een uitvoerbaar plan, weet je team wat het moet bouwen en waarom, en krijg jij overzicht en vertrouwen in de keuzes.</p>
            </div>
        </section>
        <section className="vision section" id="visie">
            <div>
                <Label number="03">Mijn aanpak</Label>
                <h2>CIAM in 4 stappen</h2>
                <p>Bij platformen denken we al snel aan techniek. Als je meteen die kant op gaat, loop je snel vast.</p>
                <p>Een goed CIAM-project begint met begrijpen welke proposities je ondersteunt en hoe je
                    klantgroepen eruitzien. Daarna kijk je hoe de processen door je organisatie lopen en
                    tot welke data welke klant toegang moet hebben. Dat is wat jouw organisatie uniek maakt.</p>
                <p>Pas daarna komt de techniek. Die architectuurpatronen zijn uitgebreid beschreven.
                    De uitdaging zit in begrijpen wat jouw organisatie nodig heeft en hoe je daar komt.</p>
                <ol className="approach-steps">
                    <li><h3>Overzicht</h3>
                        <p>We brengen de huidige situatie in kaart: proposities, klantgroepen, processen,
                            data en systemen. Wat werkt goed, waar lopen klanten en teams tegenaan en
                            wat betekent dat voor de business?</p></li>
                    <li><h3>Richting</h3>
                        <p>We bepalen wat CIAM moet opleveren voor je klanten en organisatie. Welke ambities
                            willen we ondersteunen, welke verbeteringen hebben prioriteit en waaraan zien
                            we dat we ons doel bereiken?</p></li>
                    <li><h3>Plan</h3>
                        <p>Vanuit die gewenste situatie werken we de inrichting van het nieuwe systeem uit.
                            We maken keuzes over architectuur, koppelingen, toegang en beheer die passen
                            bij je organisatie en de doelen die we willen bereiken.</p></li>
                    <li><h3>Doen</h3>
                        <p>We maken een uitvoerbaar migratieplan. In welke volgorde gaan applicaties en
                            klantgroepen over? Hoe houden we bestaande diensten beschikbaar? En hoe zorgen
                            we dat klanten en teams de overstap goed kunnen maken?</p></li>
                </ol>
            </div>
            <div className="approach-photo"><Photo name="vision"/></div>
        </section>
        <section className="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
            <div className="section-heading">
                <Label number="04">Testimonials</Label>
                <h2 id="testimonials-title">WAT KLANTEN WAARDEREN</h2>
                <p>World Of CIAM helpt organisaties om complexe identity-vraagstukken praktisch, begrijpelijk en uitvoerbaar te maken.</p>
            </div>
            <div className="testimonials-grid">
                {testimonials.map(({name, quote, role, organization, photo}) => <figure className="testimonial" key={name}>
                    {photo && <img className="testimonial-photo" src={photo} alt={`Portret van ${name}`} width="96" height="96" loading="lazy"/>}
                    {quote ? <blockquote>{quote.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</blockquote> : <p className="testimonial-placeholder">Testimonial volgt binnenkort.</p>}
                    <figcaption>{name}{role && <span className="testimonial-role">{role}</span>}{organization && <span className="testimonial-organization">{organization}</span>}</figcaption>
                </figure>)}
            </div>
        </section>
        <section className="stories section" id="verhalen" hidden>
            <div className="section-heading">
                <div><Label number="05">Verhalen & gedachten</Label><h2>Even de tijd om <em>te lezen.</em></h2></div>
                <TextLink href="./blog.html">Naar het blog</TextLink></div>
            <a className="story-feature" href="./longread.html"><Photo name="blog"/>
                <div><span className="eyebrow">Voorbeeldverhaal · 3 min leestijd</span><h3>De waarde van<br/>even
                    stilstaan.</h3><p>{filler}</p><span className="text-link">Lees het verhaal <Arrow/></span></div>
            </a></section>
        <section className="split section background" id="kennismaken">
            <div className="photo-frame"><Photo name="background"/></div>
            <div className="section-copy"><Label number="06">Kennismaken</Label><h2>Laten we<br/><em>kennismaken.</em>
            </h2><p>Heb je een vraag, een idee of wil je ontdekken wat we voor elkaar kunnen betekenen? Ik maak graag
                tijd voor een persoonlijk gesprek.</p><p>Kies hieronder een moment dat jou uitkomt.</p><a
                className="button" href="#boekingsagenda">Kies een moment <span aria-hidden="true">↓</span></a></div>
            <div id="boekingsagenda" className="booking-container"><BookingEmbed/></div>
        </section>
        <Contact/>

    </>
}

function Blog() {
    return <div className="subpage"><Label number="Blog">Verhalen & gedachten</Label><h1>Een moment<br/>om <em>te
        lezen.</em></h1><p className="intro">Ideeën, observaties en verhalen. Een verzameling die met de tijd mag
        groeien.</p><a className="story-feature" href="./longread.html"><Photo name="blog" eager/>
        <div><span className="eyebrow">Voorbeeldverhaal · 3 min leestijd</span><h2>De waarde van<br/><em>even
            stilstaan.</em></h2><p>{filler}</p><span className="text-link">Lees verder <Arrow/></span></div>
    </a></div>
}

function MyStory() {
    return <article className="subpage about-section">
        <Label number="Persoonlijk">Mijn verhaal</Label>
        <h1>Zelf iets maken blijft leuk. Ook na bijna 40 jaar in de ICT.</h1>
        <div className="about-layout">
            <div className="photo-frame"><Photo name="portrait" eager/></div>
            <div className="about-copy">
                    <p>Ooit begon ik als programmeur. Rond het jaar 2000 kreeg ik de kans om architect te worden. Daarmee werd mijn blik een stuk breder. Business value leveren interesseerde me veel meer dan alleen bits en bytes.</p>
                    <p>Na een jaar of tien begon het programmeren toch weer te kriebelen. Zelf dingen maken, uitproberen en werkend krijgen. Dus ging ik weer bouwen, met de ervaring als architect in mijn achterzak. Die combinatie past bij mij: het geheel overzien én weten wat er nodig is om het aan de praat te krijgen.</p>
                    <p>In de afgelopen twintig jaar zat in bijna ieder project wel een klantportaal. En bij zo’n portaal hoorde meestal een inlogscherm met een gebruikersnaam en wachtwoord. Het lijkt een klein onderdeel, totdat een klant niet binnenkomt. Dan staat alles wat je achter dat inlogscherm hebt gebouwd ineens buiten bereik.</p>
                    <p>Inmiddels ligt daar mijn specialisme: klanten soepel en veilig laten registreren en inloggen. Customer Identity &amp; Access Management, oftewel CIAM. Daarin komen voor mij techniek, bedrijfsprocessen en de ervaring van de klant samen.</p>
                    <p>Als onafhankelijk CIAM-consultant help ik product owners en architecten om rust en overzicht te krijgen. Je hoeft niet zelf alle antwoorden te hebben. Ik denk met je mee, maak keuzes en risico’s inzichtelijk en geef advies vanuit mijn ervaring. Soms met een compleet ontwerp, soms met een second opinion of gewoon een middag sparren. En waar nodig bouw ik mee.</p>
                    <p>Mijn aanpak is nuchter: eerst draaien, dan verfraaien. Kleine, beheersbare stappen, met oog voor wat er al staat. Zo kun jij met vertrouwen beslissingen nemen en houd je zelf de regie.</p>
                <TextLink href={homeLink('kennismaken')}>Laten we kennismaken</TextLink>
            </div>
        </div>
    </article>
}

function Longread() {
    return <article className="subpage article"><Label number="Longread">Voorbeeldverhaal · 3 min leestijd</Label><h1>De
        waarde van<br/><em>even stilstaan.</em></h1><p className="intro">Soms ontstaat een nieuw idee juist wanneer je
        even niets hoeft. Over aandacht, ruimte en kijken met een frisse blik.</p><Photo name="landscape" eager/>
        <div className="article-body"><p className="example-note">Dit is een voorbeeldtekst voor de indeling van een
            longread.</p>{[['Ruimte in je dag', 'Een agenda vult zich vaak vanzelf. Een afspraak hier, een bericht daar. Voor je het weet is de dag voorbij. Even stilstaan kan helpen om opnieuw te zien wat je aandacht verdient. Het hoeft niet groot te zijn: een wandeling, een kop koffie zonder scherm of een paar gedachten op papier.'], ['Kijken met aandacht', 'Wie wat langzamer kijkt, ziet andere dingen. Het licht op een muur, een onverwachte vraag in een gesprek, een idee dat nog geen vorm heeft. Aandacht geeft ruimte aan wat je anders misschien voorbij zou lopen.'], ['Een klein begin', 'Je hoeft niet meteen alles anders te doen. Begin met een klein moment dat je voor jezelf vrijhoudt. Wat valt je op? Wat wil je bewaren? En wat mag nog even wachten? Misschien begint daar wel een nieuw verhaal.']].map(([title, body]) =>
            <section key={title}><h2>{title}</h2><p>{body}</p><p>{filler}</p></section>)}<TextLink href="./blog.html">Terug
            naar alle verhalen</TextLink></div>
    </article>
}

function App() {
    return <><a className="skip-link" href="#inhoud">Direct naar inhoud</a><Header/>
        <main id="inhoud">{page === 'blog' ? <Blog/> : page === 'mijn-verhaal' ? <MyStory/> : page === 'longread' ?
            <Longread/> : <Home/>}</main>
        {!isHome && <footer><a className="brand" href="./index.html">{profile.name}.</a><p>Met aandacht gemaakt.
            © {new Date().getFullYear()}</p><a href="#inhoud">Terug naar boven ↑</a></footer>}</>
}

document.title = `${({
    blog: 'Verhalen',
    'mijn-verhaal': 'Mijn verhaal',
    longread: 'De waarde van even stilstaan'
})[page] || 'CIAM in 4 stappen'} — ${profile.name}`;
createRoot(document.getElementById('root')).render(<App/>);
