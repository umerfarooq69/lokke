import Image from 'next/image';

const ChatTile = ({ item }) =>
  <div className="relative pl-[62px] pr-[85px] w-full">

    <span className="absolute left-0 top-[2px]">
      <span className="relative inline-block w-[40px] h-[40px]">
        <Image fill sizes="40px" src={item.icon} />
      </span>
    </span>

    <h4 className="relative text-text-primarys font-medium mb-[3.5px]">
      {item.name}
      {item.badge ? <span className="absolute right-0 top-0 text-[14px] bg-background-primary px-[6px] py-[0.5px] text-white rounded-[8px] ml-3 leading-0">{item.badge}</span> : undefined}
    </h4>

    <span className="absolute right-0 top-0 text-[14px] text-text-secondary rounded-[8px] leading-0">{item.date}</span>

    {
      item.bars ?
        <button className="absolute right-0 bottom-[-5px] leading-0" type="button">
          <span className="relative inline-block w-[20px] h-[20px]">
            <Image fill sizes="20px" src={item.bars} />
          </span>
        </button>
        : undefined
    }

    <p className="text-text-secondary truncate w-full">
      {item.text}
    </p>
  </div>;

export default ChatTile;
