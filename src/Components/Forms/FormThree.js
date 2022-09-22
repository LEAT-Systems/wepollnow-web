import Nav from "../Layout/Landing/mainNav";

const FormThree = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center mx-auto py-4  px-4 md:px-0">
        <div class="w-full md:w-1/2 h-[500px] text-lg text-gray-700 border rounded-lg">
          <header className="w-full p-8 border-b">
            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-white text-black w-5 h-5">
                1
              </div>
              <hr className="border-dashed border-1 border-black w-12" />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-white text-black w-5 h-5">
                2
              </div>
              <hr className="border-dashed border-1 border-black w-12" />
              <div className="inline-flex items-center justify-center rounded-full p-4 bg-black text-white w-5 h-5">
                3
              </div>
            </div>
          </header>
          <section>
            <form>
              <div className="flex flex-col space-y-4 p-8">
                <div className="overflow-y-scroll space-y-4 h-64 scrollable px-4">
                  <div className="border border-gray-200 p-8 rounded-md space-y-4">
                    <label className="font-bold">
                      Which best describes your employment status?
                    </label>
                    <div class="flex flex-row items-center justify-between border p-4 rounded">
                      <label
                        for="push-everything"
                        class="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Student
                      </label>
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                    </div>
                    <div class="flex flex-row items-center justify-between border p-4 rounded">
                      <label
                        for="push-everything"
                        class="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Employed
                      </label>
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                    </div>
                    <div class="flex flex-row items-center justify-between border p-4 rounded">
                      <label
                        for="push-everything"
                        class="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Unemployed
                      </label>
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                    </div>
                    <div class="flex flex-row items-center justify-between border p-4 rounded">
                      <label
                        for="push-everything"
                        class="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Self-employed
                      </label>
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                      />
                    </div>
                  </div>

                  <div className="border border-gray-200 p-8 rounded-md space-y-4">
                    <label className="font-bold">Select your Gender</label>
                    <div className="flex flex-row items-start justify-between">
                      <select
                        id="country"
                        class="mt-1 block w-full border-b border-gray-300 bg-white py-2 px-3"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
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

export default FormThree;
