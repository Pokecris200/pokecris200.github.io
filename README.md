# Portafolio — Cristian Forero

Portafolio profesional para **Cristian Forero**, Desarrollador Unity, Game Programmer e Ingeniero de Sistemas.

- **URL de producción**: [https://pokecris200.github.io/](https://pokecris200.github.io/)
- **Prototipo de referencia**: [Framer Prototype](https://nuanced-background-656972-a3195f167.framer.app/#portafolio)

---

## 🛠️ Stack Tecnológico

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Empaquetador**: [Vite](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Motion (Framer Motion)](https://motion.dev/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Despliegue**: [GitHub Pages](https://pages.github.com/) con **GitHub Actions** CI/CD

---

## 🚀 Desarrollo local

Para ejecutar el proyecto en tu máquina local:

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar la compilación de producción
npm run preview
```

---

## 📂 Estructura del proyecto

```text
├── public/                     # Assets estáticos (favicon, CV, imágenes)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Menú de navegación flotante con glassmorphism
│   │   ├── Hero.tsx            # Sección principal de bienvenida
│   │   ├── ComingSoonCircle.tsx# Animación interactiva del arte en desarrollo
│   │   ├── Portfolio.tsx       # Filtro interactivo de proyectos por categorías
│   │   ├── ProjectCard.tsx     # Tarjetas de proyectos con enlaces
│   │   ├── About.tsx           # Bio, foto provisional y matriz de habilidades
│   │   └── Footer.tsx          # Pie de página y scroll al inicio
│   ├── context/
│   │   └── LanguageContext.tsx # Soporte bilingüe ES / EN
│   ├── data/
│   │   ├── projects.ts         # Catálogo editable de proyectos
│   │   └── skills.ts           # Matriz editable de habilidades
│   ├── App.tsx
│   ├── index.css               # Estilos globales y tokens de diseño
│   └── main.tsx
└── .github/workflows/deploy.yml # Pipeline de despliegue automático a GitHub Pages
```

---

## 🌐 Despliegue en GitHub Pages

El repositorio incluye un workflow automatizado en `.github/workflows/deploy.yml`.

Para activarlo en GitHub:
1. Ve a tu repositorio en GitHub: `https://github.com/pokecris200/pokecris200.github.io`
2. Entra a **Settings** > **Pages**
3. En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
4. Cada vez que hagas `git push` a la rama `main`, la página se compilará y se publicará automáticamente en [https://pokecris200.github.io/](https://pokecris200.github.io/).
