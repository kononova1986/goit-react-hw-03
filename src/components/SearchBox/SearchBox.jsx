export default function SearchBox({ value, onSerch }) { return (
<div>
  <p>Find contacts by name</p>
  <input type="text" value={value} onChange={e => onSerch(e.target.value)}
  style={{
          width: '300px',
          borderRadius: '8px',
          border: '1px solid rgb(0, 40, 56)',
          padding: '5px',
  }}
  />
</div>
); }
