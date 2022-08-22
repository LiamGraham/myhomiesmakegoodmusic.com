export default function ProfileLinks(props) {
  const {links} = props;
  const listItems = links.map((link) => {
    return (
      <li key={link.name}>
        <a href={link.url}>
          {link.name}
        </a>
      </li>
    )
  });

  return (
    <ul className='profile-links'>
      {listItems}
    </ul>
  )
}
