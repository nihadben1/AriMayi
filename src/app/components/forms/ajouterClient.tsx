"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
};

const AjouterClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();


const [showForm, setShowForm] = useState(true);

const onSubmit = (data: FormData) => {
    console.log("Client ajouté :", data);
    reset();
    setShowForm(false);
    window.location.reload();
    localStorage.setItem("success", "Client ajouté avec succès !");

};

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ajouter un Client</h2>


      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            {...register("nom", { required: "Le nom est requis." })}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
          {errors.nom && (
            <p className="text-sm text-red-500 mt-1">{errors.nom.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            {...register("prenom", { required: "Le prénom est requis." })}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
          {errors.prenom && (
            <p className="text-sm text-red-500 mt-1">{errors.prenom.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "L'email est requis.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Format d'email invalide.",
              },
            })}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input
            {...register("telephone", {
              required: "Le téléphone est requis.",
              pattern: {
                value: /^[0-9]{8,15}$/,
                message: "Numéro invalide.",
              },
            })}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
          {errors.telephone && (
            <p className="text-sm text-red-500 mt-1">{errors.telephone.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Créer
        </button>
      </form>
    </div>
  );
};

export default AjouterClient;
