import { defaultDatta } from '../../utils/mockData'

export const Post = (
  { title = defaultDatta.title,
    data = defaultDatta.date,
    text = defaultDatta.text }
  ) => {
  return (
    <div style={{backgroundColor: 'teal', borderRadius: '20px', padding: '20px'}}>
      <span style={{fontSize: '26px', color: '#fff', textShadow: '1px 1px 2px'}}>{title}</span>
      <br />
      <span style={{fontSize: '12px', fontStyle: 'italic', color: 'plum'}}>{data}</span>
      <p>{text}</p>
    </div>
  );
}