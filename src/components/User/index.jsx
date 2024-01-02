import './style.css'

export const User = ({ user }) => {
  return (
    <section className="User">
      <h2 className="User__name">{`My name is ${user.name}`}</h2>
      {user?.age && (
        <>
          <span className="User__age">{`I am ${user.age}`}</span>
        <br />
        </>
      )}
      <span className="User__partner">
        {user.isMarried ? 
          `${user.partnerName} is my ${user.sex === 'f' ? 'husband' : 'wife'}` 
          : `I am not married`}
        </span>
    </section>
  );
}