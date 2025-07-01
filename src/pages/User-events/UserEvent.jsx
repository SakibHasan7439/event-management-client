import axios from 'axios';
import { Calendar, Clock, Edit, MapPin, Trash2, Users } from 'lucide-react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const UserEvent = ({event, setMyEvents, setEvent}) => {
      // delete an event
      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`https://event-management-server-nine.vercel.app/userEvent/${id}?email=${user?.email}`)
              .then(() => {
                setMyEvents((prev) => prev.filter((event) => event._id !== id));
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              })
              .catch((err) => {
                toast.error(err.message);
              });
          }
        });
      };
    
      const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      };
    
      const formatTime = (timeString) => {
        const [hours, minutes] = timeString.split(":");
        const date = new Date();
        date.setHours(parseInt(hours), parseInt(minutes));
        return date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      };
    return (
        <div>
            <div
              key={event._id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
            >
              {/* Event Image */}
              <div className="relative">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200?text=Event+Image";
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">{event.attendeeCount}</span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                {/* Title and Organizer */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-orange-500 font-medium">
                    by {event.name}
                  </p>
                </div>

                {/* Date, Time, Location */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{formatTime(event.time)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {event.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() =>{
                        document.getElementById("my_modal_5").showModal(),
                        setEvent(event)
                    }}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default UserEvent;