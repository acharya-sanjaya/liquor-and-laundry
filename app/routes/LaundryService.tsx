export default function LaundryService() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 text-gray-800 dark:text-gray-200">
      <h2 className="mb-6 text-center text-4xl font-bold text-green-700 dark:text-green-500">
        Laundry Services
      </h2>
      <p className="mb-6 text-center text-lg">
        We deliver fast, eco-friendly, and top-quality laundry services for both Pokhara residents
        and travelers. From quick express washes to delicate dry cleaning, we make laundry
        convenient and stress-free.
      </p>

      {/* Express Services */}
      <div className="mb-8">
        <h3 className="mb-2 text-2xl font-semibold text-blue-700 dark:text-blue-400">
          Express Laundry Services
        </h3>
        <p className="mb-4">
          Need clean clothes in a hurry? Choose from our quick turnaround options:
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>3-Hour Express:</strong> Urgent laundry ready within 3 hours.
          </li>
          <li>
            <strong>6-Hour Express:</strong> Same-day service with a 6-hour turnaround.
          </li>
          <li>
            <strong>12-Hour Express:</strong> For same-day completion, ready by evening.
          </li>
          <li>
            <strong>24-Hour Standard:</strong> Affordable next-day service.
          </li>
        </ul>
      </div>

      {/* Standard Services */}
      <div className="mb-8">
        <h3 className="mb-2 text-2xl font-semibold text-blue-700 dark:text-blue-400">
          Standard Laundry Services
        </h3>
        <p>
          Includes wash, dry, and fold using premium, fabric-friendly detergents. Perfect for
          everyday clothes and linens.
        </p>
      </div>

      {/* Dry Cleaning */}
      <div className="mb-8">
        <h3 className="mb-2 text-2xl font-semibold text-blue-700 dark:text-blue-400">
          Dry Cleaning Services
        </h3>
        <p>
          Handled with expert care, ideal for formal wear, business attire, and delicate fabrics
          requiring special attention.
        </p>
      </div>

      {/* Eco Practices */}
      <div className="mb-8">
        <h3 className="mb-2 text-2xl font-semibold text-blue-700 dark:text-blue-400">
          Eco-Friendly Practices
        </h3>
        <p>
          We use sustainable detergents, water-saving systems, and energy-efficient machines—making
          your laundry cleaner and greener.
        </p>
      </div>

      {/* Extras */}
      <div className="mb-8">
        <h3 className="mb-2 text-2xl font-semibold text-blue-700 dark:text-blue-400">
          Additional Services
        </h3>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>Pickup & Delivery:</strong> Doorstep convenience anywhere in Pokhara.
          </li>
          <li>
            <strong>Ironing:</strong> Professionally pressed clothes, ready to wear.
          </li>
          <li>
            <strong>Folding & Packing:</strong> Traveler-friendly service for easy storage and
            packing.
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="mt-10 text-center text-lg">
        <p className="font-semibold">📞 Call us at: +977-97XXXXXXXX</p>
        <p>📍 Visit us: Lakeside, Street-17, Pokhara-6</p>
      </div>
    </section>
  );
}
