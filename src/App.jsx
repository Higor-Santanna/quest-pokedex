import { AppRoutes } from './pages/routes'
import { ThemeProvider } from './styles/themes';

function App() {
  return (
    <ThemeProvider> 
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
