# 🍔 Burger Shop - Prototipo Web para Hostelería

¡Bienvenido al repositorio de **Burger Shop**! Este proyecto es un prototipo interactivo de sitio web diseñado específicamente para el sector de la hostelería y restauración, enfocado en una hamburguesería moderna. 

El objetivo principal de este desarrollo es ofrecer una experiencia de usuario (UX) fluida, intuitiva y visualmente atractiva, simulando el proceso de exploración de menús, perfiles de usuario, gestión de carritos y seguimiento de pedidos.

🌐 **Demo en vivo:** [Visitar Burger Shop](https://andreina14-hub.github.io/burger_shop/)

---

## 🚀 Características Principales

- **Diseño Responsive Optimizado:** Totalmente adaptado para dispositivos móviles, tablets y ordenadores de escritorio, garantizando una visualización correcta en cualquier pantalla (medidas móviles ajustadas).
- **Flujo Completo de Hostelería:** Simulación de secciones críticas como inicio (`home`), información (`about`), contacto (`contact`), inicio de sesión (`login`), perfil de usuario (`profile`) y pedidos (`myOrders`).
- **Sistema de Carrito de Compras (Simulado):** Interacción integrada para añadir productos, gestionar cantidades y visualizar el total del pedido en tiempo real.
- **Soporte Multiidioma:** Preparado para la localización e internacionalización de la plataforma gracias a su estructura de lenguaje dedicada.
- **Enrutamiento Estable:** Navegación interna limpia utilizando estrategias de enrutamiento del lado del cliente (`HashRouter`) para evitar recargas innecesarias y asegurar la compatibilidad con GitHub Pages.

---

## 🛠️ Tecnologías y Recursos Utilizados

Para el desarrollo de este prototipo se han empleado herramientas y estándares modernos de la industria web:

### Tecnologías Core
* **React.js:** Librería de JavaScript utilizada para construir la interfaz de usuario basada en componentes reutilizables y la gestión del estado de la aplicación.
* **React Router:** Implementado para gestionar la navegación asíncrona entre las distintas secciones de la web de manera fluida.
* **HTML5 & CSS3 / SCSS:** Estructuración semántica y estilos modulares organizados para lograr un acabado profesional y dinámico.
* **JavaScript (ES6+):** Lógica interactiva del negocio, manejo de eventos y renderizado dinámico de vistas.

### Recursos Visuales
* **Fuentes (Google Fonts):** Combinación tipográfica seleccionada para reforzar la identidad corporativa y la legibilidad del menú.
* **Iconografía:** Iconos vectoriales limpios y legibles para el carrito de compras, el perfil de usuario y los elementos interactivos del menú.
* **Imágenes de Alta Resolución:** Recursos visuales optimizados para web con el fin de garantizar tiempos de carga rápidos sin perder calidad visual.

---

## 📂 Estructura del Proyecto

La arquitectura del código fuente está organizada meticulosamente de manera modular dentro de la carpeta `src`:

```bash
src/
├── assets/                 # Recursos estáticos locales (imágenes, logos, etc.)
├── components/             # Módulos y componentes funcionales de la app
│   ├── about/              # Sección de información sobre el negocio
│   ├── cart/               # Vista y lógica del carrito de compras
│   ├── contact/            # Formulario y datos de contacto
│   ├── home/               # Página de inicio y destacados
│   ├── layout/             # Componentes estructurales globales (Navbar, Footer, etc.)
│   ├── login/              # Formulario de inicio de sesión de usuario
│   ├── myOrders/           # Panel de seguimiento de pedidos del cliente
│   ├── notFound404/        # Vista personalizada para rutas no existentes
│   └── profile/            # Perfil de usuario y datos de cuenta
├── lang/                   # Archivos y configuración para soporte multiidioma
├── styles/                 # Hojas de estilo y configuraciones de diseño (CSS / SCSS)
├── App.js                  # Componente raíz y configuración de rutas (HashRouter)
└── index.js                # Punto de entrada de la aplicación React
