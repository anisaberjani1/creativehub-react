import Header from "./components/Header";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { LanguageProvider, useLanguage } from "./context/LanguageContext"

const AppWraper = () => {
  const {text} = useLanguage();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl mb-6">{text.title}</h1>
      <LanguageSwitcher/>
      <Header/>
    </div>
  )
}

const App = () => {

  return (
    <LanguageProvider>
      <AppWraper/>
    </LanguageProvider>
  )
}

export default App
