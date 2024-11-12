import React from 'react';

const reviews = [
  {
    id: 1,
    user: 'Anmol',
    rating: 4,
    description: 'The food was amazing! Loved the flavors and the presentation.',
  },
  {
    id: 2,
    user: 'Ansh',
    rating: 5,
    description: 'Best meal I have had in a long time. Highly recommend!',
  },
  {
    id: 3,
    user: 'Gautam',
    rating: 3,
    description: 'It was good, but I expected more based on the reviews.',
  },
  {
    id: 4,
    user: 'Amit',
    rating: 4,
    description: 'It was good, but I expected more based on the reviews.',
  },
  {
    id: 5,
    user: 'Kanika',
    rating: 5,
    description: 'It was good, but I expected more based on the reviews.',
  },
  {
    id: 6,
    user: 'Neha',
    rating: 3,
    description: 'It was good, but I expected more based on the reviews.',
  },
  {
    id: 7,
    user: 'Nikita',
    rating: 3,
    description: 'It was good, but I expected more based on the reviews.',
  },

  {
    id: 8,
    user: 'Sommya',
    rating: 5,
    description: 'It was good, but I expected more based on the reviews.',
  },
];

const Review = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/backlogo1.png")',
        paddingTop: '4rem', // Adjust this value according to the height of your navbar
      }}
    >
      <div className="container mx-auto p-4 bg-opacity-80 min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Food Reviews</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col p-4 bg-white shadow-md rounded-lg w-full sm:w-80"
            >
              <h3 className="text-xl font-semibold mb-2">{review.user}</h3>
              <div className="flex items-center justify-center mb-2">
                {[...Array(review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.878 3.09L5.639 12.1 0 8.131l6.276-.916L10 1l3.724 6.215 6.276.916-5.639 4.969L15.878 18.09 10 15z" />
                  </svg>
                ))}
                {[...Array(5 - review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.878 3.09L5.639 12.1 0 8.131l6.276-.916L10 1l3.724 6.215 6.276.916-5.639 4.969L15.878 18.09 10 15z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{review.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
