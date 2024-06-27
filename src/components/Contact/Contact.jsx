import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
export default function Contact({ info, onDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '300px',
        borderRadius: '8px',
        border: '1px solid rgb(0, 40, 56)',
        padding: '15px',
      }}
    >
      <ul>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <FaUser style={{ paddingRight: '5px' }} />
          {info.name}
        </li>
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <FaPhone style={{ paddingRight: '5px' }} />
          {info.number}
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          onDelete(info.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
