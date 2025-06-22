"use client"; 
import { useState } from "react";
import { useRouter } from "next/navigation"; 


export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      credentials.email === "test@gmail.com" &&
      credentials.password === "123456"
    ) {
      router.push("/dashboard");
    } else {
      alert("Identifiants invalides");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-gray-100">
      <div className="relative w-[800px] h-[500px] bg-white rounded-xl overflow-hidden shadow-2xl">
        <div
          className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-700 ease-in-out ${
            isSignIn ? "translate-x-full" : "translate-x-0"
          } bg-gradient-to-r from-blue-00 to-blue-300 text-white flex flex-col justify-center items-center p-8 rounded-r-xl`}
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignIn ? "Bonjour!" : "Bon Retour !"}
          </h2>
          <p className="mb-6 text-center">
            {isSignIn
              ? "Inscrivez-vous avec vos informations personnelles pour accéder à toutes les fonctionnalités du site."
              : "Connectez-vous avec vos informations personnelles pour utiliser toutes les fonctionnalités du site."}
          </p>
          <button
            className="px-6 py-2 bg-white text-blue-600 hover:cursor-pointer rounded-full font-semibold shadow-md hover:shadow-lg"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Se Connecter" : "S'inscrire"}
          </button>
        </div>

        <div
          className={`absolute top-0 ${
            isSignIn ? "left-0" : "left-1/2"
          } w-1/2 h-full p-10 transition-all duration-700 ease-in-out`}
        >
          <h2 className="text-2xl font-bold mb-6">
            {isSignIn ? "Se Connecter" : "Créer un Compte"}
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Nom"
                className="border rounded-xl px-4 py-2"
                onChange={(e) =>
                  setCredentials({ ...credentials, name: e.target.value })
                }
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="border rounded-xl px-4 py-2"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="border rounded-xl px-4 py-2"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 hover:cursor-pointer rounded-xl hover:bg-blue-700"
            >
              {isSignIn ? "S'inscrire" : "Se Connecter"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
