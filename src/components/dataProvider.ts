import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl = "https://afrod-mvp.vercel.app/api/test";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: async (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url);
    return {
      data: json.data,
      total: json.total,
    };
  },

  // Obtener un recurso por su ID
  getOne: async (resource: string, params: any) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    return { data: json.data };
  },

  // Obtener varios recursos por sus IDs
  getMany: async (resource: string, params: any) => {
    const query = {
      id: params.ids,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url);
    return { data: json.data };
  },

  // Obtener recursos relacionados (para relaciones)
  getManyReference: async (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      [params.target]: params.id,
      _sort: field,
      _order: order,
      _start: (page - 1) * perPage,
      _end: page * perPage,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url);
    return {
      data: json.data,
      total: json.total,
    };
  },

  // Crear un nuevo recurso
  create: async (resource: string, params: any) => {
    if (resource === "videos") {
      // 🔹 Crear FormData para videos (archivo + campos)
      const formData = new FormData();
      formData.append("file", params.data.file.rawFile); // Campo del archivo
      formData.append("title", params.data.title);
      formData.append("description", params.data.description);
      formData.append("date", params.data.date);
      formData.append("actors", JSON.stringify(params.data.actors));

      // 🔹 Enviar a la API
      const { json } = await httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: formData,
        // No incluir headers Content-Type, FormData lo maneja automáticamente
      });

      return { data: json.data };
    } else {
      const { json } = await httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
      return { data: json.data };
    }
  },

  // Actualizar un recurso existente
  update: async (resource: string, params: any) => {
    const formData = new FormData();

    Object.keys(params.data).forEach((key) => {
      if (key === "file" && params.data.file?.rawFile) {
        formData.append("file", params.data.file.rawFile);
      } else {
        formData.append(key, params.data[key]);
      }
    });

    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: formData,
    });

    return { data: { id: params.id, ...json } };
  },

  // Actualizar varios recursos
  updateMany: async (resource: string, params: any) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/bulk`, {
      method: "PUT",
      body: JSON.stringify(
        params.ids.map((id: string) => ({ id, ...params.data }))
      ),
    });
    return { data: json.data };
  },

  // Eliminar un recurso
  delete: async (resource: string, params: any) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    return { data: json.data };
  },

  // Eliminar varios recursos
  deleteMany: async (resource: string, params: any) => {
    const url = `${apiUrl}/${resource}/bulk`;
    const options = {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ ids: params.ids }),
    };

    await httpClient(url, options); // No es necesario esperar un `json.data`

    return { data: params.ids }; // React-Admin necesita esta respuesta
  },
};

export default dataProvider;
