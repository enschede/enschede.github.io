import React from 'react';
import {profile} from '../content';

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ContactBlock({id = 'contact'}) {
    const phone = profile.phone.replace(/[^+0-9]/g, '').replace(/^0/, '+31');
    return (
        <section className="company-footer section" id={id}
                 aria-label="World of CIAM bedrijfs- en contactgegevens">
            <h2>Contact</h2>
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

