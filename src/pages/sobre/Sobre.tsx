import type { colaborador } from "../../data/Data";
type SobreProps= {
  colaboradores: colaborador[]
}
export default function Sobre({ colaboradores }: SobreProps) {

  return (
    <div className="min-h-screen bg-white text-indigo-400 font-roboto antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Cabeçalho */}
        <header className="mb-16">
          <h1 className="font-montserrat text-4xl md:text-5xl font-extrabold mb-2 text-indigo-700">Sobre Nós</h1>
          <p className="font-montserrat text-indigo-400 text-sm tracking-[0.4em] font-bold uppercase flex items-center gap-2">
            <i className="fa-solid fa-water"></i> River Technology
          </p>
        </header>

        {/* Seção de Introdução Técnica */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-montserrat text-3xl text-indigo-400 font-bold">Quem somos</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Somos um squad multidisciplinar focado em alta performance e escalabilidade. 
              A <span className="text-indigo-700 font-semibold">River Technology</span> nasceu da união de talentos com o objetivo de entregar soluções digitais que não apenas resolvem problemas, mas criam novas possibilidades.
            </p>
            <div className="flex gap-4">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-indigo-700">6</span>
                  <span className="text-xs uppercase tracking-widest text-indigo-500">Especialistas</span>
               </div>
               <div className="w-px h-10 bg-white/10 mx-2"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-indigo-700">Full</span>
                  <span className="text-xs uppercase tracking-widest text-indigo-500">Stack Focus</span>
               </div>
            </div>
          </div>
          
          <div className="bg-indigo-400 border border-white/5 p-8 rounded-3xl">
            <h3 className="font-montserrat text-white font-bold mb-4 uppercase text-xs tracking-widest">Nossa Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Tailwind', 'Node.js', 'Git', 'Agile', 'Cloud'].map(tech => (
                <span key={tech} className="px-3 py-1 bg-indigo-700/5 border border-indigo-700/10 rounded-full text-sm text-white/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Grid do Time */}
        <h2 className="font-montserrat text-2xl font-bold mb-8 text-center md:text-left">Conheça o Time</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {colaboradores.map((colaborador, index) => (
            <div key={index} className="group relative bg-[#10141d] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
              
              {/* Container da Imagem */}
              <a href={colaborador.linkedin} target="_blank" className="aspect-4/5 overflow-hidden">
                <img 
                  src={colaborador.imagem} 
                  alt={colaborador.nome}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center 15%' }} 
                />
              </a>

              {/* Legenda (Caption) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black via-black/80 to-transparent">
                <p className="font-montserrat text-2xl font-extrabold text-white mb-1">
                  {colaborador.nome}
                </p>
                <p className="font-montserrat text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <i className={`fa-solid ${colaborador.icon} ${colaborador.isBrand ? 'fa-brands' : ''} text-xs`}></i>
                  {colaborador.cargo}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}