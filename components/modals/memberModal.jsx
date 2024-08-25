import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MemberModal({ isOpen, setIsOpen, member }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full mt-24 !max-w-[80%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {member?.first}
                </Dialog.Title>
                <div className="mt-2 ">
                  <div className=" flex cursor-pointer gap-12 md:flex-ro flex-col ">
                    <div className="relative md:w-[70%]">
                      <img
                        src="/peoopleBg.png "
                        alt="Card people"
                        className=" 
 
  rounded-full w-[170px] h-[200px] "
                      />

                      <img
                        className="absolute w-[170px] h-[170px]  top-[1rem] left-4"
                        src={member?.image}
                        alt=""
                      />
                    </div>

                    {/* ----Desc-- */}

<div className="">

<div>
    <p className=" font-thin text-[32px]">  <span className=" font-bold">{member?.first} </span>  {member?.last}</p>
</div>
                    <div className="w-[90%]">





                      With a deep belief in the power of talent and the
                      importance of fostering a supportive environment, Roger
                      Kanakri founded Unlmtd.Known for his approachable
                      leadership style, which emphasizes collaboration and
                      innovation, Roger brings over 25 years of experience from
                      leading multinational ad agencies such as Saatchi &
                      Saatchi, BBDO, and Grey. In 2010, Roger transitioned from
                      the corporate, finance-driven advertising world to
                      co-found Livingroom Communication. Under his leadership,
                      Livingroom Communication grew to become one of the leading
                      independent agency in the region, known for its innovative
                      approaches and commitment to nurturing talent. During his
                      tenure at these renowned firms, he managed and led
                      campaigns for top global brands like P&G, Warner Brothers
                      World Abu Dhabi, Hershey’s, Lacnor, Oasis, Red Bull,
                      Nestle, Pepsi, Saudi American Bank, Commercial Bank of
                      Dubai, Mashreq Bank, JTI, MAF and many more.   Roger's
                      vision for Unlmtd is to create a collective consultancy
                      and management network that transforms the consultancy
                      landscape. By uniting independent marketing communication
                      companies with industry experts and strategists, Unlmtd
                      delivers comprehensive services characterized by agility
                      and personal engagement. Roger’s management skills and
                      dedication to nurturing talent ensure that every project
                      benefits from a wealth of experience and creative insight.
                      A tech enthusiast with an entrepreneurial spirit, Roger
                      values happiness, creativity, and authenticity over
                      conventional norms, politics, and mediocrity. He balances
                      his professional life with a deep commitment to his family
                      and a passion for cooking, which he considers the ultimate
                      expression of love.
                    </div>

                    </div>

                  </div>
                </div>

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
