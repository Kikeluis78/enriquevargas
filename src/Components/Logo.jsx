export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/enriquevargas.png"
        alt="Enrique Vargas"
        className="h-16 md:h-20 w-auto"
        style={{
          filter: "drop-shadow(0 0 10px rgba(0, 217, 255, 0.3))",
        }}
      />
    </div>
  );
}
