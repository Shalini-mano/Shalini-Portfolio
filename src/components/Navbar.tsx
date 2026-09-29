import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

type NavbarProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="navbar shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setIsMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">SM</span>
          <span>Shalini Manoharan</span>
        </a>
        <ul className={`nav-links${isMenuOpen ? ' open' : ''}`} id="mobile-navigation">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          {links.map(([label, href]) => <li key={href}><a href={href} onClick={() => setIsMenuOpen(false)}>{label}</a></li>)}
        </ul>
        <div className="nav-controls">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button className="menu-toggle" type="button" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)}>
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar