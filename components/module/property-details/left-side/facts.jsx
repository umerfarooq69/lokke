const Tile = ({ label, value }) =>
  <div className="flex justify-between">
    <p className="text-[14px] text-text-secondary">{label}</p>
    <p className="text-[14px] text-text-primary">{value}</p>
  </div>;

const Facts = () =>
  <div className="border border-border-primary bg-white rounded-[16px] p-6">
    <div className="border-b border-border-primary pb-6 grid gap-4">
      <h4 className="text-text-primary font-medium">{'Listing'}</h4>
      <Tile label="Status" value="Active" />
      <Tile label="Listed" value="2 days ago" />
      <Tile label="Property type" value="Home" />
    </div>

    <div className="border-b border-border-primary pb-6 pt-6 grid gap-4">
      <h4 className="text-text-primary font-medium">{'Property'}</h4>
      <Tile label="Year built" value="1948" />
      <Tile label="Style" value="--" />
      <Tile label="Community" value="Meadowbrook" />
      <Tile label="Lot size" value="7,740 sq ft" />
      <Tile label="MLS#" value="2179825" />
    </div>

    <div className="grid gap-4 pt-6">
      <h4 className="text-text-primary font-medium">{'Property'}</h4>
      <Tile label="Year built" value="1948" />
      <Tile label="Style" value="--" />
      <Tile label="Community" value="Meadowbrook" />
      <Tile label="Lot size" value="7,740 sq ft" />
      <Tile label="MLS#" value="2179825" />
    </div>
  </div>;

export default Facts;
