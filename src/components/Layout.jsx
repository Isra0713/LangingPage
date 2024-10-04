import Sidebar from "../components/Sidebar";
import RoutesPages from "../routes/RoutesPages";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar siempre visible a la izquierda */}
      <Sidebar />

      {/* Contenido principal de las rutas */}
      <main className="flex-1 bg-gray-600 p-2 overflow-auto">
        <RoutesPages />
      </main>
    </div>
  );
};

export default Layout;
