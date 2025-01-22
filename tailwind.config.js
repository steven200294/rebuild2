/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Dossier par défaut
    './REBUILD/**/*.{html,js,jsx,ts,tsx}', // Inclure le dossier REBUILD
  ],
  theme: {
    extend: {
    
      // Ajout de breakpoints personnalisés
      screens: {
     
        'xs': '395px',          // Très petit écran
        'sm': '640px',          // Petit écran (standard Tailwind)
        'sm-large': '700px',    // Nouveau : plus grand petit écran
        'md': '768px',   
        'lg-small': '900px',        // Écran moyen (standard Tailwind)
        'lg': '1024px',         // Grand écran (standard Tailwind)
        'lg-large': '1200px',   // Nouveau : grand écran élargi
    
        'xl': '1280px',         // Très grand écran (standard Tailwind)
        '2xl': '1536px',        // Breakpoint additionnel (standard Tailwind)
        '3xl': '1920px',        // Nouveau : écran 1080p et au-delà
        '4xl': '2600px',        // Nouveau : écran ultra-large
      },
      // Animation "wave" personnalisée
      keyframes: {
        wave: {
          '0%': { boxShadow: '0 0 0 0 rgba(128, 0, 128, 0.7)' },
          '100%': { boxShadow: '0 0 0 50px rgba(128, 0, 128, 0)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
    },
  },
  plugins: [],
}

