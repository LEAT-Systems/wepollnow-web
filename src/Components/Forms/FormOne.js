import Nav from "../Layout/Landing/mainNav";

const FormOne = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center mx-auto py-4  px-4 md:px-0">
        <div class="w-full md:w-1/2 h-[500px] text-lg text-gray-700 border rounded-lg">
          <header className="w-full p-8 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-black text-white w-5 h-5">
                1
              </div>
              <hr className="border-dashed border-1 border-black w-12" />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-100 text-black w-5 h-5">
                2
              </div>
              <hr className="border-dashed border-1 border-black w-12" />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-gray-100 text-black w-5 h-5">
                3
              </div>
            </div>
          </header>
          <body>
            <form>
              <div className="flex flex-col space-y-4 p-8">
                <div className="overflow-y-scroll space-y-4 h-64 scrollable px-4">
                  <div className="border border-gray-200 p-8 rounded-md space-y-4">
                    <label className="font-bold">Input your phone number</label>
                    <input
                      class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border-b focus:shadow-outline"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="border border-gray-200 p-8 rounded-md space-y-4">
                    <label className="font-bold">Input your Email</label>
                    <input
                      class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border-b focus:shadow-outline"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="border border-gray-200 p-8 rounded-md space-y-4">
                    <label className="font-bold">
                      Are you a first time voter?
                    </label>
                    <div className="flex flex-row items-start justify-between">
                      <select
                        id="country"
                        class="mt-1 block w-full border-b border-gray-300 bg-white py-2 px-3"
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </body>
          <footer className="w-full p-4 border-t">
            <button className="p-2 px-4 bg-black text-white rounded-md ml-6">
              Next
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FormOne;
