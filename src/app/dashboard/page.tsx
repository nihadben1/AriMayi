import React from 'react'
import RdvCalendar from '../components/calendar'
import Card from '../components/card'

function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-600 mb-6">
            Bienvenue sur votre tableau de bord. Vous pouvez gérer vos réservations et consulter les statistiques.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card children={"1000 Reservations"} />
            <Card children={"2000 Visiteurs"} />
            <Card children={"3000 Pages Vues"} />
          </div>
          <div>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col right-0 gap-8">
          <div className="flex justify-center pt-8">
            <RdvCalendar />
          </div>
          <div className="bg-white px-4 rounded-md">
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