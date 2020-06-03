import { useEffect, useState } from 'react';

export default () => {
  const [results, setResults] = useState([]);

  const getEventsHandler = async () => {
    try {
        const response = await fetch('http://history.muffinlabs.com/date');

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const resData = await response.json();
        setResults(resData.data.Births);
    } catch (err) {
        throw err;
    }

    }
  useEffect(() => {
    getEventsHandler();
  }, []);

  return [getEventsHandler, results];
};
