"use client";

import Image from "next/image";
import { faker } from "@faker-js/faker";

const user = {
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  image: faker.image.avatar(),
  history: [
  "A rejoint l'entreprise en 2021",
  "Promu développeur senior en 2022",
  "A complété 5 projets majeurs",
  "Mentor de 3 collègues juniors",
  ],
};

const similarUsers = Array.from({ length: 6 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  image: faker.image.avatar(),
}));

const ProfilePage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto flex gap-8">
      {/* Main Content */}
      <div className="flex-1">
        {/* Profil principal */}
        <div className="flex items-center gap-6 bg-white shadow p-6 rounded-lg mb-8">
          <Image
            src={user.image}
            alt="Profil"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.role}</p>
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

      <aside className="w-80 bg-white shadow rounded-lg p-6 h-fit">
        <h3 className="text-lg font-semibold mb-4">Historique</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {user.history.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ProfilePage;
