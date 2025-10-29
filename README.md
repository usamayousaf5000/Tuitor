# ThinkHubTutors - Coming Soon Page

A modern, responsive "Coming Soon" page for ThinkHubTutors built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Beautiful gradient backgrounds and animated geometric shapes
- **Responsive Layout**: Works perfectly on all devices from mobile to desktop
- **Contact Form**: Interactive contact form with validation and submission feedback
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first styling with custom animations
- **Vite**: Fast build tool with hot module replacement

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `dist` folder.

## Contact Form Features

The contact form includes:

- **Form Fields**: Name, Email, and Message
- **Validation**: Required field validation
- **Loading State**: Shows loading spinner during submission
- **Success Feedback**: Confirmation message after successful submission
- **Responsive Design**: Works on all screen sizes
- **Modal Interface**: Clean modal overlay with backdrop blur

### Form Submission

The contact form currently simulates form submission with a 1-second delay. In a real application, you would:

1. Replace the simulation with actual API calls
2. Add server-side validation
3. Implement email sending functionality
4. Add database storage for form submissions

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Header with logo
│   ├── ComingSoon.tsx      # Main coming soon content
│   └── ContactForm.tsx     # Contact form modal
├── types/
│   └── index.ts            # TypeScript type definitions
├── App.tsx                 # Main app component
├── main.tsx               # Entry point
└── index.css              # Tailwind CSS imports
```

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing with autoprefixer

## Customization

### Changing Launch Date

Update the `launchDate` object in `src/App.tsx`:

```typescript
const launchDate: LaunchDate = {
  day: '15',
  month: 'Mar',
  year: '2025'
};
```

### Styling

The project uses Tailwind CSS for styling. Key customizations can be made in:

- `tailwind.config.cjs`: Custom colors, fonts, and animations
- Component files: Tailwind classes for styling
- `src/index.css`: Global styles and Tailwind directives

### Form Integration

To integrate with a real backend:

1. Update the `handleSubmit` function in `ContactForm.tsx`
2. Add API endpoint configuration
3. Implement error handling
4. Add form validation feedback

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).# Tuitor
# Tuitor
# Tuitor
