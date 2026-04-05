export const whatsappNumber = "703170448"

export const getWhatsAppUrl = (message) => {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const messages = {
  booking: "Hi! I'd like to book a stay at Farona Beach Villa. What availability do you have?",
  exploreVillas: "Hi! I'm interested in exploring the villas at Farona Beach Villa. Could you please provide more information?",
  contact: "Hi! I'm interested in Farona Beach Villa. Could you please provide more information?",
  seaViewSuite: "Hi! I'm interested in booking the Villa with Sea View at Farona Beach Villa. Could you please provide more information?",
  gardenView: "Hi! I'm interested in booking the Villa with Garden View at Farona Beach Villa. Could you please provide more information?",
  roomDetails: "Hi! I'm interested in booking at Farona Beach Villa. Could you please provide more details?",
}
