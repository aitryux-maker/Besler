/* ============================================
   BESLER — Mental Performance Coach
   Main JavaScript
   ============================================ */

// ---- Google Calendar Configuration ----
const CALENDAR_CONFIG = {
  apiKey: 'AIzaSyDUG1cFKpQ9ZInKSKHr-AoAY1QXC_zvHGM',                          // Replace with actual API key
  eventsCalendarId: '4334d29b68a5b61a7a497ee0be1f001105db3566920b1a2909483e25156ccedb@group.calendar.google.com', // Public events calendar ID
  appointmentUrl: 'https://calendar.app.google/Q2LWiMDXja8AkWW97', // Google Appointment Scheduling URL
  maxEvents: 5,
  cacheDurationMs: 300000 // 5 minutes
};

// ---- Translations ----
const translations = {
  // === NAVIGATION ===
  'nav.home': { pl: 'Strona Główna', en: 'Home' },
  'nav.trading': { pl: 'Trading', en: 'Trading' },
  'nav.athletes': { pl: 'Sportowcy', en: 'Athletes' },
  'nav.about': { pl: 'O Mnie', en: 'About' },
  'nav.contact': { pl: 'Kontakt', en: 'Contact' },
  'nav.oferta': { pl: 'Oferta', en: 'Offer' },

  // === INDEX PAGE ===
  'hero.badge': { pl: 'Trener Mentalny & DiNapoli Expert', en: 'Mental Coach & DiNapoli Expert' },
  'hero.motto': { pl: 'Najlepsza inwestycja to inwestycja w siebie', en: 'The best investment is an investment in yourself' },
  'hero.cta.trading': { pl: 'Trening Mentalny dla Traderów', en: 'Mental Training for Traders' },
  'hero.cta.athletes': { pl: 'Trening Mentalny dla Sportowców', en: 'Mental Training for Athletes' },

  // Trust Bar
  'trust.label': { pl: 'Zaufane źródła wiedzy', en: 'Trusted Knowledge Sources' },

  // About
  'about.label': { pl: 'O Mnie', en: 'About Me' },
  'about.title': { pl: 'Presja to moje środowisko', en: 'Pressure is my element' },
  'about.p1': {
    pl: 'Moja przygoda z rynkami finansowymi zaczęła się w 2013 roku, choć fascynacja giełdą towarzyszyła mi od dawna. We wrześniu 2013 roku trafiłem pod skrzydła Piotra Greli „DiNapoli Expert", biorąc udział w programie mentoringowym, który zapoczątkował moją intensywną podróż w świat finansów.',
    en: 'My journey with financial markets began in 2013, though my fascination with the stock exchange had been with me for much longer. In September 2013, I came under the mentorship of Piotr Grela, a "DiNapoli Expert," joining a mentoring program that launched my intensive journey into the world of finance.'
  },
  'about.p2': {
    pl: 'Z ogromnym entuzjazmem zagłębiłem się w techniki DiNapolego, uczestnicząc w pięciu zaawansowanych seminariach prowadzonych przez Joe DiNapolego oraz dwóch szkoleniach z Pieterem Van Wykiem. W styczniu 2019 roku Joe DiNapoli nadał mi tytuł „DiNapoli Expert".',
    en: 'With great enthusiasm, I immersed myself in DiNapoli techniques, attending five advanced seminars led by Joe DiNapoli and two training sessions with Pieter Van Wyk. In January 2019, Joe DiNapoli awarded me the title of "DiNapoli Expert."'
  },
  'about.p3': {
    pl: 'Poza tradingiem jestem pasjonatem sportu — moja przeszłość w Rugby Klub Lechia Gdańsk nadal wpływa na moje podejście do życia i inwestowania. Ukończyłem szkolenie trenera mentalnego u Jakuba B. Bączka, trenera mentalnego Roberta Lewandowskiego. Współpracuję z dwiema psycholożkami, przenosząc sportowe techniki mentalne na grunt tradingu.',
    en: 'Beyond trading, I am a sports enthusiast — my background at Rugby Klub Lechia Gdańsk still shapes my approach to life and investing. I completed mental coaching certification under Jakub B. Bączek, the mental coach of Robert Lewandowski. I collaborate with two psychologists, transferring sports mental techniques to the trading world.'
  },
  'about.credential1': { pl: 'DiNapoli Expert', en: 'DiNapoli Expert' },
  'about.credential2': { pl: 'Certyfikowany Trener Mentalny', en: 'Certified Mental Coach' },
  'about.credential3': { pl: 'Rugby Klub Lechia Gdańsk', en: 'Rugby Club Lechia Gdańsk' },
  'about.photo': { pl: 'Twoje Zdjęcie', en: 'Your Photo' },

  // Services
  'services.label': { pl: 'Usługi', en: 'Services' },
  'services.title': { pl: 'Jak mogę Ci pomóc', en: 'How I Can Help You' },
  'services.subtitle': {
    pl: 'Łączę doświadczenie z rynków finansowych, sportu i psychologii, aby pomóc Ci osiągać najlepsze wyniki pod presją.',
    en: 'I combine experience from financial markets, sports, and psychology to help you achieve peak performance under pressure.'
  },
  'services.trading.title': { pl: 'Trening Mentalny dla Traderów', en: 'Mental Training for Traders' },
  'services.trading.desc': {
    pl: 'Naucz się zarządzać emocjami podczas tradingu, utrzymywać dyscyplinę i podejmować trafne decyzje nawet w najbardziej zmiennych warunkach rynkowych.',
    en: 'Learn to manage emotions while trading, maintain discipline, and make accurate decisions even in the most volatile market conditions.'
  },
  'services.athletes.title': { pl: 'Trening Mentalny dla Sportowców', en: 'Mental Training for Athletes' },
  'services.athletes.desc': {
    pl: 'Rozwijaj siłę mentalną potrzebną do rywalizacji na najwyższym poziomie. Techniki sprawdzone zarówno na boisku, jak i w profesjonalnym sporcie.',
    en: 'Develop the mental strength needed to compete at the highest level. Techniques proven both on the field and in professional sports.'
  },
  'services.cta': { pl: 'Dowiedz się więcej', en: 'Learn More' },

  // Journey / Orbital Timeline
  'journey.label': { pl: 'Moja Droga', en: 'My Journey' },
  'journey.title': { pl: 'Od pasji do ekspertyzy', en: 'From Passion to Expertise' },
  'journey.subtitle': {
    pl: 'Ponad dekada doświadczenia na rynkach finansowych, w sporcie i treningu mentalnym.',
    en: 'Over a decade of experience in financial markets, sports, and mental training.'
  },
  'journey.status.done': { pl: 'ZAKOŃCZONE', en: 'COMPLETED' },
  'journey.status.active': { pl: 'W TOKU', en: 'IN PROGRESS' },
  'journey.n1.title': { pl: 'Początki', en: 'Beginnings' },
  'journey.n1.heading': { pl: 'Wejście na rynki finansowe', en: 'Entering Financial Markets' },
  'journey.n1.desc': {
    pl: 'Rozpoczęcie przygody z rynkami finansowymi. Mentoring pod skrzydłami Piotra Greli, „DiNapoli Expert".',
    en: 'Beginning the financial markets journey. Mentoring under Piotr Grela, "DiNapoli Expert."'
  },
  'journey.n2.title': { pl: 'Seminaria', en: 'Seminars' },
  'journey.n2.heading': { pl: 'Zaawansowane szkolenia', en: 'Advanced Training' },
  'journey.n2.desc': {
    pl: '5 seminariów z Joe DiNapolim i 2 szkolenia z Pieterem Van Wykiem. Zrozumienie mechaniki rynków.',
    en: '5 seminars with Joe DiNapoli and 2 sessions with Pieter Van Wyk. Understanding market mechanics.'
  },
  'journey.n3.title': { pl: 'DiNapoli Expert', en: 'DiNapoli Expert' },
  'journey.n3.heading': { pl: 'Tytuł DiNapoli Expert', en: 'DiNapoli Expert Title' },
  'journey.n3.desc': {
    pl: 'Joe DiNapoli osobiście nadał tytuł „DiNapoli Expert" — wyróżnienie za zaawansowane opanowanie technik.',
    en: 'Joe DiNapoli personally awarded the "DiNapoli Expert" title — recognition for advanced mastery of techniques.'
  },
  'journey.n4.title': { pl: 'Rugby', en: 'Rugby' },
  'journey.n4.heading': { pl: 'Sportowa determinacja', en: 'Athletic Determination' },
  'journey.n4.desc': {
    pl: 'Rugby Klub Lechia Gdańsk — sportowa determinacja i duch walki kształtujące podejście do wyzwań na rynku i w życiu.',
    en: 'Rugby Club Lechia Gdańsk — athletic determination and fighting spirit shaping approach to challenges in markets and life.'
  },
  'journey.n5.title': { pl: 'Trener Mentalny', en: 'Mental Coach' },
  'journey.n5.heading': { pl: 'Certyfikacja mentalna', en: 'Mental Certification' },
  'journey.n5.desc': {
    pl: 'Szkolenie u Jakuba B. Bączka, trenera mentalnego Roberta Lewandowskiego. Współpraca z psycholożkami sportowymi.',
    en: 'Training under Jakub B. Bączek, the mental coach of Robert Lewandowski. Collaboration with sports psychologists.'
  },
  'journey.n6.title': { pl: 'Ping Pong Trade', en: 'Ping Pong Trade' },
  'journey.n6.heading': { pl: 'Autorska metodologia', en: 'Proprietary Methodology' },
  'journey.n6.desc': {
    pl: 'Plan transakcyjny Ping Pong Trade wykorzystujący analizę ekspansji DiNapoli. Fuzja tradingu i psychologii sportu.',
    en: 'Ping Pong Trade transaction plan utilizing DiNapoli expansion analysis. Fusion of trading and sports psychology.'
  },
  'journey.n6.date': { pl: 'Teraz', en: 'Now' },

  // Trading Showcase
  'showcase.label': { pl: 'Analiza Techniczna', en: 'Technical Analysis' },
  'showcase.title': { pl: 'Techniki DiNapolego w praktyce', en: 'DiNapoli Techniques in Practice' },
  'showcase.subtitle': {
    pl: 'Precyzyjna analiza techniczna oparta na sprawdzonych metodach Fibonacci',
    en: 'Precise technical analysis based on proven Fibonacci methods'
  },

  // Video
  'video.label': { pl: 'Obejrzyj', en: 'Watch' },
  'video.title': { pl: 'Poznaj moje podejście', en: 'Discover My Approach' },
  'video.subtitle': {
    pl: 'Zobacz, jak łączę doświadczenie tradingowe z treningiem mentalnym.',
    en: 'See how I combine trading experience with mental training.'
  },

  // Newsletter
  'newsletter.label': { pl: 'Newsletter', en: 'Newsletter' },
  'newsletter.title': { pl: 'Bądź na bieżąco', en: 'Stay Updated' },
  'newsletter.subtitle': {
    pl: 'Zapisz się, aby otrzymywać wskazówki dotyczące treningu mentalnego, analizy rynkowe i informacje o nadchodzących wydarzeniach.',
    en: 'Subscribe to receive mental training tips, market insights, and information about upcoming events.'
  },
  'newsletter.placeholder': { pl: 'Twój adres e-mail', en: 'Your email address' },
  'newsletter.btn': { pl: 'Zapisz się', en: 'Subscribe' },
  'newsletter.success': { pl: 'Dziękuję za zapis!', en: 'Thank you for subscribing!' },

  // Events
  'events.label': { pl: 'Wydarzenia', en: 'Events' },
  'events.title': { pl: 'Nadchodzące wydarzenia', en: 'Upcoming Events' },
  'events.subtitle': {
    pl: 'Spotkajmy się na żywo — prelekcje, warsztaty i seminaria.',
    en: 'Let\'s meet in person — talks, workshops, and seminars.'
  },
  'events.placeholder': {
    pl: 'Nowe wydarzenia pojawią się wkrótce. Zapisz się do newslettera, aby być na bieżąco.',
    en: 'New events coming soon. Subscribe to the newsletter to stay updated.'
  },
  'events.loading': { pl: 'Ładowanie wydarzeń...', en: 'Loading events...' },
  'events.error': {
    pl: 'Nie udało się załadować wydarzeń. Spróbuj ponownie później.',
    en: 'Failed to load events. Please try again later.'
  },
  'events.empty': {
    pl: 'Brak nadchodzących wydarzeń. Zapisz się do newslettera, aby być na bieżąco.',
    en: 'No upcoming events. Subscribe to the newsletter to stay updated.'
  },

  // Calendar Booking
  'calendar.loading': { pl: 'Ładowanie kalendarza rezerwacji...', en: 'Loading booking calendar...' },
  'calendar.fallback': { pl: 'Kliknij tutaj, aby zarezerwować termin', en: 'Click here to book an appointment' },
  'calendar.header.title': { pl: 'Wybierz termin sesji', en: 'Pick a session time' },
  'calendar.header.external': { pl: 'Pełny widok', en: 'Full view' },
  'calendar.direct.title': { pl: 'Wolisz zarezerwować bezpośrednio?', en: 'Prefer to book directly?' },
  'calendar.direct.desc': { pl: 'Otwórz pełny kalendarz Google w nowej karcie dla najlepszego doświadczenia.', en: 'Open the full Google calendar in a new tab for the best experience.' },
  'calendar.direct.btn': { pl: 'Rezerwuj bezpośrednio', en: 'Book directly' },

  // Partners
  'partners.label': { pl: 'Partnerzy & Zasoby', en: 'Partners & Resources' },
  'partners.title': { pl: 'Zaufane źródła wiedzy', en: 'Trusted Knowledge Sources' },

  // Quote
  'quote.text': {
    pl: '„Wszystko jest trudne, zanim stanie się jasne. Sukces odnoszą ci, którzy potrafią zmusić się do pracy."',
    en: '"Everything is difficult before it becomes clear. Success comes to those who can force themselves to work."'
  },
  'quote.author': { pl: '— J.W. Goethe', en: '— J.W. Goethe' },

  // Footer
  'footer.desc': {
    pl: 'Trener mentalny i DiNapoli Expert. Pomagam traderom i sportowcom osiągać szczytową formę pod presją.',
    en: 'Mental coach and DiNapoli Expert. Helping traders and athletes achieve peak performance under pressure.'
  },
  'footer.nav': { pl: 'Nawigacja', en: 'Navigation' },
  'footer.services': { pl: 'Usługi', en: 'Services' },
  'footer.contact': { pl: 'Kontakt', en: 'Contact' },
  'footer.email': { pl: 'pawelbesler@gmail.com', en: 'pawelbesler@gmail.com' },
  'footer.rights': { pl: 'Wszelkie prawa zastrzeżone.', en: 'All rights reserved.' },

  // === TRADING PAGE ===
  'trading.hero.badge': { pl: 'Trening Mentalny dla Traderów', en: 'Mental Training for Traders' },
  'trading.hero.title': {
    pl: 'Twój umysł to Twój <em>największy atut</em> na rynku',
    en: 'Your mind is your <em>greatest asset</em> in the market'
  },
  'trading.hero.subtitle': {
    pl: 'Naucz się kontrolować emocje, utrzymywać dyscyplinę i podejmować trafne decyzje pod presją rynku.',
    en: 'Learn to control emotions, maintain discipline, and make accurate decisions under market pressure.'
  },
  'trading.hero.cta1': { pl: 'Umów Sesję', en: 'Book a Session' },
  'trading.hero.cta2': { pl: 'Dowiedz się więcej', en: 'Learn More' },
  'trading.problem.label': { pl: 'Wyzwanie', en: 'The Challenge' },
  'trading.problem.title': { pl: 'Dlaczego traderzy przegrywają z własnymi emocjami', en: 'Why traders lose to their own emotions' },
  'trading.problem.subtitle': { pl: 'Techniczna analiza to dopiero połowa sukcesu. Druga połowa to Twój umysł.', en: 'Technical analysis is only half the battle. The other half is your mind.' },
  'trading.problem.f1.title': { pl: 'Strach przed stratą', en: 'Fear of Loss' },
  'trading.problem.f1.desc': { pl: 'Zamykasz pozycje za wcześnie lub w ogóle nie wchodzisz w trade z obawy przed stratą.', en: 'You close positions too early or don\'t enter trades at all out of fear of loss.' },
  'trading.problem.f2.title': { pl: 'Brak dyscypliny', en: 'Lack of Discipline' },
  'trading.problem.f2.desc': { pl: 'Łamiesz własne zasady, przesuwasz stop-lossy i overtrade\'ujesz po serii strat.', en: 'You break your own rules, move stop-losses, and overtrade after a losing streak.' },
  'trading.problem.f3.title': { pl: 'FOMO i chciwość', en: 'FOMO & Greed' },
  'trading.problem.f3.desc': { pl: 'Wchodzisz w pozycje impulsywnie, gonienie zysków prowadzi do większych strat.', en: 'You enter positions impulsively, chasing gains leads to bigger losses.' },
  'trading.problem.f4.title': { pl: 'Revenge trading', en: 'Revenge Trading' },
  'trading.problem.f4.desc': { pl: 'Po stracie próbujesz natychmiast odrobić, co prowadzi do spirali strat.', en: 'After a loss, you try to immediately recover, leading to a loss spiral.' },
  'trading.problem.f5.title': { pl: 'Paraliż analityczny', en: 'Analysis Paralysis' },
  'trading.problem.f5.desc': { pl: 'Za dużo wskaźników, za dużo informacji — nie potrafisz podjąć decyzji.', en: 'Too many indicators, too much information — you can\'t make a decision.' },
  'trading.problem.f6.title': { pl: 'Wypalenie', en: 'Burnout' },
  'trading.problem.f6.desc': { pl: 'Ciągły stres i presja wyników prowadzą do wyczerpania i porzucenia tradingu.', en: 'Constant stress and performance pressure lead to exhaustion and abandoning trading.' },
  'trading.process.label': { pl: 'Proces', en: 'The Process' },
  'trading.process.title': { pl: 'Jak wygląda współpraca', en: 'How We Work Together' },
  'trading.process.s1.title': { pl: 'Diagnoza', en: 'Assessment' },
  'trading.process.s1.desc': { pl: 'Analizujemy Twój obecny styl tradingu, identyfikujemy mentalne blokady i definiujemy cele.', en: 'We analyze your current trading style, identify mental blocks, and define goals.' },
  'trading.process.s2.title': { pl: 'Plan mentalny', en: 'Mental Plan' },
  'trading.process.s2.desc': { pl: 'Opracowujemy spersonalizowany plan treningu mentalnego dopasowany do Twoich potrzeb.', en: 'We develop a personalized mental training plan tailored to your needs.' },
  'trading.process.s3.title': { pl: 'Implementacja', en: 'Implementation' },
  'trading.process.s3.desc': { pl: 'Wdrażamy techniki mentalne w Twój codzienny trading poprzez regularne sesje i ćwiczenia.', en: 'We implement mental techniques into your daily trading through regular sessions and exercises.' },
  'trading.ebook.label': { pl: 'E-book', en: 'E-book' },
  'trading.ebook.title': { pl: 'Psychologia skutecznego tradingu', en: 'Psychology of Effective Trading' },
  'trading.ebook.desc': { pl: 'Poznaj sprawdzone techniki mentalne, które pomogą Ci utrzymać dyscyplinę i emocjonalną równowagę na rynkach finansowych. Dostępny w języku polskim i angielskim.', en: 'Discover proven mental techniques to help you maintain discipline and emotional balance in financial markets. Available in Polish and English.' },
  'trading.ebook.cta.pl': { pl: 'Kup po polsku', en: 'Buy in Polish' },
  'trading.ebook.cta.en': { pl: 'Kup po angielsku', en: 'Buy in English' },
  'trading.ebook.mockup': { pl: 'E-BOOK', en: 'E-BOOK' },
  'trading.calendar.label': { pl: 'Rezerwacja', en: 'Book a Session' },
  'trading.calendar.title': { pl: 'Umów sesję coachingową', en: 'Schedule a Coaching Session' },
  'trading.calendar.subtitle': { pl: 'Wybierz dogodny termin na sesję mentalną online.', en: 'Choose a convenient time for an online mental session.' },
  'trading.calendar.placeholder.title': { pl: 'Kalendarz rezerwacji', en: 'Booking Calendar' },
  'trading.calendar.placeholder.desc': { pl: 'Tutaj zostanie osadzony system rezerwacji (np. Calendly). Skontaktuj się, aby umówić sesję.', en: 'The booking system will be embedded here (e.g., Calendly). Contact me to schedule a session.' },
  'trading.resources.label': { pl: 'Zasoby', en: 'Resources' },
  'trading.resources.title': { pl: 'Polecane narzędzia i materiały', en: 'Recommended Tools & Resources' },
  'trading.resources.fibnodes': { pl: 'Narzędzia DiNapoli do analizy technicznej', en: 'DiNapoli tools for technical analysis' },
  'trading.resources.akademia': { pl: 'Szkolenia z poziomów DiNapolego', en: 'DiNapoli levels training' },
  'trading.resources.youtube': { pl: 'Materiały wideo i analizy', en: 'Video materials and analyses' },
  'trading.resources.visit': { pl: 'Odwiedź', en: 'Visit' },
  'trading.affirmations.label': { pl: 'Wkrótce', en: 'Coming Soon' },
  'trading.affirmations.title': { pl: 'Afirmacje dla traderów', en: 'Affirmations for Traders' },
  'trading.affirmations.desc': { pl: 'Prowadzone afirmacje zaprojektowane specjalnie dla traderów, pomagające budować mentalną siłę i dyscyplinę. Dostępne wkrótce.', en: 'Guided affirmations designed specifically for traders, helping build mental strength and discipline. Coming soon.' },
  'trading.courses.label': { pl: 'Wkrótce', en: 'Coming Soon' },
  'trading.courses.title': { pl: 'Szkolenia giełdowe', en: 'Trading Courses' },
  'trading.courses.desc': { pl: 'Kompleksowe szkolenia łączące analizę techniczną DiNapoli z treningiem mentalnym. Wkrótce dostępne online.', en: 'Comprehensive courses combining DiNapoli technical analysis with mental training. Coming soon online.' },
  'trading.cta.title': { pl: 'Gotowy na mentalną przewagę?', en: 'Ready for a Mental Edge?' },
  'trading.cta.desc': { pl: 'Umów pierwszą sesję i zacznij tradować z pewnością siebie.', en: 'Book your first session and start trading with confidence.' },
  'trading.cta.btn1': { pl: 'Umów Sesję', en: 'Book a Session' },
  'trading.cta.btn2': { pl: 'Napisz do mnie', en: 'Contact Me' },

  // === ATHLETES PAGE ===
  'athletes.hero.badge': { pl: 'Coaching dla Sportowców', en: 'Athletes Coaching' },
  'athletes.hero.title': { pl: 'Mentalna siła, która daje <em>przewagę</em>', en: 'Mental strength that gives you <em>the edge</em>' },
  'athletes.hero.subtitle': { pl: 'Trening mentalny dla sportowców, którzy chcą rywalizować na najwyższym poziomie i zachować spokój, gdy stawka jest najwyższa.', en: 'Mental training for athletes who want to compete at the highest level and stay calm when the stakes are highest.' },
  'athletes.hero.cta1': { pl: 'Umów Sesję', en: 'Book a Session' },
  'athletes.hero.cta2': { pl: 'Dowiedz się więcej', en: 'Learn More' },
  'athletes.problem.label': { pl: 'Wyzwanie', en: 'The Challenge' },
  'athletes.problem.title': { pl: 'Mentalne bariery w sporcie', en: 'Mental Barriers in Sports' },
  'athletes.problem.subtitle': { pl: 'Talent i trening fizyczny to fundament. Ale to umysł decyduje o tym, kto wygrywa.', en: 'Talent and physical training are the foundation. But the mind determines who wins.' },
  'athletes.problem.f1.title': { pl: 'Presja wyniku', en: 'Performance Pressure' },
  'athletes.problem.f1.desc': { pl: 'Stres przed ważnymi zawodami paraliżuje i nie pozwala pokazać pełnego potencjału.', en: 'Stress before important competitions paralyzes you and prevents showing your full potential.' },
  'athletes.problem.f2.title': { pl: 'Strach przed porażką', en: 'Fear of Failure' },
  'athletes.problem.f2.desc': { pl: 'Obawa przed przegraną sprawia, że grasz zachowawczo zamiast na pełnych obrotach.', en: 'Fear of losing makes you play conservatively instead of at full throttle.' },
  'athletes.problem.f3.title': { pl: 'Brak koncentracji', en: 'Loss of Focus' },
  'athletes.problem.f3.desc': { pl: 'Myśli o wyniku zamiast o procesie — trudno utrzymać skupienie w kluczowych momentach.', en: 'Thinking about results instead of process — hard to maintain focus in key moments.' },
  'athletes.problem.f4.title': { pl: 'Powrót po kontuzji', en: 'Comeback from Injury' },
  'athletes.problem.f4.desc': { pl: 'Mentalny blok po kontuzji nie pozwala wrócić do pełnej dyspozycji.', en: 'Mental block after injury prevents returning to full form.' },
  'athletes.problem.f5.title': { pl: 'Wypalenie sportowe', en: 'Athletic Burnout' },
  'athletes.problem.f5.desc': { pl: 'Ciągła presja, monotonia treningu i brak motywacji prowadzą do wypalenia.', en: 'Constant pressure, training monotony, and lack of motivation lead to burnout.' },
  'athletes.problem.f6.title': { pl: 'Konflikt w drużynie', en: 'Team Conflict' },
  'athletes.problem.f6.desc': { pl: 'Napięcia w zespole wpływają na wyniki indywidualne i zespołowe.', en: 'Team tensions affect both individual and team performance.' },
  'athletes.process.label': { pl: 'Proces', en: 'The Process' },
  'athletes.process.title': { pl: 'Jak wygląda współpraca', en: 'How We Work Together' },
  'athletes.process.s1.title': { pl: 'Analiza', en: 'Analysis' },
  'athletes.process.s1.desc': { pl: 'Oceniamy Twoją obecną formę mentalną, identyfikujemy bariery i definiujemy cele sportowe.', en: 'We assess your current mental form, identify barriers, and define sports goals.' },
  'athletes.process.s2.title': { pl: 'Strategia', en: 'Strategy' },
  'athletes.process.s2.desc': { pl: 'Opracowujemy indywidualną strategię mentalną z wykorzystaniem technik sprawdzonych w profesjonalnym sporcie.', en: 'We develop an individual mental strategy using techniques proven in professional sports.' },
  'athletes.process.s3.title': { pl: 'Trening', en: 'Training' },
  'athletes.process.s3.desc': { pl: 'Regularne sesje i ćwiczenia mentalne stają się częścią Twojego planu treningowego.', en: 'Regular sessions and mental exercises become part of your training plan.' },
  'athletes.bg.label': { pl: 'Doświadczenie', en: 'Background' },
  'athletes.bg.title': { pl: 'Dlaczego mogę Ci pomóc', en: 'Why I Can Help You' },
  'athletes.bg.p1': { pl: 'Jako były zawodnik Rugby Klub Lechia Gdańsk wiem, czym jest rywalizacja, presja i walka o wynik.', en: 'As a former player of Rugby Club Lechia Gdańsk, I know what competition, pressure, and fighting for results mean.' },
  'athletes.bg.p2': { pl: 'Ukończyłem szkolenie trenera mentalnego u Jakuba B. Bączka — trenera mentalnego Roberta Lewandowskiego.', en: 'I completed mental coaching certification under Jakub B. Bączek — the mental coach of Robert Lewandowski.' },
  'athletes.bg.p3': { pl: 'Inspiruję się tym, jak najlepsi zawodnicy na świecie wykorzystują techniki mentalne do osiągania i utrzymywania sukcesów.', en: 'I\'m inspired by how the world\'s best athletes use mental techniques to achieve and maintain success.' },
  'athletes.calendar.label': { pl: 'Rezerwacja', en: 'Book a Session' },
  'athletes.calendar.title': { pl: 'Umów sesję coachingową', en: 'Schedule a Coaching Session' },
  'athletes.calendar.subtitle': { pl: 'Wybierz dogodny termin na sesję mentalną online.', en: 'Choose a convenient time for an online mental session.' },
  'athletes.calendar.placeholder.title': { pl: 'Kalendarz rezerwacji', en: 'Booking Calendar' },
  'athletes.calendar.placeholder.desc': { pl: 'Tutaj zostanie osadzony system rezerwacji (np. Calendly). Skontaktuj się, aby umówić sesję.', en: 'The booking system will be embedded here (e.g., Calendly). Contact me to schedule a session.' },
  'athletes.cta.title': { pl: 'Gotowy na mentalną przewagę?', en: 'Ready for a Mental Edge?' },
  'athletes.cta.desc': { pl: 'Umów pierwszą sesję i zacznij rywalizować z pewnością siebie.', en: 'Book your first session and start competing with confidence.' },
  'athletes.cta.btn1': { pl: 'Umów Sesję', en: 'Book a Session' },
  'athletes.cta.btn2': { pl: 'Napisz do mnie', en: 'Contact Me' },

  // === OFERTA PAGE ===
  'oferta.hero.label': { pl: 'Oferta', en: 'Offer' },
  'oferta.hero.title': { pl: 'Wybierz swoją <em>ścieżkę rozwoju</em>', en: 'Choose your <em>growth path</em>' },
  'oferta.hero.subtitle': {
    pl: 'Indywidualnie dopasowane pakiety treningu mentalnego dla traderów i sportowców. Zainwestuj w swoją mentalną przewagę.',
    en: 'Individually tailored mental training packages for traders and athletes. Invest in your mental edge.'
  },
  'oferta.trading.title': { pl: 'Trening Mentalny dla Traderów', en: 'Mental Training for Traders' },
  'oferta.trading.subtitle': {
    pl: 'Opanuj emocje, utrzymaj dyscyplinę i podejmuj trafne decyzje pod presją rynku.',
    en: 'Master your emotions, maintain discipline, and make accurate decisions under market pressure.'
  },
  'oferta.trading.s1.title': { pl: 'Sesja Pojedyncza', en: 'Single Session' },
  'oferta.trading.s1.desc': {
    pl: 'Jednorazowa sesja coachingowa online. Idealna na start lub gdy potrzebujesz wsparcia w konkretnej sytuacji rynkowej.',
    en: 'One-time online coaching session. Ideal for starting out or when you need support in a specific market situation.'
  },
  'oferta.trading.s1.f1': { pl: '60 minut sesji online', en: '60-minute online session' },
  'oferta.trading.s1.f2': { pl: 'Diagnoza mentalnych blokad', en: 'Mental blocks assessment' },
  'oferta.trading.s1.f3': { pl: 'Techniki do natychmiastowego wdrożenia', en: 'Techniques for immediate implementation' },
  'oferta.trading.s1.f4': { pl: 'Podsumowanie i plan działania', en: 'Summary and action plan' },
  'oferta.badge.popular': { pl: 'Najpopularniejsze', en: 'Most Popular' },
  'oferta.trading.s2.title': { pl: 'Pakiet Mentalny', en: 'Mental Package' },
  'oferta.trading.s2.desc': {
    pl: 'Kompleksowy program mentalny dopasowany do Twojego stylu tradingu. Regularne sesje i wsparcie między spotkaniami.',
    en: 'Comprehensive mental program tailored to your trading style. Regular sessions and support between meetings.'
  },
  'oferta.trading.s2.f1': { pl: '4 sesje online (60 min każda)', en: '4 online sessions (60 min each)' },
  'oferta.trading.s2.f2': { pl: 'Spersonalizowany plan mentalny', en: 'Personalized mental plan' },
  'oferta.trading.s2.f3': { pl: 'Ćwiczenia i techniki między sesjami', en: 'Exercises and techniques between sessions' },
  'oferta.trading.s2.f4': { pl: 'Wsparcie mailowe między sesjami', en: 'Email support between sessions' },
  'oferta.trading.s2.f5': { pl: 'Analiza dziennika tradingowego', en: 'Trading journal analysis' },
  'oferta.trading.s3.title': { pl: 'E-book: Psychologia Tradingu', en: 'E-book: Trading Psychology' },
  'oferta.trading.s3.desc': {
    pl: 'Sprawdzone techniki mentalne w formie e-booka. Dostępny w języku polskim i angielskim.',
    en: 'Proven mental techniques in e-book form. Available in Polish and English.'
  },
  'oferta.trading.s3.f1': { pl: 'Techniki zarządzania emocjami', en: 'Emotion management techniques' },
  'oferta.trading.s3.f2': { pl: 'Budowanie dyscypliny tradingowej', en: 'Building trading discipline' },
  'oferta.trading.s3.f3': { pl: 'Ćwiczenia praktyczne', en: 'Practical exercises' },
  'oferta.trading.s3.f4': { pl: 'Dostępny w PL i EN', en: 'Available in PL and EN' },
  'oferta.sport.title': { pl: 'Trening Mentalny dla Sportowców', en: 'Mental Training for Athletes' },
  'oferta.sport.subtitle': {
    pl: 'Rozwijaj siłę mentalną potrzebną do rywalizacji na najwyższym poziomie.',
    en: 'Develop the mental strength needed to compete at the highest level.'
  },
  'oferta.sport.s1.title': { pl: 'Sesja Pojedyncza', en: 'Single Session' },
  'oferta.sport.s1.desc': {
    pl: 'Jednorazowa sesja mentalnego coachingu. Wsparcie przed ważnymi zawodami lub w trudnym momencie kariery.',
    en: 'One-time mental coaching session. Support before important competitions or during difficult career moments.'
  },
  'oferta.sport.s1.f1': { pl: '60 minut sesji online', en: '60-minute online session' },
  'oferta.sport.s1.f2': { pl: 'Analiza mentalnych barier', en: 'Mental barriers analysis' },
  'oferta.sport.s1.f3': { pl: 'Techniki radzenia sobie z presją', en: 'Pressure management techniques' },
  'oferta.sport.s1.f4': { pl: 'Plan działania po sesji', en: 'Post-session action plan' },
  'oferta.sport.s2.title': { pl: 'Pakiet Sportowy', en: 'Sports Package' },
  'oferta.sport.s2.desc': {
    pl: 'Kompleksowy program mentalny dla sportowców. Regularny trening mentalny jako element Twojego planu treningowego.',
    en: 'Comprehensive mental program for athletes. Regular mental training as part of your training plan.'
  },
  'oferta.sport.s2.f1': { pl: '4 sesje online (60 min każda)', en: '4 online sessions (60 min each)' },
  'oferta.sport.s2.f2': { pl: 'Indywidualna strategia mentalna', en: 'Individual mental strategy' },
  'oferta.sport.s2.f3': { pl: 'Ćwiczenia wizualizacji i koncentracji', en: 'Visualization and focus exercises' },
  'oferta.sport.s2.f4': { pl: 'Wsparcie między sesjami', en: 'Support between sessions' },
  'oferta.sport.s2.f5': { pl: 'Techniki przed-startowe', en: 'Pre-competition techniques' },
  'oferta.sport.s3.title': { pl: 'Coaching Drużynowy', en: 'Team Coaching' },
  'oferta.sport.s3.desc': {
    pl: 'Trening mentalny dla całego zespołu. Budowanie spójności, komunikacji i mentalnej odporności grupy.',
    en: 'Mental training for the entire team. Building cohesion, communication, and group mental resilience.'
  },
  'oferta.sport.s3.f1': { pl: 'Sesje grupowe dla drużyny', en: 'Group sessions for the team' },
  'oferta.sport.s3.f2': { pl: 'Budowanie dynamiki zespołu', en: 'Building team dynamics' },
  'oferta.sport.s3.f3': { pl: 'Techniki komunikacji sportowej', en: 'Sports communication techniques' },
  'oferta.sport.s3.f4': { pl: 'Program dopasowany do sezonu', en: 'Program tailored to the season' },
  'oferta.cta.book': { pl: 'Umów sesję', en: 'Book a Session' },
  'oferta.cta.ebook': { pl: 'Zobacz e-book', en: 'View E-book' },
  'oferta.cta.contact': { pl: 'Skontaktuj się', en: 'Get in Touch' },
  'oferta.cta.title': { pl: 'Nie wiesz, co wybrać?', en: 'Not sure what to choose?' },
  'oferta.cta.desc': { pl: 'Napisz do mnie — pomogę dobrać najlepszą opcję dopasowaną do Twoich potrzeb.', en: 'Write to me — I\'ll help you find the best option for your needs.' },
  'oferta.cta.btn1': { pl: 'Napisz do mnie', en: 'Contact Me' },
  'oferta.cta.btn2': { pl: 'Poznaj mnie', en: 'About Me' },
};

// ---- Language System ----
let currentLang = localStorage.getItem('besler-lang') || 'pl';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('besler-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[key][lang];
      } else {
        el.innerHTML = translations[key][lang];
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;

  // Re-render dynamically loaded events in the new language
  var eventsContainer = document.getElementById('events-list');
  if (eventsContainer) {
    var cached = sessionStorage.getItem('besler-events-cache');
    if (cached) {
      renderEvents(JSON.parse(cached), eventsContainer);
    }
  }
}

// ---- Mobile Navigation ----
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ---- Navbar Scroll Effect ----
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ---- Scroll Animations (fade-up) ----
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ---- Newsletter Form ----
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();
    if (email && email.includes('@')) {
      const successKey = 'newsletter.success';
      const msg = translations[successKey] ? translations[successKey][currentLang] : 'Thank you!';
      form.innerHTML = `<p style="color: var(--gold); font-size: 1.1rem; font-weight: 600;">${msg}</p>`;
    }
  });
}

// ---- Smooth Scroll for Anchor Links ----
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ---- Language Toggle Event Listeners ----
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// ============================================
// NEW COMPONENT INTERACTIONS
// ============================================

// ---- Orbital Timeline ----
function initOrbitalTimeline() {
  const viewport = document.getElementById('orbital-timeline');
  if (!viewport) return;

  const nodes = viewport.querySelectorAll('.orbital-node');
  const total = nodes.length;
  let rotationAngle = 0;
  let autoRotate = true;
  let activeNode = null;

  // Responsive radius
  function getRadius() {
    if (window.innerWidth <= 480) return 110;
    if (window.innerWidth <= 768) return 140;
    return 200;
  }

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function updatePositions() {
    if (isMobile()) {
      // On mobile, CSS handles the vertical timeline layout
      nodes.forEach((node) => {
        node.style.transform = '';
        node.style.zIndex = '';
        node.style.opacity = '';
      });
      return;
    }
    const radius = getRadius();
    nodes.forEach((node, index) => {
      const angle = ((index / total) * 360 + rotationAngle) % 360;
      const radian = (angle * Math.PI) / 180;
      const x = radius * Math.cos(radian);
      const y = radius * Math.sin(radian);
      const zIndex = Math.round(100 + 50 * Math.cos(radian));
      const opacity = node.classList.contains('expanded')
        ? 1
        : Math.max(0.35, 0.35 + 0.65 * ((1 + Math.sin(radian)) / 2));

      node.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      node.style.zIndex = node.classList.contains('expanded') ? 200 : zIndex;
      node.style.opacity = opacity;
    });
  }

  function centerOnNode(index) {
    const targetAngle = (index / total) * 360;
    rotationAngle = 270 - targetAngle;
    updatePositions();
  }

  function toggleNode(index) {
    const node = nodes[index];
    const wasExpanded = node.classList.contains('expanded');

    // Close all
    nodes.forEach(n => n.classList.remove('expanded'));

    if (!wasExpanded) {
      node.classList.add('expanded');
      activeNode = index;
      autoRotate = false;
      centerOnNode(index);
    } else {
      activeNode = null;
      autoRotate = true;
    }
  }

  // Click handlers
  nodes.forEach((node, index) => {
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNode(index);
    });
  });

  // Click outside to close
  viewport.addEventListener('click', (e) => {
    if (e.target === viewport || e.target.classList.contains('orbital-ring')) {
      nodes.forEach(n => n.classList.remove('expanded'));
      activeNode = null;
      autoRotate = true;
    }
  });

  // Auto-rotation (desktop only)
  setInterval(() => {
    if (autoRotate && !isMobile()) {
      rotationAngle = (rotationAngle + 0.3) % 360;
      updatePositions();
    }
  }, 50);

  // Initial position
  updatePositions();

  // Update on resize
  window.addEventListener('resize', updatePositions);
}

// ---- Container Scroll (3D Card) ----
function initContainerScroll() {
  const section = document.querySelector('.scroll-section');
  const card = document.getElementById('scroll-card');
  if (!section || !card) return;

  function update() {
    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrolled = -rect.top;
    const total = sectionHeight - viewportHeight;
    const progress = Math.max(0, Math.min(1, scrolled / total));

    const rotateX = 20 * (1 - progress);
    const isMobile = window.innerWidth <= 768;
    const scaleStart = isMobile ? 0.7 : 1.05;
    const scaleEnd = isMobile ? 0.9 : 1;
    const scale = scaleStart + (scaleEnd - scaleStart) * progress;
    const translateY = -100 * progress;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) scale(${scale})`;
  }

  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  update();
}

// ---- Zoom Parallax ----
function initZoomParallax() {
  const container = document.querySelector('.zoom-parallax-container');
  if (!container) return;

  const items = Array.from(container.querySelectorAll('.zp-item'));
  const scaleTargets = [4, 5, 6, 5, 6, 8, 9];

  function update() {
    const rect = container.getBoundingClientRect();
    const total = container.offsetHeight - window.innerHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / total));

    items.forEach((item, i) => {
      if (!item) return;
      const target = scaleTargets[i % scaleTargets.length];
      const scale = 1 + progress * (target - 1);
      item.style.transform = 'scale(' + scale + ')';
    });
  }

  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  update();
}

// ---- Events Calendar (Google Calendar API) ----
function initEventsCalendar() {
  const container = document.getElementById('events-list');
  if (!container) return;

  const cacheKey = 'besler-events-cache';
  const cacheTimeKey = 'besler-events-cache-time';

  // Check sessionStorage cache
  const cached = sessionStorage.getItem(cacheKey);
  const cachedTime = sessionStorage.getItem(cacheTimeKey);
  if (cached && cachedTime && (Date.now() - parseInt(cachedTime)) < CALENDAR_CONFIG.cacheDurationMs) {
    renderEvents(JSON.parse(cached), container);
    return;
  }

  // Fetch from Google Calendar API
  const now = new Date().toISOString();
  const url = 'https://www.googleapis.com/calendar/v3/calendars/'
    + encodeURIComponent(CALENDAR_CONFIG.eventsCalendarId)
    + '/events?key=' + CALENDAR_CONFIG.apiKey
    + '&timeMin=' + now
    + '&maxResults=' + CALENDAR_CONFIG.maxEvents
    + '&singleEvents=true&orderBy=startTime';

  fetch(url)
    .then(function(res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function(data) {
      var events = (data.items || []).map(function(item) {
        return {
          title: item.summary || '',
          description: item.description || '',
          location: item.location || '',
          start: (item.start && (item.start.dateTime || item.start.date)) || '',
          end: (item.end && (item.end.dateTime || item.end.date)) || '',
          htmlLink: item.htmlLink || ''
        };
      });

      sessionStorage.setItem(cacheKey, JSON.stringify(events));
      sessionStorage.setItem(cacheTimeKey, Date.now().toString());
      renderEvents(events, container);
    })
    .catch(function(err) {
      console.error('Events fetch error:', err);
      var msg = (translations['events.error'] && translations['events.error'][currentLang]) || 'Failed to load events.';
      container.innerHTML = '<div class="events-placeholder">' + msg + '</div>';
    });
}

function renderEvents(events, container) {
  if (!events.length) {
    var msg = (translations['events.empty'] && translations['events.empty'][currentLang])
      || 'No upcoming events.';
    container.innerHTML = '<div class="events-placeholder">' + msg + '</div>';
    return;
  }

  var monthNamesPl = ['STY','LUT','MAR','KWI','MAJ','CZE','LIP','SIE','WRZ','PAŹ','LIS','GRU'];
  var monthNamesEn = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

  container.innerHTML = events.map(function(ev) {
    var date = new Date(ev.start);
    var months = currentLang === 'pl' ? monthNamesPl : monthNamesEn;
    var month = months[date.getMonth()];
    var day = date.getDate();
    var time = date.toLocaleTimeString(currentLang === 'pl' ? 'pl-PL' : 'en-US', {
      hour: '2-digit', minute: '2-digit'
    });

    var meta = '<span class="event-time">' + time + '</span>';
    if (ev.location) {
      meta += '<span class="event-location">' + ev.location + '</span>';
    }

    return '<a href="' + ev.htmlLink + '" target="_blank" rel="noopener" class="event-item">'
      + '<div class="event-date">'
      + '<div class="month">' + month + '</div>'
      + '<div class="day">' + day + '</div>'
      + '</div>'
      + '<div class="event-info">'
      + '<h4>' + ev.title + '</h4>'
      + '<p>' + meta + '</p>'
      + '</div>'
      + '</a>';
  }).join('');
}

// ---- Booking Calendar (Google Appointment Scheduling) ----
function initBookingCalendar() {
  var wrapper = document.getElementById('booking-calendar');
  if (!wrapper) return;

  var iframe = wrapper.querySelector('.calendar-embed-iframe');
  var loading = wrapper.querySelector('.calendar-loading');
  var fallback = wrapper.querySelector('.calendar-fallback');
  var headerLink = wrapper.querySelector('.calendar-header-external');
  // Direct CTA lives as a sibling of the wrapper inside the section container
  var section = wrapper.closest('.section');
  var directLink = section ? section.querySelector('.calendar-direct-link') : null;

  if (!CALENDAR_CONFIG.appointmentUrl || CALENDAR_CONFIG.appointmentUrl.indexOf('YOUR_') !== -1) {
    if (loading) {
      var msg = (translations['calendar.fallback'] && translations['calendar.fallback'][currentLang]) || 'Contact me to book.';
      loading.textContent = msg;
      loading.classList.add('calendar-not-configured');
    }
    if (iframe) iframe.style.display = 'none';
    return;
  }

  // Point all external links at the booking URL
  if (headerLink) headerLink.href = CALENDAR_CONFIG.appointmentUrl;
  if (directLink) directLink.href = CALENDAR_CONFIG.appointmentUrl;
  if (fallback) fallback.href = CALENDAR_CONFIG.appointmentUrl;

  // Google Appointment Scheduling (calendar.app.google / calendar.google.com)
  // refuses iframe embedding via X-Frame-Options / CSP frame-ancestors.
  // Skip the iframe and surface the booking CTA inline instead.
  var url = CALENDAR_CONFIG.appointmentUrl;
  var blocksEmbedding = /(^https?:\/\/)?(calendar\.app\.google|calendar\.google\.com)/i.test(url);

  if (blocksEmbedding) {
    if (iframe) iframe.style.display = 'none';
    if (loading) loading.style.display = 'none';
    if (fallback) fallback.style.display = 'inline-flex';
    return;
  }

  iframe.src = url;

  iframe.addEventListener('load', function() {
    if (loading) loading.style.display = 'none';
    iframe.classList.add('loaded');
  });

  setTimeout(function() {
    if (!iframe.classList.contains('loaded')) {
      if (loading) loading.style.display = 'none';
      iframe.style.display = 'none';
      if (fallback) fallback.style.display = 'inline-flex';
    }
  }, 10000);
}

// ---- Initialize Everything ----
document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  setLanguage(currentLang);
  initMobileNav();
  initNavbarScroll();
  initScrollAnimations();
  initNewsletter();
  initSmoothScroll();

  // Calendar integrations
  initEventsCalendar();
  initBookingCalendar();

  // New component initializers
  initOrbitalTimeline();
  initContainerScroll();
  initZoomParallax();
});
