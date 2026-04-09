export default function Category({ name, productCount, checked }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <input type="checkbox" defaultChecked={checked} />
          <div className="ml-2">{name}</div>
        </div>
        <div>({productCount})</div>
      </div>
    </div>
  );
}