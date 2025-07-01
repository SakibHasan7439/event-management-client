import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Edit, Trash2, MapPin, Users, Clock, Calendar } from "lucide-react";
import Swal from "sweetalert2";
import UpdateEvent from "../Event/UpdateEvent";
import UserEvent from "./UserEvent";
import { AuthContext } from "../../Auth/AuthProvider";

const UserEvents = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [myEvents, setMyEvents] = useState([]);
  const [event, setEvent] = useState({});

  useEffect(() => {
    if (!user?.email) return;
    axios
      .get(`http://localhost:3000/usersEvent?email=${user?.email}`)
      .then((res) => {
        setMyEvents(res.data);
      })
      .catch((err) => {
        toast.error("error: ", err.message);
      });
  }, [user?.email]);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Events</h1>
          <p className="text-gray-600">Manage your created events</p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {myEvents.map((event) => (
                <UserEvent 
                    key={event?._id}
                    event={event} 
                    setMyEvents={setMyEvents}
                    setEvent={setEvent}
                />
          ))}
            <UpdateEvent event={event} />
        </div>

        {/* Empty State */}
        {myEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No events found
            </h3>
            <p className="text-gray-600">You haven't created any events yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserEvents;
