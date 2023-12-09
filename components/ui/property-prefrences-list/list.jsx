import Checkbox from "../form-fields/check-box";

const List = () =>
  <div>
    <div className="w-full">
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
              {'120'}
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
              {'50'}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>;

export default List;
