import BioSection from "@/components/BioSection";
import ExperienceCard from "@/components/ExperienceCard";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const experiences = [
    {
      title: "Stagiaire en ingénierie logicielle",
      company: "SQLI",
      period: "Mar 2025 – Aout 2025",
      description:
        'Lors de mon stage de fin d’études de six mois en tant que ingénieure logicielle chez SQLI, ma première expérience professionnelle, j’ai travaillé sur le développement front-end des sites web d’un grand client du secteur de l’électroménager dans le monde "SEB". L’un des plus gros défis a été de m’intégrer rapidement et d’apprendre les outils et méthodes de l’entreprise. J’ai participé à la création et la modification de composants ainsi qu’à la résolution d’anomalies, renforçant mes compétences en Angular, Git et méthodologies agiles (Scrum), tout en développant mon adaptabilité, ma rapidité d’apprentissage et ma collaboration au sein d’une équipe internationale.',
      technologies: [
        "Angular",
        "Spartacus",
        "Git",
        "Scrum",
        "TypeScript",
        "Storybook",
      ],
      images: ["/sqli-logo.jpg"],
    },

    {
      title: "Plateforme de défis de codage",
      company: "Projet Academique",
      period: "Nov 2023 – Mai 2024",
      description:
        "Au sein d’une équipe Agile, j’ai participé au développement de Coding Challenge Platform, une application web inspirée de LeetCode permettant aux utilisateurs de créer et résoudre des exercices de programmation avec validation en temps réel. Le principal défi a été de concevoir une architecture performante et sécurisée capable de supporter un grand nombre d’utilisateurs. Mon objectif était de contribuer à toutes les étapes du projet : analyse des besoins, conception du système, développement des fonctionnalités clés et intégration des mécanismes de sécurité (2FA, protection DDoS). Ces actions ont permis de livrer une plateforme complète et scalable, renforçant mes compétences techniques en Next.js, Golang, ScyllaDB et Docker, ainsi que ma capacité à collaborer efficacement au sein d’une équipe.",
      technologies: [
        "Next.js",
        "Golang",
        "ScyllaDB",
        "Docker",
        "2FA",
        "Kafka",
        "Elasticsearch",
      ],
      images: ["/ccp1.jpg", "/ccp2.jpg", "/ccp3.jpg", "/ccp4.jpg"],
    },
    {
      title: "Plateforme SaaS de Gestion de Supermarché",
      company: "Projet FreeLance",
      period: "Mai 2025 – Juil 2025",
      description:
        "Au sein d’une équipe Agile, j’ai participé au développement d’une plateforme SaaS de gestion de magasin, offrant des fonctionnalités complètes pour la gestion des stocks, des achats et le suivi des performances via des tableaux de bord interactifs. Le principal défi a été de concevoir une solution robuste et évolutive capable de fournir un suivi en temps réel des ventes, marges et opérations logistiques. Mon objectif était de contribuer à la définition de l’architecture technique, au développement des modules essentiels (gestion des stocks, analyse des données, lecture de codes-barres) et à l’exposition d’API REST pour l’intégration du système. Ces actions ont permis de livrer une solution complète et performante, renforçant mes compétences en Angular, .NET et SQL Server, tout en améliorant ma capacité à travailler efficacement en équipe sur un projet complexe.",
      technologies: ["Angular", ".NET", "SQL Server", "REST API", "Tailwind"],
      images: [
        "/saas2.png",
        "/saas1.png",
        "/saas3.png",
        "/saas4.png",
        "/saas5.png",
        "/saas6.png",
      ],
    },
    {
      title: "Système de Surveillance d'entrepôt Intelligent (IoT)",
      company: "Projet Academique",
      period: "Oct 2024 – Déc 2024",
      description:
        "Avec un autre membre de l’équipe, j’ai participé à la conception d’un système IoT pour la supervision d’entrepôt, permettant de surveiller en continu la température et l’humidité afin d’optimiser les conditions de stockage. Le principal défi a été de connecter les capteurs physiques à une plateforme web capable de collecter, analyser et afficher les données en temps réel. Mon objectif était de programmer les capteurs avec Arduino, développer un tableau de bord interactif avec Vue.js et intégrer des notifications automatiques via Gmail, WhatsApp et Telegram pour les incidents critiques. Ces actions ont abouti à une solution complète combinant IoT, web et automatisation, renforçant mes compétences en Arduino, C++, Vue.js et intégration d’API, tout en améliorant ma collaboration et la gestion de projet technique.",
      technologies: [
        "Arduino",
        "ReactJs",
        "Django",
        "DHT11",
        "MQTT",
        "Reverse Proxy",
        "Sqlite",
      ],
      images: [
        "iot (2).png",
        "iot (3).png",
        "iot (4).png",
        "iot (5).png",
        "iot (6).png",
        "iot (7).png",
        "iot (8).png",
        "iot (1).png",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <BioSection />

      <section className="py-16 px-4" id="experience">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Experience & Projects
          </h2>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="flex justify-center">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
