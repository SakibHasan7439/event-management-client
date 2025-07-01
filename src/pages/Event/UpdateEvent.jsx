import { Calendar, Image, MapPin, Plus, Users } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const UpdateEvent = ({ event }) => {
  const {user} = useContext(AuthContext);

  const {
    title,
    name,
    location,
    date,
    time,
    description,
    attendeeCount,
    imageUrl,
    _id
  } = event;

  console.log("id is: ", _id);

  const handleEventUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      let updatedImageUrl = imageUrl; // Keep existing image by default
      
      // Handle image upload if a new image is selected
      const imageFile = form.image.files[0];
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        
        const { data } = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
          formData
        );
        updatedImageUrl = data.data.display_url;
      }

      const eventInfo = {
        title: form.title.value,
        name: form.name.value,
        location: form.location.value,
        date: form.date.value,
        time: form.time.value,
        description: form.description.value,
        attendeeCount: parseInt(form.attendeeCount.value) || 0,
        imageUrl: updatedImageUrl,
      };

      const eventResponse = await axios.patch(`https://event-management-server-nine.vercel.app/userEvent/${_id}?email=${user.email}`, eventInfo);
      
      if (eventResponse.data.success) {
        document.getElementById("my_modal_5").close();
        Swal.fire({
          title: "Successful",
          text: "Event Updated Successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error updating event:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update event",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[#ff6900] px-8 py-6">
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                  <Plus className="w-8 h-8" />
                  Update Event
                </h1>
              </div>

              <form onSubmit={handleEventUpdate} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={title}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter event title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Organizer Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Users className="inline w-4 h-4 mr-1" />
                      Attendee Count
                    </label>
                    <input
                      type="number"
                      name="attendeeCount"
                      defaultValue={attendeeCount}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="0"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      defaultValue={date}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      defaultValue={time}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="inline w-4 h-4 mr-1" />
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      defaultValue={location}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="Event location"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      defaultValue={description}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Describe your event..."
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Image className="inline w-4 h-4 mr-1" />
                      Event Image
                    </label>
                    <div className="mt-2">
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt="Current event image"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Image className="w-8 h-8 mb-2 text-gray-400" />
                            <p className="text-sm text-gray-500">
                              Click to upload new image
                            </p>
                          </div>
                        )}
                      </label>
                      {imageUrl && (
                        <p className="text-xs text-gray-500 mt-2">
                          Leave empty to keep current image, or select a new one to replace it
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r cursor-pointer from-orange-400 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-orange-500 hover:to-orange-600 focus:ring-4 focus:ring-indigo-200 transition-all duration-200"
                  >
                    Update Event
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateEvent;