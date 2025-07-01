import { useState, useMemo, useEffect } from 'react';
import { Search, Calendar, MapPin, Users, Clock, ChevronDown } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import PrimaryButton from '../../Components/Shared/Primary-button/PrimaryButton';

const Event = () => {
  const [eventsData, setEventsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample data from your JSON
  useEffect(() =>{
    axios.get("http://localhost:3000/events")
    .then(res =>{
        setEventsData(res.data);
        console.log(res.data);
    })
    .catch(err =>{
        toast.error(err.message);
    })
  }, []);

  const filterOptions = [
    { value: 'all', label: 'All Events' },
    { value: 'today', label: 'Today' },
    { value: 'current_week', label: 'Current Week' },
    { value: 'last_week', label: 'Last Week' },
    { value: 'current_month', label: 'Current Month' },
    { value: 'last_month', label: 'Last Month' }
  ];

  // Helper functions for date filtering
  const getDateRanges = () => {
    const today = new Date();
    const currentWeekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const currentWeekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    
    const lastWeekStart = new Date(currentWeekStart);
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);
    const lastWeekEnd = new Date(currentWeekEnd);
    lastWeekEnd.setDate(lastWeekEnd.getDate() - 7);
    
    const currentMonthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const currentMonthEnd = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
    
    const lastMonthStart = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
    const lastMonthEnd = new Date(new Date().getFullYear(), new Date().getMonth(), 0);

    return {
      today: new Date().toISOString().split('T')[0],
      currentWeek: { start: currentWeekStart.toISOString().split('T')[0], end: currentWeekEnd.toISOString().split('T')[0] },
      lastWeek: { start: lastWeekStart.toISOString().split('T')[0], end: lastWeekEnd.toISOString().split('T')[0] },
      currentMonth: { start: currentMonthStart.toISOString().split('T')[0], end: currentMonthEnd.toISOString().split('T')[0] },
      lastMonth: { start: lastMonthStart.toISOString().split('T')[0], end: lastMonthEnd.toISOString().split('T')[0] }
    };
  };

  const isDateInRange = (eventDate, filter) => {
    const ranges = getDateRanges();
    const date = eventDate;

    switch (filter) {
      case 'today':
        return date === ranges.today;
      case 'current_week':
        return date >= ranges.currentWeek.start && date <= ranges.currentWeek.end;
      case 'last_week':
        return date >= ranges.lastWeek.start && date <= ranges.lastWeek.end;
      case 'current_month':
        return date >= ranges.currentMonth.start && date <= ranges.currentMonth.end;
      case 'last_month':
        return date >= ranges.lastMonth.start && date <= ranges.lastMonth.end;
      default:
        return true;
    }
  };

  const filteredEvents = useMemo(() => {
    return eventsData.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = selectedFilter === 'all' || isDateInRange(event.date, selectedFilter);
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, eventsData, selectedFilter]);
  console.log(filteredEvents);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric' 
//     });
//   };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-white/90 text-sm font-medium tracking-wide uppercase mb-2">
              Find Best Event on Harmoni
            </p>
            <h1 className="text-white text-4xl font-bold mb-8">Event Search</h1>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Event name, location, etc"
                className="w-full pl-12 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-300 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-white px-6 py-3 rounded-lg flex items-center gap-2 min-w-[200px] justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700">
                  {filterOptions.find(option => option.value === selectedFilter)?.label}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isFilterOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border z-10">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSelectedFilter(option.value);
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              SEARCH EVENT NOW
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Results Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" />
              Add to Calendar
            </button>
            <p className="text-gray-600">
              {filteredEvents.length} Search results from {eventsData.length} events
            </p>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div key={event._id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Date Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-2 rounded-lg text-center min-w-[60px] z-10">
                    <div className="text-xs font-medium">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                    </div>
                    <div className="text-lg font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-48 h-full object-cover rounded-l-xl"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/200x200?text=Event+Image';
                    }}
                  />
                </div>

                {/* Event Details */}
                <div className="flex-1 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-orange-500 font-medium text-sm">
                      Organized by {event.name}
                    </p>
                    <p className='text-sm mb-4 text-orange-500'>Posted by: {event.createdBy}</p>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Meta Info */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{formatTime(event.time)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    <p><span className='bg-orange-500 px-2 text-white rounded'>{event.attendeeCount}</span> attending</p>
                    <PrimaryButton variant='secondary' size='sm'>Join event</PrimaryButton>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find more events.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;