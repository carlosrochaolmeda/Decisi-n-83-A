import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Armchair, 
  AlertTriangle, 
  Truck, 
  Trash2, 
  CloudLightning, 
  ShieldAlert, 
  Calendar, 
  UserPlus, 
  FileText, 
  Users, 
  Mail, 
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Info,
  Maximize,
  Building2
} from 'lucide-react';

// --- Styles ---
const styles = `
  :root {
    --primary: #0f172a; /* Navy */
    --secondary: #3b82f6; /* Blue */
    --accent: #f59e0b; /* Gold/Amber */
    --bg: #f8fafc;
    --card-bg: #ffffff;
    --text: #334155;
    --text-light: #64748b;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, sans-serif; }
  
  body { background-color: var(--bg); color: var(--text); line-height: 1.6; }

  .container { max-width: 1200px; margin: 0 auto; padding: 20px; min-height: 100vh; display: flex; flex-direction: column; }

  /* Intro / Splash Screen */
  .intro-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, var(--primary) 0%, #020617 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: white;
    text-align: center;
    padding: 2rem;
  }
  
  .intro-header {
    position: absolute;
    top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    z-index: 20;
    animation: slideDown 0.8s ease;
  }
  
  @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }

  .brand-logo-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 15px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .brand-text {
    color: white;
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
  
  .intro-content {
    max-width: 500px;
    animation: zoomIn 0.8s ease;
    margin-top: 60px; /* Space for header */
  }
  
  @keyframes zoomIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }

  .intro-icon {
    margin-bottom: 2rem;
    color: var(--accent);
    filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.4));
  }

  .intro-btn {
    margin-top: 2.5rem;
    padding: 1rem 3rem;
    font-size: 1.25rem;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .intro-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 35px rgba(245, 158, 11, 0.5);
    background: #d97706;
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, var(--primary) 0%, #1e293b 100%);
    color: white;
    padding: 3rem 2rem;
    border-radius: 16px;
    margin-bottom: 2rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .hero::after {
    content: '';
    position: absolute;
    right: -50px;
    bottom: -50px;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
  }

  .hero h1 { font-size: 2.2rem; margin-bottom: 0.5rem; font-weight: 700; }
  .hero h2 { font-size: 1.2rem; opacity: 0.9; font-weight: 400; color: var(--accent); margin-bottom: 1rem; }
  .hero p { max-width: 600px; opacity: 0.8; }

  /* Navigation Grid */
  .nav-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .nav-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  .nav-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: var(--secondary);
  }

  .nav-card-icon {
    background: #eff6ff;
    color: var(--secondary);
    padding: 12px;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  
  .nav-card:nth-child(2) .nav-card-icon { background: #fff7ed; color: var(--accent); }
  .nav-card:nth-child(5) .nav-card-icon { background: #fef2f2; color: #ef4444; }

  .nav-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--primary); }
  .nav-card p { font-size: 0.9rem; color: var(--text-light); }

  /* Section Views */
  .section-view {
    animation: fadeIn 0.4s ease;
  }

  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: var(--text-light);
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    transition: color 0.2s;
  }
  .back-btn:hover { color: var(--primary); }

  .section-header { margin-bottom: 2rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 1rem; }
  .section-header h2 { font-size: 2rem; color: var(--primary); display: flex; align-items: center; gap: 0.75rem; }

  /* Situations Grid */
  .situation-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
  .situation-card { background: white; padding: 1.5rem; border-radius: 12px; border-left: 5px solid var(--secondary); box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .situation-card.alert { border-left-color: #ef4444; }
  .situation-card.warning { border-left-color: var(--accent); }
  .situation-card h4 { display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--primary); }
  .situation-desc { font-size: 0.95rem; color: var(--text); background: #f8fafc; padding: 1rem; border-radius: 8px; }

  /* Moments Timeline */
  .moments-container { display: flex; flex-direction: column; gap: 1.5rem; }
  .moment-card { display: flex; gap: 1.5rem; background: white; padding: 1.5rem; border-radius: 12px; align-items: flex-start; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
  .moment-icon { background: var(--primary); color: white; padding: 1rem; border-radius: 50%; shrink: 0; }
  .moment-content h3 { color: var(--primary); margin-bottom: 0.5rem; }

  /* CSC Split */
  .csc-split { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem; }
  .csc-col { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
  .csc-col h3 { border-bottom: 2px solid #f1f5f9; padding-bottom: 0.5rem; margin-bottom: 1rem; color: var(--primary); }
  .contact-box { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 1.5rem; border-radius: 8px; text-align: center; margin-top: 1rem; }

  /* Notes & Links */
  .note-list { list-style: none; display: grid; gap: 1rem; }
  .note-item { background: #fffbeb; border: 1px solid #fcd34d; padding: 1.5rem; border-radius: 8px; color: #92400e; display: flex; gap: 1rem; }
  .link-list { display: grid; gap: 1rem; }
  .link-btn { display: flex; justify-content: space-between; align-items: center; background: white; padding: 1rem 1.5rem; border-radius: 8px; text-decoration: none; color: var(--primary); border: 1px solid #e2e8f0; font-weight: 500; transition: all 0.2s; }
  .link-btn:hover { border-color: var(--secondary); background: #f8fafc; }

  @media (max-width: 768px) {
    .csc-split { grid-template-columns: 1fr; }
    .hero { padding: 2rem 1.5rem; }
    .hero h1 { font-size: 1.75rem; }
  }
`;

// --- Data ---

const SITUATIONS = [
  {
    title: "Algo falta o sobra",
    icon: <AlertTriangle size={20} />,
    type: "warning",
    action: "Reporta los sobrantes con folio de pedido. Si falta algo, solicita documentos a CSC y aclara antes de la auditoría."
  },
  {
    title: "Voy a mover un mueble (Misma Tienda)",
    icon: <Armchair size={20} />,
    type: "normal",
    action: "Envía una 'Solicitud de Ayuda' (SA)."
  },
  {
    title: "Voy a mover un mueble (Otro Lado)",
    icon: <Truck size={20} />,
    type: "normal",
    action: "Haz una Transferencia de Exhibición (TX) en el sistema."
  },
  {
    title: "Se rompió / Ya no sirve",
    icon: <Trash2 size={20} />,
    type: "alert",
    action: "Si es equipo especial (electromecánico/instalaciones), pide al Taller una 'Carta Dictamen' o 'Póliza Huesario' como evidencia para darlo de baja."
  },
  {
    title: "Desastre (Sismo/Inundación)",
    icon: <CloudLightning size={20} />,
    type: "alert",
    action: (
      <span>
        Consulta el manual <a href="https://knlcoppel.reflexisinc.com/kernel/views/authenticate/web/COPPEL.view" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline', fontWeight: '500' }}>'Recuperación Ágil Tras Siniestros'</a> en SIGO y envía evidencia a CSC.
      </span>
    )
  },
  {
    title: "Hubo un robo",
    icon: <ShieldAlert size={20} />,
    type: "alert",
    action: (
      <span>
        Sigue la Decisión <a href="https://drive.google.com/file/d/1IyOdZo91QFdBV-Q4fmQQRkJqIcFD-N76/view" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline', fontWeight: '500' }}>23-A</a> / <a href="https://grupocoppel.csod.com/content/grupocoppel/publications/14/Decisiones/Dec._23-B.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline', fontWeight: '500' }}>23-B</a>. Gestiona la baja con CSC una vez tengas el soporte del cobro o sanción.
      </span>
    )
  }
];

const MOMENTS = [
  {
    title: "Inventario Trimestral",
    icon: <Calendar size={24} />,
    desc: "Cada 3 meses debes realizarlo, puntearlo, firmarlo (tú y tu jefe) y enviarlo por SA o correo."
  },
  {
    title: "¡Llegué Nuevo al Centro!",
    icon: <UserPlus size={24} />,
    desc: "Obligatorio: Haz un inventario físico al recibir la tienda. Si hay faltantes, acláralos antes de aceptar. Si no, heredas la deuda."
  },
  {
    title: "Solicitar Bajas o Cambios",
    icon: <FileText size={24} />,
    desc: "Siempre adjunta el inventario del mes actual (firmado y punteado) junto con la evidencia (fotos, TX, dictamen)."
  }
];

const LINKS = [
  { label: "SANCIONES POR INCUMPLIMIENTO", url: "https://docs.google.com/document/d/1ZStxycZAWxByyCBxn2Cx9c3XpxgYjrmCAcHtv_m69pE/edit?tab=t.0" },
  { label: "PORTAL CEDIS EXHIBICIÓN", url: "https://sites.google.com/coppel.com/portal-cedis-exhibicion/" },
  { label: "MANUAL MC 'RECUPERACIÓN ÁGIL TRAS SINIESTROS'", url: "https://knlcoppel.reflexisinc.com/kernel/views/authenticate/web/COPPEL.view" },
  { label: "MUEBLES Y ENSERES", url: "https://sites.google.com/coppel.com/mye/inicio" },
  { label: "CARTA DE NO RECUPERABLE", url: "https://docs.google.com/document/d/1_57w3etDxxbCixbGBmLcmsdh2SZdDnahdtSJLq_QqEo/edit?tab=t.0" },
  { label: "DECISIÓN 23-A", url: "https://drive.google.com/file/d/1IyOdZo91QFdBV-Q4fmQQRkJqIcFD-N76/view" },
  { label: "DECISIÓN 23-B", url: "https://grupocoppel.csod.com/content/grupocoppel/publications/14/Decisiones/Dec._23-B.pdf" }
];

// --- Components ---

const IntroView = ({ onStart }) => (
  <div className="intro-overlay">
    
    <div className="intro-header">
       <div className="brand-logo-container">
          {/* Replace this icon with your logo image if needed: <img src="URL" style={{height: '50px'}} /> */}
          <Building2 size={40} color="#f59e0b" />
       </div>
       <div className="brand-text">INMUEBLES SALEVALE</div>
    </div>

    <div className="intro-content">
      <div className="intro-icon">
        <BookOpen size={64} />
      </div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1.2 }}>Decisión 83-A</h1>
      <h2 style={{ fontSize: '1.25rem', color: '#94a3b8', fontWeight: 400, marginBottom: '2rem' }}>
        Control de Muebles y Enseres
      </h2>
      <p style={{ maxWidth: '400px', margin: '0 auto', color: '#cbd5e1' }}>
        Guía interactiva oficial para la gestión y administración de activos en tienda.
      </p>
      
      <button onClick={onStart} className="intro-btn">
        <Maximize size={24} />
        Ingresar
      </button>
    </div>
  </div>
);

const Hero = () => (
  <header className="hero">
    <h1>Decisión 83-A</h1>
    <h2>Control de Muebles y Enseres</h2>
    <p>
      <strong>Objetivo:</strong> Mantener el control real de todo el mobiliario y equipo que usamos para trabajar. ¡Son herramientas, no desechos!
    </p>
    <div style={{ marginTop: '1rem', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
      <strong>👤 TU MISIÓN COMO GERENTE:</strong> Eres el guardián oficial de los activos de tu centro. Tu responsabilidad es cuidarlos, administrarlos y vigilar que no se maltraten.
    </div>
  </header>
);

const SituationsView = () => (
  <div className="section-view">
    <div className="section-header">
      <h2><AlertTriangle size={32} /> ¿Qué hago si...?</h2>
      <p>Guía rápida de acción ante incidencias con el mobiliario.</p>
    </div>
    <div className="situation-grid">
      {SITUATIONS.map((sit, idx) => (
        <div key={idx} className={`situation-card ${sit.type}`}>
          <h4>{sit.icon} {sit.title}</h4>
          <div className="situation-desc">
            {sit.action}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MomentsView = () => (
  <div className="section-view">
    <div className="section-header">
      <h2><Calendar size={32} /> Tus 3 Momentos Clave</h2>
      <p>Instancias obligatorias donde debes reportar el estado de tus activos.</p>
    </div>
    <div className="moments-container">
      {MOMENTS.map((m, idx) => (
        <div key={idx} className="moment-card">
          <div className="moment-icon">{m.icon}</div>
          <div className="moment-content">
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CSCView = () => (
  <div className="section-view">
    <div className="section-header">
      <h2><Users size={32} /> Tu Aliado: CSC</h2>
      <p>Cómo colaborar con el Centro de Servicios Compartidos.</p>
    </div>
    <div className="csc-split">
      <div className="csc-col">
        <h3>🏢 Ellos (CSC)</h3>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>Validan tus documentos.</li>
          <li>Actualizan las listas oficiales.</li>
          <li>Gestionan las bajas contables.</li>
          <li>Mantienen el sistema "oficial".</li>
        </ul>
      </div>
      <div className="csc-col">
        <h3>👤 Tú (Gerente)</h3>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>Envías la evidencia física y documental.</li>
          <li>Recuerda: "Sin papelito (o correo), no hay cambio".</li>
          <li>Aseguras que lo físico coincida con el sistema.</li>
        </ul>
      </div>
    </div>
    <div className="contact-box">
      <Mail style={{ marginBottom: '0.5rem' }} />
      <h3>Contacto</h3>
      <p>Puedes pedir listados o ayuda al correo:</p>
      <a href="mailto:mueblesyenseres@coppel.com" style={{ color: 'inherit', fontWeight: 'bold' }}>mueblesyenseres@coppel.com</a>
    </div>
  </div>
);

const NotesView = () => (
  <div className="section-view">
    <div className="section-header">
      <h2><Info size={32} /> Notas de Oro</h2>
      <p>Reglas inquebrantables para la gestión de activos.</p>
    </div>
    <ul className="note-list">
      <li className="note-item">
        <div style={{ color: '#d97706' }}><Info size={24} /></div>
        <div>
          <strong>Cero desperdicio:</strong> Los activos no se venden ni se tiran a corto plazo. Son inversión de la empresa.
        </div>
      </li>
      <li className="note-item">
        <div style={{ color: '#d97706' }}><FileText size={24} /></div>
        <div>
          <strong>Irrecuperables:</strong> Si algo se perdió y no se puede cobrar a nadie, el Gerente Regional debe firmar una "Carta de No Recuperable" con un plan de acción para que no vuelva a pasar.
        </div>
      </li>
      <li className="note-item">
        <div style={{ color: '#d97706' }}><BookOpen size={24} /></div>
        <div>
          <strong>Historial:</strong> Guarda tus transferencias (TX) de activos nuevos hasta que aparezcan en tu inventario oficial.
        </div>
      </li>
    </ul>
  </div>
);

const LinksView = () => (
  <div className="section-view">
    <div className="section-header">
      <h2><ExternalLink size={32} /> Links de Apoyo</h2>
      <p>Accesos directos a documentación y portales.</p>
    </div>
    <div className="link-list">
      {LINKS.map((link, idx) => (
        <a 
          href={link.url} 
          key={idx} 
          className="link-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {link.label}
          <ExternalLink size={16} />
        </a>
      ))}
    </div>
  </div>
);

const Navigation = ({ onNavigate }) => (
  <div className="nav-grid">
    <div className="nav-card" onClick={() => onNavigate('situations')}>
      <div className="nav-card-icon"><AlertTriangle size={32} /></div>
      <h3>¿Qué hago si...?</h3>
      <p>Robos, desastres, movimientos y bajas.</p>
    </div>
    <div className="nav-card" onClick={() => onNavigate('moments')}>
      <div className="nav-card-icon"><Calendar size={32} /></div>
      <h3>3 Momentos Clave</h3>
      <p>Inventarios, cambios de gerente y solicitudes.</p>
    </div>
    <div className="nav-card" onClick={() => onNavigate('csc')}>
      <div className="nav-card-icon"><Users size={32} /></div>
      <h3>CSC: Tu Aliado</h3>
      <p>Responsabilidades y contacto oficial.</p>
    </div>
    <div className="nav-card" onClick={() => onNavigate('notes')}>
      <div className="nav-card-icon"><BookOpen size={32} /></div>
      <h3>Notas de Oro</h3>
      <p>Reglas vitales y cartas de no recuperable.</p>
    </div>
    <div className="nav-card" onClick={() => onNavigate('links')}>
      <div className="nav-card-icon"><ExternalLink size={32} /></div>
      <h3>Links de Apoyo</h3>
      <p>Accesos directos a manuales y portales.</p>
    </div>
  </div>
);

// --- Main App ---

const App = () => {
  const [view, setView] = useState('intro');

  const handleStart = () => {
    // Attempt to enter fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(err => {
        console.log("Fullscreen denied or not supported:", err);
      });
    }
    setView('home');
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      // If document.fullscreenElement is null, it means we exited fullscreen
      if (!document.fullscreenElement) {
        setView('intro');
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    // Listen to vendor prefixed versions for broad compatibility if necessary, 
    // though 'fullscreenchange' is standard in most modern contexts.
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const renderView = () => {
    switch(view) {
      case 'intro': return <IntroView onStart={handleStart} />;
      case 'situations': return <SituationsView />;
      case 'moments': return <MomentsView />;
      case 'csc': return <CSCView />;
      case 'notes': return <NotesView />;
      case 'links': return <LinksView />;
      default: return <Navigation onNavigate={setView} />;
    }
  };

  return (
    <>
      <style>{styles}</style>
      {view === 'intro' ? (
        <IntroView onStart={handleStart} />
      ) : (
        <div className="container">
          {view === 'home' ? (
            <Hero />
          ) : (
            <div>
              <button className="back-btn" onClick={() => setView('home')}>
                <ArrowLeft size={20} /> Volver al Inicio
              </button>
            </div>
          )}
          <main>
            {renderView()}
          </main>
          
          <footer style={{ marginTop: 'auto', paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8' }}>
            Decisión 83-A • Control de Muebles y Enseres
          </footer>
        </div>
      )}
    </>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);