import { useContext } from 'react';
import { UserContext } from "../contexts/user";

export default function useUser() {
	const [ user, logoutUser ] = useContext(UserContext);

	return [ user, logoutUser ];
}