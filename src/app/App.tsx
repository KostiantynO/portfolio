import { ThemeProvider } from 'styled-components/macro';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { AppStyled } from './App.styled';

const Main = () => (
  <main>
    <div>
      <h1>Portfolio - Kostiantyn Ochenash</h1>

      <section>
        <h2>Commercial projects</h2>
      </section>

      <section>
        <h2>Projects from courses</h2>
      </section>

      <section>
        <h2>Pet projects</h2>
      </section>

      <section>
        <h2>Prev work</h2>
      </section>
    </div>

    <aside>
      <section>
        <h2>Skills</h2>
        <h3>Tech Skills</h3>
        <h3>Soft Skills</h3>
      </section>

      <section>
        <h2>English</h2>
      </section>

      <section>
        <h2>Courses</h2>
      </section>

      <section>
        <h2>Education</h2>
      </section>
    </aside>
  </main>
);

const Header = () => <header>{/* Header */} </header>;
const Footer = () => <footer>{/* Footer */} </footer>;

const Layout = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <AppStyled>
      <Layout />
    </AppStyled>
  </ThemeProvider>
);
