export default function Home() {
  return (
    <div>
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>Test</p>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 ">
          <div className="flex-center bg-indigo-500">A</div>
          <div className="flex-center bg-indigo-400">B</div>
          <div className="flex-center bg-indigo-300">C</div>
          <div className="flex-center bg-indigo-200">D</div>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-8  flex flex-col gap-4">
            {/* item */}
            <div className="flex gap-4 rounded-md">
              <div>
                <img
                  className="w-auto h-64"
                  src="https://placehold.co/600x400"
                  alt="test"
                />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Title</h2>
                <p className="flex-grow">desc</p>
                <button>Ler mais</button>
              </div>
            </div>
            {/* end-item */}

            {/* item */}
            <div className="flex gap-4 rounded-md">
              <div>
                <img
                  className="w-auto h-64"
                  src="https://placehold.co/600x400"
                  alt="test"
                />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Title</h2>
                <p className="flex-grow">desc</p>
                <button>Ler mais</button>
              </div>
            </div>
            {/* end-item */}

            {/* item */}
            <div className="flex gap-4 rounded-md">
              <div>
                <img
                  className="w-auto h-64"
                  src="https://placehold.co/600x400"
                  alt="test"
                />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Title</h2>
                <p className="flex-grow">desc</p>
                <button>Ler mais</button>
              </div>
            </div>
            {/* end-item */}

            {/* item */}
            <div className="flex gap-4 rounded-md">
              <div>
                <img
                  className="w-auto h-64"
                  src="https://placehold.co/600x400"
                  alt="test"
                />
              </div>

              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Title</h2>
                <p className="flex-grow">desc</p>
                <button>Ler mais</button>
              </div>
            </div>
            {/* end-item */}
          </div>

          <div className="col-span-4 bg-emerald-400">B</div>
        </div>
      </div>
    </div>
  );
}
