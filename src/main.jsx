import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {filler, photos, profile, testimonials} from './content';
import './style.css';
import ContactBlock from './components/ContactBlock';
import ReactionsBlock from './components/ReactionsBlock';
import firstStory from './articles/architectuur-voor-selfservice-portalen.json';
import secondStory from './articles/drie-stappen-voor-2fa.json';
import smallStartStory from './articles/klein-beginnen.json';

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
    return <header className="header"><a className="brand" href="./index.html">
        <img className="brand-logo" src="./images/WorldofCiam_Icoon_BlauwGroen%20.png" alt="" width="48" height="42"/>
        <span>{profile.name}<span className="brand-dot">.</span></span>
    </a>
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
            <div className="hero-copy"><h1>MAAK INLOGGEN MAKKELIJKER,<br/>VEILIGER EN GOEDKOPER</h1><p>CIAM gaat over hoe je de business ondersteunt met digitale identiteit van de klant</p><a className="button"
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

                <h2>JE BUSINESS WIL MAXIMAAL LEVEREN. HOE HELPT CIAM DAARBIJ?</h2>
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
            <div className="approach-photo"><Photo name="approach"/></div>
        </section>
        <section className="section testimonials" id="testimonials" aria-labelledby="testimonials-title">
            <div className="section-heading">

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
        <section className="stories section" id="verhalen">
            <div className="section-heading">
                <div><h2>Even de tijd om <em>te lezen.</em></h2></div>
                <TextLink href="./blog.html">Naar het blog</TextLink></div>
            <StoryCard/>
        <StoryCard story={secondStory} href="./drie-stappen-voor-2fa.html" category="Praktische gids" photo="twoFactor"/>
        <StoryCard story={smallStartStory} href="./klein-beginnen.html" category="Aanpak" photo="smallStart"/></section>
        <section className="section collaboration" id="samenwerken" aria-labelledby="collaboration-title">
            <h2 id="collaboration-title">Hoe kunnen we samenwerken?</h2>
            <div className="collaboration-grid">
                <article>
                    <h3>Advies</h3>
                    <p>Hoe maak je registreren en inloggen eenvoudiger én veiliger voor je klanten? Ik denk mee over je CIAM-vraagstuk, geef een second opinion op je architectuur of spar regelmatig met je team. Je krijgt onafhankelijk advies, inzicht in de afwegingen en concrete stappen waarmee je verder kunt.</p>
                    <TextLink href="#kennismaken">Meer over advies</TextLink>
                </article>
                <article>
                    <h3>Projectbasis</h3>
                    <p>Wil je een klantportaal aansluiten, je CIAM-platform vernieuwen of een migratie voorbereiden? Met mijn aanpak ‘CIAM in 4 stappen’ vertaal ik je businessdoelen naar een passende architectuur en een uitvoerbaar plan. We spreken vooraf af wat ik oplever. Waar nodig bouw ik mee, in kleine, beheersbare stappen.</p>
                    <TextLink href="#kennismaken">Meer over projecten</TextLink>
                </article>
                <article>
                    <h3>Interim</h3>
                    <p>Heeft je team tijdelijk een ervaren CIAM-expert nodig? Als architect of inhoudelijke sparringspartner werk ik mee aan de keuzes én de uitvoering. Ik verbind de doelen van de business met wat er technisch nodig is en draag mijn kennis over, zodat je team daarna zelfstandig verder kan.</p>
                    <TextLink href="#kennismaken">Meer over interim</TextLink>
                </article>
            </div>
        </section>
        <section className="split section background" id="kennismaken">
            <div className="photo-frame"><Photo name="background"/></div>
            <div className="section-copy"><h2>Laten we<br/><em>kennismaken.</em>
            </h2><p>Heb je een vraag, een idee of wil je ontdekken wat we voor elkaar kunnen betekenen? Ik maak graag
                tijd voor een persoonlijk gesprek.</p><p>Kies hieronder een moment dat jou uitkomt.</p><a
                className="button" href="#boekingsagenda">Kies een moment <span aria-hidden="true">↓</span></a></div>
            <div id="boekingsagenda" className="booking-container"><BookingEmbed/></div>
        </section>
        <ContactBlock/>

    </>
}

function StoryCard({story = firstStory, href = './eerste-verhaal.html', category = 'Whitepaper', photo = 'vision'}) {
    return <a className="story-feature" href={href}>
        <Photo name={photo}/>
        <div><span className="eyebrow">{category} · {story.readingMinutes} min leestijd</span>
            <h2>{story.title}</h2>
            <p>{story.intro}</p>
            <span className="text-link">Lees het verhaal <Arrow/></span>
        </div>
    </a>;
}

function Blog() {
    return <div className="subpage">
        <Label number="Blog">Verhalen & gedachten</Label>
        <h1>Een moment om te lezen.</h1>
        <p className="intro">Ideeën, observaties en verhalen over CIAM, architectuur en de waarde voor je organisatie.</p>
        <StoryCard/>
        <StoryCard story={secondStory} href="./drie-stappen-voor-2fa.html" category="Praktische gids" photo="twoFactor"/>
        <StoryCard story={smallStartStory} href="./klein-beginnen.html" category="Aanpak" photo="smallStart"/>
    </div>;
}

function ArticlePage({story, category = 'Whitepaper'}) {
    return <><article className="subpage whitepaper">
        <a className="text-link" href="./blog.html">← Alle verhalen</a>
        <p className="eyebrow">{category} · Marc Enschede · {story.readingMinutes} min leestijd</p>
        <h1>{story.title}</h1>
        {story.subtitle && <p className="whitepaper-subtitle">{story.subtitle}</p>}
        <p className="intro">{story.intro}</p>
        <div className="whitepaper-layout">
            <aside className="whitepaper-toc" aria-label="Inhoudsopgave">
                <details open><summary>In dit verhaal</summary>
                    <ol>{story.toc.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.text}</a></li>)}</ol>
                </details>
            </aside>
            <div className="whitepaper-body">
                {story.blocks.map((block, index) => {
                    if (block.type === 'h2') return <h2 id={block.id} key={index}>{block.text}</h2>;
                    if (block.type === 'h3') return <h3 key={index}>{block.text}</h3>;
                    if (block.type === 'image') return <figure className="whitepaper-figure" key={index}>
                        <a href={block.src} target="_blank" rel="noopener noreferrer" aria-label={`${block.caption} op volledige grootte bekijken (nieuw tabblad)`}>
                            <img src={block.src} alt={block.alt} width={block.width} height={block.height} loading="lazy"/>
                        </a>
                        <figcaption>{block.caption} · Klik om te vergroten</figcaption>
                    </figure>;
                    if (block.type === 'code') return <pre key={index} tabIndex={0} aria-label="Codevoorbeeld"><code>{block.text}</code></pre>;
                    if (block.type === 'references') return <ul className="whitepaper-references" key={index}>{block.items.map(item => <li key={item.href}><a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.text} (opent in een nieuw tabblad)`}>{item.text}</a></li>)}</ul>;
                    if (block.type === 'ordered-list') return <ol key={index}>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ol>;
                    if (block.type === 'list') return <ul key={index}>{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
                    return <p className={block.type === 'callout' ? 'whitepaper-callout' : undefined} key={index}>{block.text}</p>;
                })}
                <div className="whitepaper-end"><h2>Sparren over jouw architectuur?</h2>
                    <a className="button" href={homeLink('kennismaken')}>Plan een kennismaking <Arrow/></a>
                    <TextLink href="./blog.html">Terug naar alle verhalen</TextLink>
                </div>
            </div>
        </div>
    </article>
        <ReactionsBlock/>
        <ContactBlock/>
    </>;
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
        <main id="inhoud">{page === 'klein-beginnen' ? <ArticlePage story={smallStartStory} category="Aanpak"/> : page === 'drie-stappen-voor-2fa' ? <ArticlePage story={secondStory} category="Praktische gids"/> : page === 'eerste-verhaal' ? <ArticlePage story={firstStory}/> : page === 'blog' ? <Blog/> : page === 'mijn-verhaal' ? <MyStory/> : page === 'longread' ?
            <Longread/> : <Home/>}</main>
        {!isHome && !['eerste-verhaal', 'drie-stappen-voor-2fa', 'klein-beginnen'].includes(page) && <footer><a className="brand" href="./index.html">{profile.name}.</a><p>Met aandacht gemaakt.
            © {new Date().getFullYear()}</p><a href="#inhoud">Terug naar boven ↑</a></footer>}</>
}

document.title = `${({
    'eerste-verhaal': firstStory.title,
    'drie-stappen-voor-2fa': secondStory.title,
    'klein-beginnen': smallStartStory.title,
    blog: 'Verhalen',
    'mijn-verhaal': 'Mijn verhaal',
    longread: 'De waarde van even stilstaan'
})[page] || 'CIAM in 4 stappen'} — ${profile.name}`;
createRoot(document.getElementById('root')).render(<App/>);
