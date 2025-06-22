'use client';

import Link from 'next/link';
import { useState, useMemo, useEffect } from 'react';
import { generateClients } from '@/lib/ClientData';
import Pagination from '../components/Pagination';
import { ITEMS_PER_PAGE, NUMBER_OF_FAKE_CLIENTS } from '@/lib/Settings';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import AjouterClient from '../components/forms/ajouterClient';
import { useClientStore } from '@/lib/ClientStore';

const ClientsPage = () => {    
    const [showForm, setShowForm] = useState(false);

    const router = useRouter();
const { clients, setClients } = useClientStore();

useEffect(() => {
  const generated = generateClients(NUMBER_OF_FAKE_CLIENTS);
  setClients(generated);
}, []);
    const [search, setSearch] = useState('');
    const [sortAsc, setSortAsc] = useState(true);

    const filteredClients = useMemo(() => {
        const filtered = clients.filter(client =>
            client.fullName.toLowerCase().includes(search.toLowerCase())
        );
        return filtered.sort((a, b) => {
            if (sortAsc) return a.fullName.localeCompare(b.fullName);
            return b.fullName.localeCompare(a.fullName);
        });
    }, [search, sortAsc, clients]);

    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page') || 1);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const paginatedClients = filteredClients.slice(start, end);

    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
     const message = localStorage.getItem("success");
      if (message) {
       setSuccessMessage(message);
       localStorage.removeItem("success");

       setTimeout(() => {
       setSuccessMessage("");
    }, 4000); 
      }
    }, []);


    return (
        <>
        {successMessage && (
           <div className="mb-4 p-4 text-green-800 flex justify-center bg-green-100 border border-green-300 rounded-md shadow-sm">
             {successMessage}
           </div>
        )}

            {showForm && (
                <div className="fixed inset-0  z-50 flex items-start justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 mt-20 relative">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                        >
                            &times;
                        </button>
                        <AjouterClient />
                    </div>
                </div>
            )}

            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Nos Clients</h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Ajouter un client
                    </button>
                </div>

                <div className="mb-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                    <input
                        type="text"
                        placeholder="Rechercher par nom..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            const params = new URLSearchParams(window.location.search);
                            params.set("page", "1"); 
                            router.push(`?${params.toString()}`);
                        }}
                        className="w-full sm:w-64 px-3 py-2 border rounded-md"
                    />
                    <button
                        onClick={() => setSortAsc(!sortAsc)}
                        className="text-sm text-blue-600 hover:underline"
                    >
                        Trier par nom ({sortAsc ? 'A-Z' : 'Z-A'})
                    </button>
                </div>

                <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 whitespace-nowrap">Nom Complet</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 whitespace-nowrap">Email</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 whitespace-nowrap">Téléphone</th>
                                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 whitespace-nowrap">Date de création</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {paginatedClients.map((client) => (
                                    <tr key={client.id} className="hover:bg-gray-100 transition">
                                        <td className="px-4 py-2 whitespace-nowrap">
                                            <Link href={`/clients/${client.id}`} className="text-blue-600 hover:underline">
                                                {client.fullName}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-2 whitespace-nowrap">{client.email}</td>
                                        <td className="px-4 py-2 whitespace-nowrap">{client.phone}</td>
                                        <td className="px-4 py-2 whitespace-nowrap">{client.createdAt}</td>
                                    </tr>
                                ))}
                                {paginatedClients.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center py-4 text-gray-400">
                                            Aucun client trouvé.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <Pagination page={page} count={filteredClients.length} itemsPerPage={ITEMS_PER_PAGE} />
                </div>
            </div>
        </>
    );
};

export default ClientsPage;
