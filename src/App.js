import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Moon, Sun, Globe, ChevronDown, ExternalLink, Copy, Check } from 'lucide-react';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [expandedSkills, setExpandedSkills] = useState({});
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedTheme === 'dark') setIsDarkTheme(true);
    if (savedLanguage === 'en') setIsEnglish(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    localStorage.setItem('language', isEnglish ? 'en' : 'pl');
    
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme, isEnglish]);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  const toggleLanguage = () => setIsEnglish(!isEnglish);

  const toggleSkill = (skillName) => {
    setExpandedSkills(prev => ({
      ...prev,
      [skillName]: !prev[skillName]
    }));
  };

  const copyToClipboard = async (text, fieldName) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const skills = [
    {
      name: 'HTML & CSS',
      level: 'good',
      details: [
        { pl: 'Semantyczna struktura HTML5', en: 'Semantic HTML5 structure' },
        { pl: 'Responsywny design CSS', en: 'Responsive CSS design' },
        { pl: 'Flexbox i Grid', en: 'Flexbox and Grid' },
        { pl: 'CSS animacje i przejścia', en: 'CSS animations and transitions' },
        { pl: 'SCSS/Sass preprocesor', en: 'SCSS/Sass preprocessor' }
      ]
    },
    {
      name: 'JavaScript',
      level: 'intermediate',
      details: [
        { pl: 'ES6+ nowoczesne składnie', en: 'ES6+ modern syntax' },
        { pl: 'DOM manipulacja', en: 'DOM manipulation' },
        { pl: 'Asynchroniczne programowanie', en: 'Asynchronous programming' },
        { pl: 'Obsługa API REST', en: 'REST API handling' },
        { pl: 'Zarządzanie stanem aplikacji', en: 'Application state management' }
      ]
    },
    {
      name: 'Python',
      level: 'intermediate',
      details: [
        { pl: 'Automatyczna analiza danych', en: 'Data analysis automation' },
        { pl: 'Biblioteki: Pandas, NumPy', en: 'Libraries: Pandas, NumPy' },
        { pl: 'Web scraping z BeautifulSoup', en: 'Web scraping with BeautifulSoup' },
        { pl: 'API development z FastAPI', en: 'API development with FastAPI' },
        { pl: 'Machine Learning z scikit-learn', en: 'Machine Learning with scikit-learn' }
      ]
    },
    {
      name: 'Linux',
      level: 'intermediate',
      details: [
        { pl: 'Administracja systemem Ubuntu/Debian', en: 'Ubuntu/Debian system administration' },
        { pl: 'Zarządzanie procesami i usługami', en: 'Process and service management' },
        { pl: 'Konfiguracja sieci i firewall', en: 'Network and firewall configuration' },
        { pl: 'Bash scripting i automatyzacja', en: 'Bash scripting and automation' },
        { pl: 'Zarządzanie pakietami APT', en: 'APT package management' }
      ]
    },
    {
      name: 'AI Prompt Engineering',
      level: 'intermediate',
      details: [
        { pl: 'Inżynieria promptów AI ukierunkowana na muzykę', en: 'Music-focused AI prompt engineering' },
        { pl: 'Inżynieria promptów AI ukierunkowana na fotografię', en: 'Photo-focused AI prompt engineering' },
        { pl: 'Inżynieria promptów AI ukierunkowana na wideo', en: 'Video-focused AI prompt engineering' },
        { pl: 'Inżynieria promptów AI ukierunkowana na kodowanie', en: 'Coding-focused AI prompt engineering' },
        { pl: 'Inżynieria promptów AI ukierunkowana na pisanie kreatywne', en: 'Creative writing-focused AI prompt engineering' }
      ]
    },
    {
      name: 'SQL',
      level: 'intermediate',
      details: [
        { pl: 'Optymalizacja zapytań', en: 'Query optimization' },
        { pl: 'Projektowanie schematów baz danych', en: 'Database schema design' },
        { pl: 'Indeksy i klucze obce', en: 'Indexes and foreign keys' },
        { pl: 'Procedury składowane', en: 'Stored procedures' },
        { pl: 'Transakcje i bezpieczeństwo danych', en: 'Transactions and data security' }
      ]
    },
    {
      name: 'Software Testing / QA',
      level: 'intermediate',
      details: [
        { pl: 'Jira', en: 'Jira' },
        { pl: 'Figma', en: 'Figma' },
        { pl: 'ISTQB', en: 'ISTQB' },
        { pl: 'Testowanie manualne', en: 'Manual testing' },
        { pl: 'Postman', en: 'Postman' }
      ]
    }
  ];

  const projects = [
    {
      name: { pl: 'Projekty React', en: 'React Projects' },
      icon: '⚛️',
      description: { pl: 'Aplikacje webowe z nowoczesnymi technologiami', en: 'Web applications with modern technologies' },
      color: '#61dafb'
    },
    {
      name: { pl: 'Projekty Python', en: 'Python Projects' },
      icon: '🐍',
      description: { pl: 'Automatyzacja i analiza danych', en: 'Automation and data analysis' },
      color: '#3776ab'
    }
  ];

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <motion.h1 
              className="nav-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              MS
            </motion.h1>
          </div>
          <div className="nav-right">
            <motion.button
              className="language-toggle-btn"
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isEnglish ? 'PL' : 'EN'}
            </motion.button>
            <motion.button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Milosz Szczepaniak
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isEnglish ? 'Aspiring Software Tester/Programmer' : 'Aspiring Software Tester/Programmer'}
          </motion.p>
          <motion.div 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>{isEnglish ? 'Interests and Hobbies:' : 'Zainteresowania i Hobby:'}</h3>
            <p>
              {isEnglish 
                ? 'Modern technologies, blockchain & Web3, programming, artificial intelligence, Rubik\'s cube, popular science literature, guitar playing, singing'
                : 'Nowoczesne technologie, blockchain & Web3, programowanie, sztuczna inteligencja, kostka Rubika, literatura popularnonaukowa, gra na gitarze, śpiew'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* IT Skills Section */}
      <section className="skills-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {isEnglish ? 'IT Skills' : 'Umiejętności IT'}
          </motion.h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`skill-card ${expandedSkills[skill.name] ? 'expanded' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="skill-header"
                  onClick={() => toggleSkill(skill.name)}
                >
                  <h3>{skill.name}</h3>
                  <motion.div
                    className="expand-icon"
                    animate={{ rotate: expandedSkills[skill.name] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
                
                <div className="skill-bar">
                  <motion.div 
                    className={`skill-progress skill-${skill.level}-progress`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>

                <AnimatePresence>
                  {expandedSkills[skill.name] && (
                    <motion.div
                      className="skill-details expanded"
                      initial={{ opacity: 0, height: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, height: 'auto', y: 0, scale: 1 }}
                      exit={{ opacity: 0, height: 0, y: -20, scale: 0.95 }}
                      transition={{ 
                        duration: 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <ul>
                        {skill.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: idx * 0.08,
                              ease: "easeOut"
                            }}
                            whileHover={{ 
                              x: 5, 
                              scale: 1.02,
                              color: "var(--text-primary)"
                            }}
                          >
                            {isEnglish ? detail.en : detail.pl}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {isEnglish ? 'Projects' : 'Projekty'}
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.name[isEnglish ? 'en' : 'pl']}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--project-color': project.color }}
              >
                <div className="project-icon">{project.icon}</div>
                <h3>{project.name[isEnglish ? 'en' : 'pl']}</h3>
                <p>{project.description[isEnglish ? 'en' : 'pl']}</p>
                <div className="project-placeholder">
                  {isEnglish ? 'Coming soon...' : 'Wkrótce...'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {isEnglish ? 'Contact' : 'Kontakt'}
          </motion.h2>
          
          <div className="contact-grid">
            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-info">
                <h3>{isEnglish ? 'Address' : 'Adres'}</h3>
                <div className="contact-value">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Hengelo,+Netherlands" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="address-link"
                  >
                    (currently) Hengelo, Netherlands
                  </a>
                  <button 
                    onClick={() => copyToClipboard('(currently) Hengelo, Netherlands', 'address')}
                    className="copy-btn"
                    title={isEnglish ? 'Copy address' : 'Skopiuj adres'}
                  >
                    {copiedField === 'address' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-info">
                <h3>{isEnglish ? 'Phone' : 'Telefon'}</h3>
                <div className="contact-value">
                  <a href="tel:+48666913017" className="phone-link">
                    +48 666 913 017
                  </a>
                  <button 
                    onClick={() => copyToClipboard('+48 666 913 017', 'phone')}
                    className="copy-btn"
                    title={isEnglish ? 'Copy phone number' : 'Skopiuj numer telefonu'}
                  >
                    {copiedField === 'phone' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="contact-info">
                <h3>WhatsApp</h3>
                <div className="contact-value">
                  <a 
                    href="https://wa.me/48666913017?text=Witam!%20Piszę%20z%20CV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    @batsnuff
                  </a>
                  <button 
                    onClick={() => copyToClipboard('@batsnuff', 'whatsapp')}
                    className="copy-btn"
                    title={isEnglish ? 'Copy WhatsApp username' : 'Skopiuj nazwę WhatsApp'}
                  >
                    {copiedField === 'whatsapp' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <div className="contact-value">
                  <a 
                    href="mailto:miloszszczepaniak@gmail.com?subject=Wiadomość%20z%20CV" 
                    className="email-link"
                  >
                    miloszszczepaniak@gmail.com
                  </a>
                  <button 
                    onClick={() => copyToClipboard('miloszszczepaniak@gmail.com', 'email')}
                    className="copy-btn"
                    title={isEnglish ? 'Copy email' : 'Skopiuj adres email'}
                  >
                    {copiedField === 'email' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="documents-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {isEnglish ? 'Documents' : 'Dokumenty'}
          </motion.h2>
          
          <div className="documents-grid">
            <motion.div 
              className="document-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3>{isEnglish ? 'CV' : 'CV'}</h3>
              <div className="document-links">
                <a 
                  href="https://drive.google.com/file/d/1Hah_0e0vQBxghaXIX7Qk1I3nBOh31ql2/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  <span>PL</span>
                  <ExternalLink size={16} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1J0sVdleEILDnkk9R7rIs8rAyvCj00u1e/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  <span>EN</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="document-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3>{isEnglish ? 'Cover Letter' : 'List Motywacyjny'}</h3>
              <div className="document-links">
                <a 
                  href="https://drive.google.com/file/d/1UWWeXnys2E9h9YzSMnCIbS49czDj-yYR/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  <span>PL</span>
                  <ExternalLink size={16} />
                </a>
                <a 
                  href="https://drive.google.com/file/d/1zUiFbTaaBwpZbZVCytVPRK1cK4S3dyGA/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="document-link"
                >
                  <span>EN</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
