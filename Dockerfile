# Utiliser une image Node.js LTS en tant qu'image de base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 4200 pour le serveur de développement Angular
EXPOSE 4200

# Commande pour démarrer l'application Angular
CMD ["ng", "serve"]