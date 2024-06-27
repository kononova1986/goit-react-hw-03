import Contact from '../Contact/Contact';

export default function ContactList({ information, onDelete }) {
  return (
    <ul
      style={{
        marginTop: '15px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: '5px',
      }}
    >
      {information.map(info => (
        <li key={info.id}>
          <Contact info={info} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
