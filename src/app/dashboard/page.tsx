"use client";
import React from 'react'
import RdvCalendar from '../components/calendar'
import Card from '../components/card'
import UserStatsCard from '../components/userStatsCar';
import WebsiteTrafficChart from '../components/websiteTraficChart';

function Dashboard() {
  return (
    <>
      <div className="flex flex-col lg:flex-row pl-2 lg:pl-8 pr-2 lg:pr-8 pt-4 pb-4 gap-4 lg:gap-8">
        <div className="w-full lg:flex-1">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-6">
            Bienvenue sur votre tableau de bord. Vous pouvez gérer vos réservations et consulter les statistiques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in duration-1000">
            <Card children={"1000 Reservations"} />
            <Card children={"2000 Visiteurs"} />
            <Card children={"3000 Pages Vues"} />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Statistiques</h2>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
                <UserStatsCard/>
                <WebsiteTrafficChart />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col right-0 gap-8 animate-fade-in duration-1000 mt-8 lg:mt-0">
          <div className="flex justify-center pt-8 lg:pt-0">
            <RdvCalendar />
          </div>
          <div className="bg-white px-4 rounded-md ">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold mb-4">Derniers Reservations</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                <h2 className="text-lg font-medium">Reservation 1</h2>
                <p className="text-gray-600">Description of Reservation 1.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                <h2 className="text-lg font-medium">Reservation 2</h2>
                <p className="text-gray-600">Description of Reservation 2.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-md shadow-sm">
                <h2 className="text-lg font-medium">Reservation 3</h2>
                <p className="text-gray-600">Description of Reservation 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard