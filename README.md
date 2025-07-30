# Portfolio - LOVASOA Heriniaina Olivier

## 🚀 Développeur Full Stack Créatif

Portfolio professionnel présentant mes compétences, projets et expériences en développement web.

## ✨ Fonctionnalités

- **Design moderne** avec thème sombre et gradients violets
- **Animations fluides** avec Framer Motion
- **Section "À propos"** avec statistiques personnelles
- **Projets détaillés** avec modal interactif
- **Compétences avec barres de progression** 
- **Formulaire de contact fonctionnel** avec validation
- **Navigation intelligente** avec détection de section active
- **Responsive design** optimisé mobile/desktop
- **SEO optimisé** avec métadonnées complètes

## 🛠️ Technologies utilisées

### Frontend
- **React 18.3.1** - Framework principal
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes

### Outils de développement
- **Vite/React Scripts** - Build tool
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Compatibilité navigateurs

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/          # Composants de mise en page
│   │   ├── Navbar.jsx   # Navigation principale
│   │   └── Footer.jsx   # Pied de page
│   ├── sections/        # Sections principales
│   │   ├── Hero.jsx     # Section d'accueil
│   │   ├── About.jsx    # Section à propos
│   │   ├── Projects.jsx # Section projets
│   │   ├── Skills.jsx   # Section compétences
│   │   └── Contact.jsx  # Section contact
│   └── ui/             # Composants réutilisables
│       ├── ProjectCard.jsx
│       ├── ProjectModal.jsx
│       ├── SkillCard.jsx
│       └── ScrollToTop.jsx
├── data/               # Données statiques
│   └── projects.js     # Liste des projets
├── hooks/              # Hooks personnalisés
│   └── useScroll.js    # Gestion du scroll
├── services/           # Services externes
│   └── emailService.js # Service d'envoi d'emails
└── assets/             # Ressources (images)
```

## 🚀 Installation et démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/mon-portfolio.git
cd mon-portfolio
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur de développement**
```bash
npm start
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📧 Configuration EmailJS

Pour activer l'envoi d'emails via le formulaire de contact :

1. **Installer EmailJS**
```bash
npm install @emailjs/browser
```

2. **Configurer les clés dans `src/services/emailService.js`**
```javascript
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID', 
  publicKey: 'YOUR_PUBLIC_KEY',
};
```

3. **Créer un compte sur [EmailJS](https://www.emailjs.com/)**

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans Tailwind CSS :
- **Violet** : `#4c1d95` (primary)
- **Fuchsia** : `#c026d3` (accent)
- **Gris sombre** : `#111827` (background)

### Contenu
- **Projets** : Modifier `src/data/projects.js`
- **Compétences** : Modifier `src/components/sections/Skills.jsx`
- **Informations personnelles** : Modifier les sections Hero et About

## 📱 Responsive Design

Le portfolio est optimisé pour :
- **Mobile** : 320px - 768px
- **Tablet** : 768px - 1024px  
- **Desktop** : 1024px+

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploader le dossier build/
```

### GitHub Pages
```bash
npm run build
# Configurer GitHub Pages avec le dossier build/
```

## 📊 Performance

- **Lighthouse Score** : 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s

## 🔧 Scripts disponibles

```bash
npm start          # Démarre le serveur de développement
npm run build      # Crée une version de production
npm run test       # Lance les tests
npm run eject      # Éjecte la configuration (irréversible)
```

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Contact

- **Email** : oliviergiovani00@gmail.com
- **LinkedIn** : [Votre profil LinkedIn]
- **GitHub** : [Votre profil GitHub]

---

**Développé avec ❤️ par LOVASOA Heriniaina Olivier**
