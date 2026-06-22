import useStore from "../store/userStore";

export default async function storeUserData() {

  const { setLoading, setError, setUserData } = useStore.getState();

  setLoading(true);
  setError(null);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();

    setUserData(data);
  } catch (error) {
    setError(error.message);
    useAppStore.setState({ isLoading: false });
  }
}