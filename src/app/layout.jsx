export default function Layout({ children, modal }) {
  return (
    <html lang="en">
      <head>
        <title>Training App</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/training">Muscles</a>
        </nav>
        <main>
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}
