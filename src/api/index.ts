import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND,
});
async function get_service_list() {
  return await api.get("/services");
}

async function entry_service(service_id: number) {
  await api.post("/entry", { service_id: service_id });
}

async function exit_service(service_id: number) {
  await api.post("/exit", { service_id: service_id });
}

export { get_service_list, entry_service, exit_service };
