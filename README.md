# Mini CRM Front-End (Next.js)

Bienvenue ! Ce projet est une implémentation front-end d’un mini CRM développé avec *Next.js*. Il a été réalisé dans le cadre d’un challenge technique afin de démontrer des compétences en Next.js, design UI, gestion d’état et structuration de projet.

## Objectif

Créer une interface CRM destinée à une équipe commerciale interne. L’application permet aux utilisateurs de :

- Consulter une liste de clients  
- Accéder aux fiches détaillées de chaque client  
- Ajouter un nouveau client via un formulaire  

Toutes les données sont *mockées* (aucune connexion à une API ou base de données).

## Fonctionnalités

### Page de Connexion (Mockée)
- Écran statique de connexion  
  test@gmail.com / 123456  
- Aucune authentification réelle  
- Design propre et responsive

### Tableau de Bord
- Navigation latérale (Dashboard, Clients, Profile)  

### Liste des Clients
- Affichage des clients sous forme de tableau (données mockées via faker.js)  
- Colonnes : Nom, Email, Téléphone, Date de création  
- Tri par nom  
- Recherche par nom

### Détail d’un Client
- Ouverture au clic sur une ligne du tableau  
- Affichage des détails complets du client  
- Historique simulé
- Utilisateurs similaires

### Formulaire d’Ajout de Client
- Construit avec React Hook Form  
- Champs obligatoires : Nom, Prénom, Email, Téléphone  
- Validations simples (format de l’email, numéro de téléphone)  
- Affichage d’un message de succès après soumission

## Stack Technique

- *Framework :* Next.js 15.3.4 
- *UI :* Tailwind CSS  
- *Gestion des formulaires :* React Hook Form  
- *Mocking :* Faker.js
- *Langage :* TypeScript

## Fonctionnalités Bonus

- Pagination 
- Responsivité mobile  
- Zustand pour la gestion d’état

## 📦 Démarrage

```bash
# 1. Cloner le dépôt
git clone https://github.com/nihadben1/AriMayi.git
cd exercice

# 2. Installer les dépendances
npm install

# 3. Lancer l’application
npm run dev