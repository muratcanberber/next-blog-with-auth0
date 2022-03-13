import "../styles/global.css";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-md77.us.auth0.com"
      clientId="NFjWbQUID3vF6gbNHcTmGx6KbnYTd60p"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700 ">
        <Header />
        <main className="mt-6 ">
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  );
}

export default MyApp;
