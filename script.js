/* Reset & base styling */

{ margin: 0; padding: 0; box-sizing: border-box; } body { font-family: 'Segoe UI', sans-serif; background: #f9f9f9; line-height: 1.6; color: #333; } a { text-decoration: none; color: inherit; } ul { list-style: none; }


/* Navbar */ .navbar { background: #0055a5; color: #fff; display: flex; justify-content: space-between; align-items: center; padding: 15px 30px; position: sticky; top: 0; z-index: 100; } .logo-container { display: flex; align-items: center; } .logo-circle { background: #fff; border-radius: 50%; padding: 5px; margin-right: 10px; } .logo { height: 40px; width: 40px; object-fit: contain; } .brand { font-size: 1.5rem; font-weight: bold; } .nav-links { display: flex; gap: 20px; } .nav-links li a { color: #fff; font-weight: 500; transition: color 0.3s; } .nav-links li a:hover { color: #ffdd57; }

/* Hero */ .hero { text-align: center; padding: 60px 20px; background: linear-gradient(145deg, #0055a5, #0066cc); color: white; } .hero h2 { font-size: 2.5rem; margin-bottom: 10px; } .hero h3 { font-size: 1.5rem; margin-bottom: 10px; } .hero .highlight { color: #ffdd57; font-weight: bold; }

/* Sections */ section { padding: 50px 20px; max-width: 1000px; margin: auto; } section h2 { font-size: 2rem; color: #0055a5; margin-bottom: 20px; }

/* Services List */ #services ul { padding-left: 20px; } #services li { margin-bottom: 10px; font-size: 1.1rem; }

/* Buttons */ .whatsapp-button { display: inline-block; background: #25D366; color: white; padding: 12px 20px; margin-top: 15px; border-radius: 8px; font-weight: bold; transition: background 0.3s; } .whatsapp-button:hover { background: #1da851; } .site-link { display: inline-block; margin-top: 10px; color: #0055a5; font-weight: bold; text-decoration: underline; }

/* Responsive */ @media (max-width: 768px) { .nav-links { flex-direction: column; gap: 10px; margin-top: 10px; } .navbar { flex-direction: column; align-items: flex-start; } .hero h2 { font-size: 2rem; } }

