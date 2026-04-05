import { useState, useEffect } from 'react'

const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1VQxO28sVv7OTymNitQ6pPnTPv6hAbFm8HekBZudDYBo/export?format=csv"

export default function CTA() {
  const [reservedDates, setReservedDates] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewDate, setViewDate] = useState(new Date())

  useEffect(() => {
    fetch(GOOGLE_SHEET_URL)
      .then(res => res.text())
      .then(csv => {
        const lines = csv.trim().split('\n')
        const dates = []
        for (let i = 1; i < lines.length; i++) {
          const [dateStr] = lines[i].split(',')
          if (dateStr) {
            const parts = dateStr.trim().split('/')
            if (parts.length === 3) {
              const day = parseInt(parts[0])
              const month = parseInt(parts[1]) - 1
              const year = parseInt(parts[2])
              const date = new Date(year, month, day)
              dates.push({ month: date.getMonth(), day: date.getDate(), year: date.getFullYear() })
            }
          }
        }
        setReservedDates(dates)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const currentMonth = viewDate.getMonth()
  const currentYear = viewDate.getFullYear()
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const goToPrevMonth = () => {
    setViewDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const goToNextMonth = () => {
    setViewDate(new Date(currentYear, currentMonth + 1, 1))
  }

  const renderCalendar = () => {
    if (loading) {
      return <div className="text-white/80 text-xs md:text-sm">Loading availability...</div>
    }
    
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-7 h-7 md:w-8 md:h-8"></div>)
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isReserved = reservedDates.some(d => d.month === currentMonth && d.day === day && d.year === currentYear)
      days.push(
        <div 
          key={day}
          className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-[10px] md:text-[10px] font-medium ${
            isReserved 
              ? 'bg-[#71b5d8] text-white' 
              : 'bg-[#126685] text-white hover:bg-[#0d5570]'
          }`}
        >
          {day}
        </div>
      )
    }
    return days
  }

  return (
    <section id="booking" className="relative py-8 md:py-12 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Aerial cinematic shot of the villa complex at night with soft warm architectural lighting against the deep blue night sea" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARBvcFT6W7frioIpp7xY9ee6WMBcxhI9D0ZqCte-veZHpmNwyvUBtQoegGegzsosbaVd9JSr-_Bnfv4ZsFaJf7G7pNOecLYVadsr25q0jw5fE8F8oYkTcGcH9FZuYt5HOjCf-s2yx9mbO4OtSGC1zjPFchxi06Fey140NnjgOY8qkiDdbyRHnmCGAm5YYDpafB10im8ghktwOv8lbf9c5M54o3njogGwa8eIWygEEkJCTU37TSqlDI3FkwhkhWMV1zEt6vsTrXOZ4" 
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-white/20 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/10 shadow-2xl">
          <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl text-white mb-3 md:mb-6">Ready for your escape?</h2>
          <p className="text-white/90 text-xs md:text-sm mb-2 md:mb-3 max-w-xl mx-auto">
            <button onClick={goToPrevMonth} className="text-white hover:text-white/70 mr-2">◀</button>
            {monthNames[currentMonth]} {currentYear}
            <button onClick={goToNextMonth} className="text-white hover:text-white/70 ml-2">▶</button>
          </p>
          
          <div className="flex justify-center gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#126685]"></div>
              <span className="text-white text-[10px] md:text-xs">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#71b5d8]"></div>
              <span className="text-white text-[10px] md:text-xs">Reserved</span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-0.5 max-w-[260px] md:max-w-xs mx-auto mb-3 md:mb-4">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="w-8 h-6 md:w-8 md:h-6 flex items-center justify-center text-white/70 text-[9px] md:text-[10px] font-medium">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>

          <p className="text-white/80 text-[9px] md:text-[10px] mb-2 md:mb-3">Tap an available date to book via WhatsApp</p>
        </div>
      </div>
    </section>
  )
}