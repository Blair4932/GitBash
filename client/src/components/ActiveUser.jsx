const ActiveUser = ({ activeUser }) => {
	return <>{activeUser && <p>Currently logged in: {activeUser.name}</p>}</>;
};

export default ActiveUser;
