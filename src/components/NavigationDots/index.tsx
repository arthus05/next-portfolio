interface NavigationDotsProps {
  active: string;
}

const navLinks = ["home", "about", "work", "skills", "testimonials", "contact"];

export const NavigationDots = ({ active }: NavigationDotsProps) => {
  return (
    <div className="app__navigation">
      {navLinks.map((navLink, index) => {
        const style = navLink === active ? { backgroundColor: "#313BAC" } : {};
        return (
          <a
            href={`#${navLink}`}
            key={navLink + index}
            className="app__navigation-dot"
            style={style}
          />
        );
      })}
    </div>
  );
};
