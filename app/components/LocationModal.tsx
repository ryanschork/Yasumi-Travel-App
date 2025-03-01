import Image from "next/image"
import { Plus } from "lucide-react"
import { Location } from "../page"
import { createPortal } from "react-dom"

interface LocationModalProps {
  location: Location
  onClose: () => void
  isOpen: boolean
}

export default function LocationModal({ location, onClose, isOpen }: LocationModalProps) {
  if (typeof window === "undefined") return null
  
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return createPortal(
    <>
      {/* Backdrop */}
      <div 
        className={`fixed w-[393px] h-[852px] left-1/2 -translate-x-1/2 bg-black/50 rounded-[55px] transition-opacity duration-300 ${isOpen ? 'opacity-100 z-[9999]' : 'opacity-0 -z-10'}`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className={`fixed inset-x-0 bottom-0 transition-all duration-300 ease-out ${isOpen ? 'z-[99999]' : '-z-10'}`}
        onClick={e => e.stopPropagation()}
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
        }}
      >
        <div className="w-full max-w-[393px] mx-auto bg-[#f1f0f2] rounded-t-[40px] overflow-hidden">
          {/* Header Image */}
          <div className="relative h-[243px] w-full">
            <Image
              src={location.image}
              alt={location.name}
              fill
              className="object-cover"
            />
            {/* Add to Route Button */}
            <button className="absolute right-6 top-6 bg-[#0084ff] w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-lg">
              <Plus className="text-white" size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="px-5 py-6 space-y-7">
            {/* Location Info */}
            <div className="space-y-3">
              <h2 className="text-base font-medium">{location.name}</h2>
              <div className="flex items-center text-xs">
                <span className="mr-1">⭐</span>
                <span className="font-medium">{location.rating}</span>
                <span className="mx-1">-</span>
                <span className="text-black/70">{location.category}</span>
              </div>
              <div className="text-xs text-black/70">{location.hours}</div>
            </div>

            {/* Friend's Notes */}
            <div className="space-y-5 pb-8">
              <h3 className="text-sm text-black/70">Friend's Note</h3>
              
              {/* Note Card 1 */}
              <div className="bg-white rounded-[9px] p-4 shadow-lg space-y-3">
                <p className="text-sm">
                  "Make sure to get here a bit earlier, it gets super crowded and is not really worth it to go after like 12pm."
                </p>
                <div className="flex justify-end items-center gap-2">
                  <div className="w-[30px] h-[30px] rounded-full overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&h=100"
                      alt="Shun's profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-black/70">Shun</span>
                </div>
              </div>

              {/* Note Card 2 */}
              <div className="bg-white rounded-[9px] p-4 shadow-lg space-y-3">
                <p className="text-sm">
                  "Most people online warn about getting there 'at 5am!'. That's not true, I got there at like 7:30am and was totally fine."
                </p>
                <div className="flex justify-end items-center gap-2">
                  <div className="w-[30px] h-[30px] rounded-full overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
                      alt="Gabby's profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-black/70">Gabby L.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  )
} 