import React from "react";
import buttonPdf from "../assets/button-pdf.png";
import educators from "../assets/education.png";
import syllabus from "../assets/syllbaus.png";
import test from "../assets/test.png";
import Mocktest from "../assets/mock-test.png";
import testSeries from "../assets/test-series.png";
import pdf from "../assets/pdf.png";
import syllabusCourse from "../assets/syllabusCourse.png";
import planner from "../assets/planner.png";
const Dashboard = () => {
  return (
    <div>
      <div className="text-center text-red-500 bg-red-100 rounded-lg w-1/2 flex justify-center mx-auto font-semibold">
        <span>Coupon Code: IFAS30 (30% Discount. Last few Seats)</span>
      </div>

      <div className=" flex justify-around items-center shadow-lg p-8 ">
        {/*left section*/}
        <section className=" bg-white shadow-xl rounded-lg p-6 mt-10 ">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-[280px] py-1 rounded-lg">
            <img src={buttonPdf} alt="PDF" className="h-6 w-6" />
          </button>

          <div className="flex flex-col justify-center gap-10 text-center mt-4">

            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <img
                  src={educators}
                  alt="Top educators"
                  className="h-10 w-10 mb-2"
                />
                <p className="text-sm  ">
                  India's top <br /> educators
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={syllabus}
                  alt="Syllabus coverage"
                  className="h-10 w-10 mb-2"
                />
                <p className="text-sm">
                  Entire syllabus
                  <br /> (Part A,B,C) <br /> coverage
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src={test} alt="Unit tests" className="h-10 w-10 mb-2" />
                <p className="text-sm">
                  Topic wise unit
                  <br /> tests
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={Mocktest}
                  alt="Mock Tests"
                  className="h-10 w-10 mb-2"
                />
                <p className="text-sm">Mock Tests</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <img
                  src={testSeries}
                  alt="Test series analysis"
                  className="h-10 w-10 mb-2"
                />
                <p className="text-sm">
                  Test series with <br /> detailed analysis <br /> and AIR
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={pdf}
                  alt="Teacher handouts"
                  className="h-10 w-10 mb-2"
                />
                <p className="text-sm">
                  All Test Teacher <br /> handouts
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={syllabusCourse}
                  alt="Designed course"
                  className="h-10 w-10 mb-2"
                />
                <p className="text-sm">
                  Syllabus based <br />
                  designed course
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={planner}
                  alt="Study planner"
                  className="h-10 w-10 mb-2"
                />
                <p className="text-sm">Study planner</p>
              </div>
            </div>

          </div>
        </section>

        {/*right section*/}
        <section className=" bg-white shadow-lg rounded-lg p-4  mt-10">
          <div class=" p-4  rounded-lg mb-6 flex flex-col gap-4">
            <div class="relative flex items-center justify-between py-2 p-4  border-2 rounded-md border-blue-300">
              <div class="flex items-center">
                <input
                  type="radio"
                  id="12months"
                  name="plan"
                  className="mr-2"
                />
                <label for="12months" class="font-semibold">
                  12 Months
                </label>
                <span className="absolute  bg-green-400 text-white text-xs py-1 px-2 top-0 right-[79px] rounded-b-md ">
                  Recommended
                </span>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500">₹ 476/mo</p>
                <p class="text-xs text-gray-400">Total ₹ 5713</p>
              </div>
            </div>

            <div class="flex items-center justify-between py-2 border-2 rounded-md border-blue-300 p-4 ">
              <div class="flex items-center">
                <input type="radio" id="6months" name="plan" class="mr-2 " />
                <label for="6months" class="font-semibold">
                  6 Months
                </label>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500">₹ 716/mo</p>
                <p class="text-xs text-gray-400">Total ₹ 4300</p>
              </div>
            </div>

            <div class="flex items-center justify-between py-2 border-2 rounded-md border-blue-300 p-4">
              <div class="flex items-center">
                <input type="radio" id="3months" name="plan" class="mr-2" />
                <label for="3months" class="font-semibold">
                  3 Months
                </label>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500">₹ 952/mo</p>
                <p class="text-xs text-gray-400">Total ₹ 2856</p>
              </div>
            </div>
          </div>

          <div class="mb-6 flex justify-between items-center">
            <label for="coupon-code" class="text-sm font-medium">
              Have a Coupon Code?
            </label>
            <input
              type="text"
              id="coupon-code"
              placeholder="Enter Coupon Code"
              class="border border-gray-300 rounded-md p-2 w-1/2"
            />
          </div>

          <div class="flex justify-between items-center">
            <p class="text-lg font-semibold">Total Amount: ₹ 5713 (1 Item)</p>
            <button class="bg-blue-500 text-white px-6 py-2 rounded-full">
              Login
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
