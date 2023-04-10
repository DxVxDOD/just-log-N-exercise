import {useState} from 'react';

export default function useLocalStorage<T>(key: string, initialValue: string) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState<T>(() => {
	  if (typeof window === 'undefined') {
			return initialValue;
	  }

	  try {
		// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return item ? JSON.parse(item) : initialValue;
	  } catch (err) {
		// If error also return initialValue
			// We have to verify err is an
			// error before using it as one.
			if (err instanceof Error) {
				console.log(err.message);
			}

			return initialValue;
	  }
	});
	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: T | ((val: T) => T)) => {
	  try {
		// Allow value to be a function so we have same API as useState
			const valueToStore =
		  value instanceof Function ? value(storedValue) : value;
			// Save state
			setStoredValue(valueToStore);
			// Save to local storage
			if (typeof window !== 'undefined') {
		  window.localStorage.setItem(key, JSON.stringify(valueToStore));
			}
	  } catch (err) {
		// A more advanced implementation would handle the error case
			// We have to verify err is an
			// error before using it as one.
			if (err instanceof Error) {
				console.log(err.message);
			}
	  }
	};

	return [storedValue, setValue] as const;
}