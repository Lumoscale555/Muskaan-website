const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-lg text-center border border-gray-200">

        <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-serif font-bold mb-4 text-gray-900">
          Thank You
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Your message has been received. Our team will reach out soon.
        </p>

        <a
          href="/"
          className="inline-block bg-primary text-white px-10 py-4 rounded-xl text-lg hover:bg-primary/90 transition"
        >
          Go Back Home
        </a>

      </div>

    </section>
  );
};

export default ThankYou;
