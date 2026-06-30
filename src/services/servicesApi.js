import useStore from "../store/userStore";

const BASE_URL = "http://localhost:3000/auth/user";
const PAYMENT_URL = "http://localhost:3000/api/payment";


const handleResponse = async (response) => {

  const data = await response.json();

  if (!response.ok) {
    const err = new Error(data.message || "Something went wrong");
    err.errors = data.errors ?? null;
    err.status = data.status ?? response.status;
    throw err;
  }

  return data;
};

export const signupApi = async ({ name, email, password }) => {

  const { setLoading, setError, setUserData } = useStore.getState();

  setLoading(true);
  setError(null);

  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });

    const data = await handleResponse(response);
    setUserData(data.user);
    return { success: true };

  } catch (error) {
    setError(error.message);
    return {
      success: false,
      message: error.message,
      errors: error.errors ?? null,
    };
  } finally {
    setLoading(false);
  }

}

export const loginApi = async ({ email, password }) => {

  const { setLoading, setError, setUserData } = useStore.getState();

  setLoading(true);
  setError(null);

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await handleResponse(response);
    setUserData(data.user);
    return { success: true };

  } catch (error) {
    setError(error.message);
    return {
      success: false,
      message: error.message,
      errors: error.errors ?? null,
    };
  } finally {
    setLoading(false);
  }

}

export const logoutApi = async () => {

  const { setLoading, setError } = useStore.getState();

  setLoading(true);
  setError(null);

  try {
    const response = await fetch(`${BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });

    await handleResponse(response);
    useStore.setState({ userData: null, isLoading: false, error: null });
    return { success: true };

  } catch (error) {
    setError(error.message);
    return { success: false, message: error.message };
  } finally {
    setLoading(false);
  }

}


export const createPaymentIntent = async ({ productName, amount }) => {

  try {
    const response = await fetch(`${PAYMENT_URL}/create-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ productName, amount }),
    });
    const data = await handleResponse(response);
    return { success: true, clientSecret: data.clientSecret };
  } catch (error) {
    return { success: false, message: error.message };
  }

}


export const getUserPayments = async () => {

  try {
    const response = await fetch(`${PAYMENT_URL}/history`, {
      credentials: "include",
    });
    const data = await handleResponse(response);
    return data.payments ?? [];
  } catch {
    return [];
  }

}