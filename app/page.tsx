"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  ArrowUpRight, 
  Check, 
  Edit2, 
  Home, 
  Search, 
  MapPin, 
  Users, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Signal,
  Wifi,
  Battery
} from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

// Define the Location type
type Location = {
  id: number
  name: string
  image: string
  rating: number
  category: string
  hours: string
}

// Location card data
const locations: Location[] = [
  {
    id: 1,
    name: "Tokyo Sky Tree",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=500&h=500",
    rating: 4.5,
    category: "Sightseeing",
    hours: "10am - 10pm",
  },
  {
    id: 2,
    name: "Tsukiji Fish Mar...",
    image: "https://images.unsplash.com/photo-1595009552535-be753447727e?auto=format&fit=crop&w=500&h=500",
    rating: 4.4,
    category: "Food",
    hours: "6am - 2pm",
  },
  {
    id: 3,
    name: "Japan Blue Jea...",
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=500&h=500",
    rating: 5,
    category: "Clothes",
    hours: "11am - 7pm",
  },
  {
    id: 4,
    name: "Sensoji Temple",
    image: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?auto=format&fit=crop&w=500&h=500",
    rating: 4.8,
    category: "Temple",
    hours: "6am - 5pm",
  },
  {
    id: 5,
    name: "Shibuya Crossing",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=500&h=500",
    rating: 4.7,
    category: "Landmark",
    hours: "24/7",
  },
  {
    id: 6,
    name: "Ghibli Museum",
    image: "https://images.unsplash.com/photo-1565402170291-8491f14678db?auto=format&fit=crop&w=500&h=500",
    rating: 4.9,
    category: "Museum",
    hours: "10am - 6pm",
  },
]

// LocationCard component for better organization
function LocationCard({ location }: { location: Location }) {
  return (
    <div className="w-[115px] bg-white rounded-2xl overflow-hidden flex-shrink-0">
      <div className="relative w-[115px] h-[115px]">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={location.name}
          fill
          className="object-cover"
          sizes="115px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHy8lJicrLzE2Li4uLi4xPDc4ODg3MS45OjU8PUJBQlN6Xl19g4OGi5Oe2dr/2wBDARUXFx4aHjshITs7e1t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm truncate">{location.name}</h3>
        <div className="flex items-center text-xs mt-1">
          <span className="mr-1">⭐</span>
          <span className="font-medium">{location.rating}</span>
          <span className="mx-1">-</span>
          <span className="text-[#000000]/70 truncate">{location.category}</span>
        </div>
        <div className="text-xs text-[#000000]/70 mt-1">{location.hours}</div>
      </div>
    </div>
  )
}

function LocationsCarousel({ locations }: { locations: Location[] }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-[24px] px-[0.5px]">
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  )
}

export default function JapanTravelApp() {
  const [completedTasks, setCompletedTasks] = useState({
    donuts: false,
    clothes: false,
    ramen: false,
    manga: false,
  })

  const toggleTask = (task: keyof typeof completedTasks) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [task]: !prev[task],
    }))
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="flex flex-col h-[852px] w-[393px] bg-[#f1f0f2] relative overflow-hidden rounded-[55px] border-4 border-gray-900">
        {/* Status Bar */}
        <div className="relative z-10 h-11 px-5 flex items-center justify-between text-sm bg-[#f1f0f2]">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-2">
            <Signal size={16} />
            <Wifi size={16} />
            <Battery size={16} />
          </div>
        </div>

        {/* Main content - hide scrollbar but keep functionality */}
        <main className="flex-1 px-6 pt-4 pb-20 overflow-y-auto scrollbar-hide">
          {/* Welcome header */}
          <div className="mb-6">
            <h1 className="text-3xl font-medium text-black">Welcome to Japan,</h1>
            <h1 className="text-5xl font-bold text-[#0084ff]">Ryan</h1>
          </div>

          {/* What are we doing today */}
          <div className="flex items-center mb-4">
            <h2 className="text-2xl text-[#000000]/80 font-medium">What are we doing today?</h2>
            <ArrowUpRight className="ml-2 text-[#0084ff]" size={24} />
          </div>

          {/* Activities card */}
          <div className="bg-white rounded-3xl p-6 mb-8 relative">
            <div className="space-y-6">
              {/* Get Donuts task */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6">
                  <button
                    onClick={() => toggleTask("donuts")}
                    className={`w-6 h-6 border-2 border-[#dddbdf] rounded-md flex items-center justify-center ${completedTasks.donuts ? "bg-[#0084ff] border-[#0084ff]" : ""}`}
                  >
                    {completedTasks.donuts && <Check size={16} className="text-white" />}
                  </button>
                </div>
                <span className={`text-lg ${completedTasks.donuts ? "line-through text-[#000000]/50" : ""}`}>
                  🍩 Get Donuts
                </span>
              </div>

              {/* Clothes shopping task */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6">
                  <button
                    onClick={() => toggleTask("clothes")}
                    className={`w-6 h-6 border-2 border-[#dddbdf] rounded-md flex items-center justify-center ${completedTasks.clothes ? "bg-[#0084ff] border-[#0084ff]" : ""}`}
                  >
                    {completedTasks.clothes && <Check size={16} className="text-white" />}
                  </button>
                </div>
                <span className={`text-lg ${completedTasks.clothes ? "line-through text-[#000000]/50" : ""}`}>
                  👕 Clothes shopping in Harajuku - 原宿
                </span>
              </div>

              {/* Ramen task */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6">
                  <button
                    onClick={() => toggleTask("ramen")}
                    className={`w-6 h-6 border-2 border-[#dddbdf] rounded-md flex items-center justify-center ${completedTasks.ramen ? "bg-[#0084ff] border-[#0084ff]" : ""}`}
                  >
                    {completedTasks.ramen && <Check size={16} className="text-white" />}
                  </button>
                </div>
                <span className={`text-lg ${completedTasks.ramen ? "line-through text-[#000000]/50" : ""}`}>
                  🍜 Ramen for lunch
                </span>
              </div>

              {/* Manga shopping task */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6">
                  <button
                    onClick={() => toggleTask("manga")}
                    className={`w-6 h-6 border-2 border-[#dddbdf] rounded-md flex items-center justify-center ${completedTasks.manga ? "bg-[#0084ff] border-[#0084ff]" : ""}`}
                  >
                    {completedTasks.manga && <Check size={16} className="text-white" />}
                  </button>
                </div>
                <span className={`text-lg ${completedTasks.manga ? "line-through text-[#000000]/50" : ""}`}>
                  📚 Manga shopping in Akihabara - 秋葉原
                </span>
              </div>
            </div>

            {/* Edit button */}
            <div className="absolute -bottom-4 -right-2">
              <button className="bg-[#0084ff] text-white p-4 rounded-full shadow-lg">
                <Edit2 size={24} />
              </button>
            </div>
          </div>

          {/* Saved locations */}
          <div className="mb-4">
            <h2 className="text-2xl text-[#000000]/80 font-medium mb-4">Saved locations</h2>
            <LocationsCarousel locations={locations} />
          </div>
        </main>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-0 right-0 h-1 flex justify-center z-20">
          <div className="w-[120px] h-1 bg-black rounded-full"></div>
        </div>

        {/* Bottom navigation - adjust the padding to account for home indicator */}
        <div className="absolute bottom-0 left-0 right-0 bg-white pt-3 pb-8 border-t border-[#dddbdf]">
          <div className="max-w-md mx-auto flex justify-around items-center px-6">
            <div className="flex flex-col items-center">
              <Home size={24} className="text-[#0084ff]" />
              <span className="text-xs text-[#0084ff] font-medium mt-1">Home</span>
            </div>

            <div className="flex flex-col items-center">
              <Search size={24} className="text-[#000000]/60" />
              <span className="text-xs text-[#000000]/60 font-medium mt-1">Search</span>
            </div>

            <div className="flex flex-col items-center -mt-8">
              <div className="bg-[#0084ff] p-4 rounded-full">
                <MapPin size={28} className="text-white" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Users size={24} className="text-[#000000]/60" />
              <span className="text-xs text-[#000000]/60 font-medium mt-1">Friends</span>
            </div>

            <div className="flex flex-col items-center">
              <User size={24} className="text-[#000000]/60" />
              <span className="text-xs text-[#000000]/60 font-medium mt-1">Me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

