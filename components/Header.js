import '../styles/HeaderStyle.css';
import Head from 'next/head';
const Header = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous" />
      </Head>
      <div id="header">
        <div id="announcement_bar">
          <p id="announcement_message">
            COVID-19: A message to our Kylie Cosmetics family... Read here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;