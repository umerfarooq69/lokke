import Checkbox from "../form-fields/check-box";
import ToggleButton from "../toggle";

const List = () =>
  <div>
    <div className="w-full">
      <p className=" text-text-primary font-[500] mb-4">{'People'}</p>

      <div className="grid gap-1">
        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Realtor'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'150'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Realtor'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'10'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Realtor'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'40'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Realtor'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'150'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Realtor'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'130'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Realtor'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'10'}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-between mt-8">
      <p className=" text-text-secondary text-[12px] ml-2">{'Locke Instant Chat'}</p>
      <div><ToggleButton /></div>
    </div>

    <div className="w-full mt-8">
      <p className=" text-text-primary font-[500] mb-4">{'Language'}</p>

      <div className="grid gap-1">
        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Spanish'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'150'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Chines'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'10'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Hindi'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'40'}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Checkbox />
            <p className=" text-text-secondary text-[14px] ml-2">{'Veltnamens'}</p>
          </div>
          <div>
            <span className="block bg-background-tertiary text-[14px] p-[2px] text-text-secondary rounded-[55px]">
              {'150'}
            </span>
          </div>
        </div>


      </div>
    </div>
  </div>;

export default List;
