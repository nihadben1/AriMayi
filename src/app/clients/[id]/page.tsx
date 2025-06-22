"use client";
import Image from "next/image";
import { useClientStore } from "@/lib/ClientStore";
import { useParams } from "next/navigation";
import { faker } from "@faker-js/faker";

const SingleClientPage = () => {
  const { id } = useParams();
  const client = useClientStore((state) => state.getClientById(id as string));

  if (!client) {
    return <div className="p-6 text-red-600">Client introuvable.</div>;
  }

  const similarUsers = Array.from({ length: 6 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  image: faker.image.avatar(),
}));

  return (
    <div className="p-6 max-w-5xl mx-auto">
          {/* Profil principal */}
          <div className="flex items-center gap-6 bg-white shadow p-6 rounded-lg mb-8">
            <Image
              src={client.image || "/default-profile.png"}
              alt="Profil"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold">{client.fullName}</h2>
              <p className="text-gray-600">{client.role}</p>
            </div>
          </div>
    
          <h3 className="text-xl font-semibold mb-4">Collegues similaires</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow p-4 flex items-center gap-4"
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-lg font-medium">{user.name}</h4>
                  <p className="text-gray-500 text-sm">{user.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  );
};

export default SingleClientPage;
