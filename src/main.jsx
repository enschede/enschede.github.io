import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, photos, filler } from './content';
import './style.css';

const page = location.pathname.split('/').pop().replace('.html','') || 'index';
const isHome = page === 'index';
const homeLink = id => `${isHome ? '' : './index.html'}#${id}`;
const Arrow = () => <span aria-hidden="true">↗</span>;
function Photo({name, eager=false, className=''}) { const [id,alt]=photos[name];return <img className={className} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`} alt={alt} loading={eager?'eager':'lazy'} width="1600" height="1100"/>; }
function Header(){const [open,setOpen]=useState(false);return <header className="header"><a className="brand" href="./index.html">{profile.name}<span className="brand-dot">.</span></a><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Sluiten ×':'Menu ☰'}</button><nav id="navigation" className={open?'open':''} aria-label="Hoofdnavigatie" onClick={()=>setOpen(false)}><a href={homeLink('over')}>Over mij</a><a href={homeLink('werk')}>Mijn werk</a><a aria-current={page==='blog'?'page':undefined} href="./blog.html">Verhalen</a><a aria-current={page==='mijn-verhaal'?'page':undefined} href="./mijn-verhaal.html">Mijn verhaal</a><a className="nav-contact" href={homeLink('contact')}>Even kennismaken <Arrow/></a></nav></header>}
function Label({number,children}){return <p className="eyebrow"><span>{number} /</span> {children}</p>}
function TextLink({href,children}){return <a className="text-link" href={href}>{children}<Arrow/></a>}
function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="contact-intro">
        <Label number="07">Laten we kennismaken</Label>
        <h2 id="contact-title">Een goed gesprek<br/>begint met <em>hallo.</em></h2>
        <p>Een vraag, een idee of benieuwd wat we voor elkaar kunnen betekenen? Ik maak graag tijd voor een kennismaking.</p>
        <div className="contact-actions">
          {profile.email && <a className="button" href={`mailto:${profile.email}`}>Stuur een e-mail <Arrow/></a>}
          {profile.phone && <a className="button button-outline" href={`tel:${profile.phone.replace(/[^+0-9]/g, '')}`}>Bel mij <Arrow/></a>}
        </div>
      </div>
      <div className="contact-details">
        <Photo name="contact"/>
        <address className="contact-address">
          <h3>{profile.name}</h3>
          <p>{profile.tagline}</p>
          <dl>
            <div><dt>E-mail</dt><dd>{profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : <span className="contact-pending">Volgt binnenkort</span>}</dd></div>
            <div><dt>Telefoon</dt><dd>{profile.phone ? <a href={`tel:${profile.phone.replace(/[^+0-9]/g, '')}`}>{profile.phone}</a> : <span className="contact-pending">Volgt binnenkort</span>}</dd></div>
            <div><dt>Locatie</dt><dd>{profile.location || <span className="contact-pending">Volgt binnenkort</span>}</dd></div>
          </dl>
          {profile.linkedin && <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Bekijk mijn LinkedIn <Arrow/></a>}
        </address>
      </div>
    </section>
  );
}
function Home(){return <>
<section className="hero" id="welkom"><div className="hero-copy"><Label number="01">Welkom, fijn dat je er bent</Label><h1>Ruimte voor aandacht.<br/><em>En nieuwe ideeën.</em></h1><p>Een persoonlijke plek voor wat mij inspireert,<br className="desktop"/> het werk dat ik doe en de verhalen die ik wil delen.</p><a className="button" href="#over">Ontdek mijn verhaal <span>↓</span></a><p className="small-note">{profile.tagline}</p></div><div className="hero-image"><Photo name="hero" eager/><div className="image-note">Een frisse blik begint met even stilstaan.</div></div><div className="hero-bottom"><span>Met aandacht voor wat ertoe doet</span><a href="#over">Scroll om te ontdekken ↓</a></div></section>
<section className="split section" id="over"><div className="photo-frame"><Photo name="about"/></div><div className="section-copy"><Label number="02">Over mij</Label><h2>Achter ieder idee<br/>zit <em>een verhaal.</em></h2><p>{filler}</p><p>Hier kun je iets vertellen over je achtergrond, je nieuwsgierigheid en de kleine dingen die voor jou het verschil maken.</p><TextLink href="./mijn-verhaal.html">Lees mijn verhaal</TextLink></div></section>
<section className="vision section" id="visie"><div><Label number="03">Wat mij drijft</Label><h2>Meer aandacht.<br/>Meer betekenis.<br/><em>Meer verbinding.</em></h2></div><div><Photo name="vision"/><p>{filler}</p></div></section>
<section className="split section work" id="werk"><div className="section-copy"><Label number="04">Mijn werk</Label><h2>Van een eerste idee<br/>naar <em>iets moois.</em></h2><p>{filler}</p><p>Gebruik dit blok voor projecten, samenwerkingen of de onderwerpen waar je graag aan werkt.</p><TextLink href="#contact">Laten we kennismaken</TextLink></div><div className="photo-frame"><Photo name="work"/></div></section>
<section className="stories section" id="verhalen"><div className="section-heading"><div><Label number="05">Verhalen & gedachten</Label><h2>Even de tijd om <em>te lezen.</em></h2></div><TextLink href="./blog.html">Naar het blog</TextLink></div><a className="story-feature" href="./longread.html"><Photo name="blog"/><div><span className="eyebrow">Voorbeeldverhaal · 3 min leestijd</span><h3>De waarde van<br/>even stilstaan.</h3><p>{filler}</p><span className="text-link">Lees het verhaal <Arrow/></span></div></a></section>
<section className="split section background" id="achtergrond"><div className="photo-frame"><Photo name="background"/></div><div className="section-copy"><Label number="06">Mijn verhaal</Label><h2>Elke stap brengt<br/><em>iets nieuws.</em></h2><p>{filler}</p><TextLink href="./mijn-verhaal.html">Lees mijn verhaal</TextLink></div></section>
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
function App(){return <><a className="skip-link" href="#inhoud">Direct naar inhoud</a><Header/><main id="inhoud">{page==='blog'?<Blog/>:page==='mijn-verhaal'?<MyStory/>:page==='longread'?<Longread/>:<Home/>}</main><footer><a className="brand" href="./index.html">{profile.name}.</a><p>Met aandacht gemaakt. © {new Date().getFullYear()}</p><a href="#inhoud">Terug naar boven ↑</a></footer></>}
document.title = `${({blog:'Verhalen','mijn-verhaal':'Mijn verhaal',longread:'De waarde van even stilstaan'})[page] || 'Ruimte voor aandacht'} — ${profile.name}`;
createRoot(document.getElementById('root')).render(<App/>);
