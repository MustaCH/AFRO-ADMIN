// authProvider.ts
import { AuthProvider } from "react-admin";
import { fetchUtils } from "react-admin";

const apiUrl = "https://afrod-mvp.vercel.app/api/test/users"; // 🔹 URL de tu API de usuarios
const httpClient = fetchUtils.fetchJson;

const authProvider: AuthProvider = {
  // Inicio de sesión
  login: async ({ username, password }) => {
    try {
      // 🔹 Consultar la API de usuarios para validar credenciales
      const { json } = await httpClient(`${apiUrl}?username=${username}`, {
        method: "GET",
      });

      // 🔹 Buscar el usuario con el username y contraseña
      const user = json.data.find(
        (u: any) => u.username === username && u.password === password
      );

      if (user && user.role === "ADMIN") {
        localStorage.setItem("user", JSON.stringify(user));
        return Promise.resolve();
      }

      return Promise.reject(new Error("Acceso denegado: solo para administradores"));
    } catch (error) {
      return Promise.reject(new Error("Credenciales incorrectas"));
    }
  },

  // Cierre de sesión
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },

  // Verificar autenticación
  checkAuth: () => {
    const user = localStorage.getItem("user");
    return user ? Promise.resolve() : Promise.reject();
  },

  // Manejar errores de autenticación
  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // Obtener permisos del usuario
  getPermissions: () => {
    const user = localStorage.getItem("user");
    return user ? Promise.resolve(JSON.parse(user).role) : Promise.reject();
  },
};

export default authProvider;