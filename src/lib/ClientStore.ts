import { create } from "zustand";
import { Client } from "./ClientData";

type ClientState = {
  clients: Client[];
  setClients: (clients: Client[]) => void;
  addClient: (client: Client) => void;
  getClientById: (id: string) => Client | undefined;
};

export const useClientStore = create<ClientState>((set, get) => ({
  clients: [],
  setClients: (clients) => set({ clients }),
  addClient: (client) =>
    set((state) => ({
      clients: [...state.clients, client],
    })),
  getClientById: (id) => {
    return get().clients.find((c) => c.id === id);
  },
}));
