import { useContext } from 'react';
import { UserContext } from "../contexts/user";

export default function useUser() {
	const [ user, setUser, logoutUser ] = useContext(UserContext);

	return [ user, setUser, logoutUser ];
}