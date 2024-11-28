import React from 'react';
import '../styles/Navbar.css'; 
function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD///9nZ2fc3NwxMTFMTEzY2NiCgoLQ0NDh4eHDw8Px8fE7OztJSUmpqan7+/vp6emTk5N4eHgpKSmIiIggICBBQUGvr6+kpKS7u7v19fXKyspeXl4YGBhsbGwNDQ2RkZGcnJx0dHRVVVX8nFpcAAADg0lEQVR4nO3d7VbaQBSFYWIQIVG+UQEBo/d/jwJtisw5h0mgq2d23c/PZto17woJM4lddjpERERERERERERETjbd28y8A6Lm2W163gFRDzcW9r0DoliIX/j/X4eze+nJOLGDRzn22TvgOnd6Ye49r7+HhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+FiIj4X4WIiPhfhYiI+F+JoWPg3z0f7PV/3JwmOaN2hWuB1/O9Z/9JnqlRoV9oKjQ6fJXqVB4bM8PHCbb3vxQiUwy0q/GbcVL9QHpP8LvGrRwvAarE0cJ91KrHBrBGbZznPaLcQKx/rxvRfPabcQKbw3A7PMdd7NRQpfLhTeuU68sUhhfqHw1XXijUUKLwQC/E7LoxsKQfYfNxSCLN1+/DkcXSgsXCfeWKTQWrMdVK4TbyxSWF0ofHKdeGNGYf1NMLMDUTZQRuG6Pt43C1E2F0bhsj6u7n8PRp6zPtlUvePdcFVMjRFG4elJjLUyTWNVWsQ/VUbh/DRioA5IYu/0GUxqvFEGGYWf34aUyvEkvguVuc8ajTo4GyM3GEmcwa4y75UcphcG3wTV+dFRGtegevnID5deuAxG7b7db8r3fzL/KOMJkvgd93qhcue9G64H47yoklnJGAvK8OQYhR4zbksPlN/TaiHC496pUZiF743UwgeXObcztAq3wUC10GXKLa2twvAeohVCvDwznwJ+BAO1Qojn9fpicu8tGPghhySxYIkyC8O38A9yiMuEW7Oer4h1m7wlzbV/Lz2FUqd+AsUeHuQpaGdiFHbDgWKEsv9IUrg3/E2svN/CEdazgPTohWJY+GnGuI8eLbVAcYIWwQCQ10lH2gZYzj9Y+qDcZX5R7qbiJjJFDuzsRKB4SB28pEfYM52RG6hgQLAkFZvj9IlnuetLh0GWMufEpVjO623Dc9BXigc4GJSvjLJXLIs8fPEJsSNUzWWiIsf6kdhzj/ZPbdUGaTzfvV7kNPbDLTGiycrKK19RdhIxb9p2Ma9A75+G+8n6zyVZ9pbvn/G/AmnRnaH9dwkiIiIiIiIiIiL68b4Am9EnHECFbf4AAAAASUVORK5CYII="/></div>
<ul className="navbar-menu">
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">About</a></li>
<li><a href="#" className="navbar-link">Fragrances</a></li>
<li><a href="#" className="navbar-link">New Arrivals</a></li>
<li><a href="#" className="navbar-link">Men</a></li>
<li><a href="#" className="navbar-link">Women</a></li>
<li><a href="#" className="navbar-link">Kids</a></li>
<li><a href="#" className="navbar-link">Contact</a></li>
</ul>
</nav>
);
}
export default Navbar;