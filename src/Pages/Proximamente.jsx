import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tools = ["⚙️", "🔧", "💻", "📐", "🛠️", "📦"];

export default function Proximamente() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* Íconos flotantes */}
      <div className="relative w-full max-w-lg h-40 mb-4">
        {tools.map((tool, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl"
            style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 2) * 30}%` }}
            animate={{ y: [0, -18, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            {tool}
          </motion.span>
        ))}
      </div>

      {/* Personaje construyendo */}
      <motion.div
        className="text-8xl mb-6 select-none"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        👷
      </motion.div>

      {/* Texto */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Próximamente
      </motion.h1>

      <motion.p
        className="text-gray-400 text-lg md:text-xl max-w-md mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Estamos construyendo algo increíble para ti.{" "}
        <span className="text-[#00D9FF]">¡Vuelve pronto!</span>
      </motion.p>

      {/* Barra de progreso animada */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] rounded-full"
          animate={{ width: ["20%", "80%", "20%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/"
          className="px-8 py-3 rounded-full font-bold text-black bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] shadow-lg hover:opacity-90 transition"
        >
          ← Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}
