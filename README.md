# ScanSheCan - Inspiring Women Through QR Codes

A modern web application that celebrates inspiring women throughout history with scannable QR codes. Discover stories of courage, innovation, and achievement from female heroes across different regions and interests.

## 🌟 Features

- **Comprehensive Hero Database**: Explore hundreds of inspiring women from history
- **Regional Filtering**: Browse heroes by region including Africa, Asia, Europe, Middle-East, North America, South America, and Oceania
- **Interest-Based Discovery**: Filter by interests like Science, Politics, Art, Literature, Mathematics, Medicine, Technology, Rights Activism, Music, Law, Social Work, Space Exploration, and more
- **Persistent Filter State**: Your filter selections are saved in the URL, so they persist when navigating between pages
- **Search Functionality**: Find specific heroes by name
- **QR Code Generation**: Each hero has a unique QR code that can be printed and shared
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Pagination**: Navigate through large collections of heroes efficiently

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd scan-she-codes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React hooks with URL persistence
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## 📱 Features in Detail

### Filter Persistence
- All filter selections (region, interest, search) are automatically saved in the URL
- Navigate to hero detail pages and back without losing your filter state
- Share filtered views with others via URL
- Works with browser back/forward buttons

### Regional Coverage
- **Africa**: Wangari Maathai, Queen Nzinga, Miriam Makeba, and more
- **Asia**: Malala Yousafzai, Empress Cixi, Benazir Bhutto, and more
- **Europe**: Marie Curie, Ada Lovelace, Simone de Beauvoir, and more
- **Middle-East**: Leila Khaled, Hanan Ashrawi, Fatima al-Fihri, Queen Zenobia, Huda Sha'arawi, Nabawiyya Musa
- **North America**: Rosa Parks, Harriet Tubman, Maya Angelou, and more
- **South America**: Eva Perón, Gabriela Mistral, Manuela Sáenz, and more
- **Oceania**: Whina Cooper, Katherine Mansfield, and more

### QR Code Integration
- Each hero has a unique QR code
- QR codes link to detailed hero information
- Perfect for educational displays, museums, or sharing inspiring stories

## 🎨 Design System

The application uses a modern design system with:
- Consistent color palette and typography
- Responsive grid layouts
- Smooth animations and transitions
- Accessible color contrasts
- Mobile-first responsive design

## 📊 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── FilterBar.tsx   # Filter controls
│   ├── HeroCard.tsx    # Hero display cards
│   ├── Navigation.tsx  # Main navigation
│   └── QRCodeSection.tsx # QR code generation
├── data/
│   └── heroes.ts       # Hero database
├── hooks/
│   └── use-filter-state.ts # Filter persistence logic
├── pages/              # Page components
│   ├── Index.tsx       # Main hero listing
│   ├── HeroDetail.tsx  # Individual hero details
│   ├── About.tsx       # About page
│   └── NotFound.tsx    # 404 page
└── assets/             # Images and static files
```

## 🌍 Contributing

We welcome contributions! Here are some ways you can help:

1. **Add New Heroes**: Research and add inspiring women from history
2. **Improve Content**: Enhance biographies and add more details
3. **Add Images**: Provide high-quality images for heroes
4. **Bug Fixes**: Report and fix any issues
5. **Feature Requests**: Suggest new features or improvements

### Adding a New Hero

1. Find a high-quality image (400x600px recommended)
2. Add the image to `src/assets/`
3. Add hero data to `src/data/heroes.ts`
4. Include import statement for the image
5. Test the application


## 🙏 Acknowledgments

- All the inspiring women featured in this application
- The open source community for the amazing tools and libraries
- Contributors and supporters of women's history education

---

**ScanSheCan** - Celebrating the extraordinary women who shaped our world, one QR code at a time.

@dirkx
