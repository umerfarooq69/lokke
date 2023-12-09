import Image from 'next/image';

const NotificationTile = ({ item }) =>
  <div className=" hover:bg-background-tertiary p-4 rounded-[8px] mr-2  cursor-pointer">
    <div className="relative pl-[62px]">

      <span className="absolute left-0 top-0">
        <span className="relative inline-block w-[46px] h-[46px]">
          <Image fill sizes="46px" src={item.icon} />
        </span>
      </span>

      <h4 className="text-text-primarys font-medium mb-[3.5px]">{item.label}</h4>

      {item.badge ? <span className="absolute right-0 top-0 text-[14px] bg-background-primary px-[6px] py-[0.5px] text-white rounded-[8px] ml-3 leading-0">{item.badge}</span> : undefined}

      {
        item.bars ?
          <button className="absolute right-0 bottom-[-5px] leading-0" type="button">
            <span className="relative inline-block w-[20px] h-[20px]">
              <Image fill sizes="20px" src={item.bars} />
            </span>
          </button>
          : undefined
      }

      <p className="text-text-secondary">
        {item.date}
      </p>
    </div>
  </div>;

export default NotificationTile;
