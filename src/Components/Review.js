export default function Review({ headline, star_rating, body, author }) {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg">
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{headline}</div>
        <div class="flex my-2">
          {[...Array(star_rating)].map(() => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          - {author}
        </span>
      </div>
    </div>
  );
}
