import { useEffect, useState } from "react"

const lightSource =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.820625585369!2d83.95610667515139!3d28.212761875896618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959583aa46df65%3A0xed41b83da995c8b2!2sAshish%20cold%20store%20and%20laundry%20service!5e0!3m2!1sen!2snp!4v1769988663474!5m2!1sen!2snp"

const darkSource =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.1214031114305!2d83.95811618602133!3d28.213545245320432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959583aa46df65%3A0xed41b83da995c8b2!2sAshish%20cold%20store%20and%20laundry%20service%201%20hour%2C%203%20hour%2C1%20day%20(%20Laundry%20Service%20near%20me)Lakeside%20Street%2017)!5e1!3m2!1sen!2snp!4v1769990563291!5m2!1sen!2snp"

const LocationMap = () => {
  const [mapSource, setMapSource] = useState(lightSource)

  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    // set initial value
    setMapSource(mediaQuery.matches ? darkSource : lightSource)

    // listen for theme changes
    const handler = (e: MediaQueryListEvent) => {
      setMapSource(e.matches ? darkSource : lightSource)
    }

    mediaQuery.addEventListener("change", handler)

    return () => {
      mediaQuery.removeEventListener("change", handler)
    }
  }, [])

  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
        Our Location
      </h2>

      <iframe
        key={mapSource}
        src={mapSource}
        className="w-full h-[500px] rounded-xl shadow-[0_0_10px_1px] shadow-blue-300"
        loading="lazy"
        title="Location Map"
      />
    </div>
  )
}

export default LocationMap
