import Navbar from './components/navbar.jsx'
import Hero  from './components/hero.jsx'
import CourseCard from './components/CourseCard.jsx'
import Footer from './components/Footer.jsx'

export default function App() {

  function handleSelect(title) {
    alert('You have picked '  + title)
  }

  function handleFavourite(title) {
    alert('Favourite ' + title)
  }
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <CourseCard title="React" description="Frontend library" duration={12} onSelect={handleSelect} onFavourite={handleFavourite} />
      <CourseCard title="python" description="AI/ML" duration={16} onSelect={handleSelect} onFavourite={handleFavourite}/>
      <CourseCard title="Go" description="Cloud Automation" duration={18} onSelect={handleSelect} onFavourite={handleFavourite}/>
    </main> 
      <footer>
        <Footer />
      </footer>

    </>
  )
}


