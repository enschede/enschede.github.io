import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, photos, filler } from './content';
import './style.css';

const page = location.pathname.split('/').pop().replace('.html','') || 'index';
const isHome = page === 'index';
const homeLink = id => `${isHome ? '' : './index.html'}#${id}`;
const Arrow = () => <span aria-hidden="true">↗</span>;
function Photo({name, eager=false, className=''}) { const [id,alt]=photos[name];return <img className={className} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`} alt={alt} loading={eager?'eager':'lazy'} width="1600" height="1100"/>; }
function Header(){const [open,setOpen]=useState(false);return <header className="header"><a className="brand" href="./index.html">{profile.name}<span className="brand-dot">.</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Sluiten ×':'Menu ☰'}</button><nav id="navigation" className={open?'open':''} aria-label="Hoofdnavigatie" onClick={()=>setOpen(false)}><a href={homeLink('over')}>Over mij</a><a href={homeLink('werk')}>Mijn werk</a><a aria-current={page==='blog'?'page':undefined} href="./blog.html">Verhalen</a><a aria-current={page==='mijn-verhaal'?'page':undefined} href="./mijn-verhaal.html">Mijn verhaal</a><a className="nav-contact" href={homeLink('kennismaken')}>Even kennismaken <Arrow/></a></nav></header>}
function Label({number,children}){return <p className="eyebrow"><span>{number} /</span> {children}</p>}
function TextLink({href,children}){return <a className="text-link" href={href}>{children}<Arrow/></a>}
function Contact() {
  const phone = profile.phone.replace(/[^+0-9]/g, '').replace(/^0/, '+31');
  return (
    <section className="company-footer section" id="contact" aria-label="World of CIAM bedrijfs- en contactgegevens">
      <h2>Contact</h2>
      <div className="company-footer-grid">
        <div>
          <h3>Adres</h3>
          <address>
            <strong>I am Enschede BV</strong>
            <span>Langestraat 45a<br/>7511 HB Enschede<br/>Nederland</span>
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
          {profile.linkedin ? <a className="linkedin-icon" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Bekijk mijn LinkedIn-profiel (opent in een nieuw tabblad)" title="Bekijk mijn LinkedIn-profiel"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.79-1.52 2.98 0 3.58 1.96 3.58 4.51v5.26Z"/></svg></a> : <p>Profiel volgt binnenkort.</p>}
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
    <div className="meetergo-iframe" link="https://cal.meetergo.com/marc/kennismaken?lang=nl" data-align="center" data-resize="true"/>
    <p>Laadt de agenda niet? <a className="text-link" href="https://cal.meetergo.com/marc/kennismaken?lang=nl">Open de boekingspagina <Arrow/></a></p>
  </div>;
}
function Home(){return <>
<section className="hero" id="welkom"><div className="hero-copy"><Label number="01">Welkom, fijn dat je er bent</Label><h1>Ruimte voor aandacht.<br/><em>En nieuwe ideeën.</em></h1><p>Een persoonlijke plek voor wat mij inspireert,<br className="desktop"/> het werk dat ik doe en de verhalen die ik wil delen.</p><a className="button" href="#over">Ontdek mijn verhaal <span>↓</span></a><p className="small-note">{profile.tagline}</p></div><div className="hero-image"><Photo name="hero" eager/><div className="image-note">Een frisse blik begint met even stilstaan.</div></div><div className="hero-bottom"><span>Met aandacht voor wat ertoe doet</span><a href="#over">Scroll om te ontdekken ↓</a></div></section>
<section className="split section" id="over"><div className="photo-frame"><Photo name="about"/></div><div className="section-copy"><Label number="02">Over mij</Label><h2>Achter ieder idee<br/>zit <em>een verhaal.</em></h2><p>{filler}</p><p>Hier kun je iets vertellen over je achtergrond, je nieuwsgierigheid en de kleine dingen die voor jou het verschil maken.</p><TextLink href="./mijn-verhaal.html">Lees mijn verhaal</TextLink></div></section>
<section className="vision section" id="visie"><div><Label number="03">Wat mij drijft</Label><h2>Meer aandacht.<br/>Meer betekenis.<br/><em>Meer verbinding.</em></h2></div><div><Photo name="vision"/><p>{filler}</p></div></section>
<section className="split section work" id="werk"><div className="section-copy"><Label number="04">Mijn werk</Label><h2>Van een eerste idee<br/>naar <em>iets moois.</em></h2><p>{filler}</p><p>Gebruik dit blok voor projecten, samenwerkingen of de onderwerpen waar je graag aan werkt.</p><TextLink href="#contact">Laten we kennismaken</TextLink></div><div className="photo-frame"><Photo name="work"/></div></section>
<section className="stories section" id="verhalen"><div className="section-heading"><div><Label number="05">Verhalen & gedachten</Label><h2>Even de tijd om <em>te lezen.</em></h2></div><TextLink href="./blog.html">Naar het blog</TextLink></div><a className="story-feature" href="./longread.html"><Photo name="blog"/><div><span className="eyebrow">Voorbeeldverhaal · 3 min leestijd</span><h3>De waarde van<br/>even stilstaan.</h3><p>{filler}</p><span className="text-link">Lees het verhaal <Arrow/></span></div></a></section>
<section className="split section background" id="kennismaken"><div className="photo-frame"><Photo name="background"/></div><div className="section-copy"><Label number="06">Kennismaken</Label><h2>Laten we<br/><em>kennismaken.</em></h2><p>Heb je een vraag, een idee of wil je ontdekken wat we voor elkaar kunnen betekenen? Ik maak graag tijd voor een persoonlijk gesprek.</p><p>Kies hieronder een moment dat jou uitkomt.</p><a className="button" href="#boekingsagenda">Kies een moment <span aria-hidden="true">↓</span></a></div><div id="boekingsagenda" className="booking-container"><BookingEmbed/></div></section>
<Contact/>

</>}
function Blog(){return <div className="subpage"><Label number="Blog">Verhalen & gedachten</Label><h1>Een moment<br/>om <em>te lezen.</em></h1><p className="intro">Ideeën, observaties en verhalen. Een verzameling die met de tijd mag groeien.</p><a className="story-feature" href="./longread.html"><Photo name="blog" eager/><div><span className="eyebrow">Voorbeeldverhaal · 3 min leestijd</span><h2>De waarde van<br/><em>even stilstaan.</em></h2><p>{filler}</p><span className="text-link">Lees verder <Arrow/></span></div></a></div>}
function MyStory(){return <article className="subpage article"><Label number="Persoonlijk">Mijn verhaal</Label><h1>De weg naar<br/><em>wie ik ben.</em></h1><p className="intro">Een plek voor mijn achtergrond, wat mij drijft en de ervaringen die mij hebben gevormd.</p><Photo name="background" eager/><div className="article-body"><p className="example-note">Dit is voorbeeldinhoud. Hier komt binnenkort mijn persoonlijke verhaal.</p>{[
  ['Waar het begon', 'Vertel hier over je achtergrond en de eerste ervaringen die je hebben gevormd. Wat maakte je nieuwsgierig en welke richting wilde je ontdekken?'],
  ['Wat mij heeft gevormd', 'Gebruik deze ruimte voor bijzondere ontmoetingen, keuzes en momenten die belangrijk voor je zijn geweest. Wat heb je ervan geleerd en wat neem je mee?'],
  ['Wat mij drijft', 'Beschrijf waar je energie van krijgt, wat je belangrijk vindt en hoe dat terugkomt in je leven en werk.'],
  ['Waar ik naartoe wil', 'Deel hier je ideeën voor de toekomst. Wat wil je ontdekken, maken of betekenen voor anderen?']
].map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p></section>)}<TextLink href={homeLink('contact')}>Laten we kennismaken</TextLink></div></article>}
function Longread(){return <article className="subpage article"><Label number="Longread">Voorbeeldverhaal · 3 min leestijd</Label><h1>De waarde van<br/><em>even stilstaan.</em></h1><p className="intro">Soms ontstaat een nieuw idee juist wanneer je even niets hoeft. Over aandacht, ruimte en kijken met een frisse blik.</p><Photo name="hero" eager/><div className="article-body"><p className="example-note">Dit is een voorbeeldtekst voor de indeling van een longread.</p>{[['Ruimte in je dag','Een agenda vult zich vaak vanzelf. Een afspraak hier, een bericht daar. Voor je het weet is de dag voorbij. Even stilstaan kan helpen om opnieuw te zien wat je aandacht verdient. Het hoeft niet groot te zijn: een wandeling, een kop koffie zonder scherm of een paar gedachten op papier.'],['Kijken met aandacht','Wie wat langzamer kijkt, ziet andere dingen. Het licht op een muur, een onverwachte vraag in een gesprek, een idee dat nog geen vorm heeft. Aandacht geeft ruimte aan wat je anders misschien voorbij zou lopen.'],['Een klein begin','Je hoeft niet meteen alles anders te doen. Begin met een klein moment dat je voor jezelf vrijhoudt. Wat valt je op? Wat wil je bewaren? En wat mag nog even wachten? Misschien begint daar wel een nieuw verhaal.']].map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p><p>{filler}</p></section>)}<TextLink href="./blog.html">Terug naar alle verhalen</TextLink></div></article>}
function App(){return <><a className="skip-link" href="#inhoud">Direct naar inhoud</a><Header/><main id="inhoud">{page==='blog'?<Blog/>:page==='mijn-verhaal'?<MyStory/>:page==='longread'?<Longread/>:<Home/>}</main>{!isHome && <footer><a className="brand" href="./index.html">{profile.name}.</a><p>Met aandacht gemaakt. © {new Date().getFullYear()}</p><a href="#inhoud">Terug naar boven ↑</a></footer>}</>}
document.title = `${({blog:'Verhalen','mijn-verhaal':'Mijn verhaal',longread:'De waarde van even stilstaan'})[page] || 'Ruimte voor aandacht'} — ${profile.name}`;
createRoot(document.getElementById('root')).render(<App/>);
