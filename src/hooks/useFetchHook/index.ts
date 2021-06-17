import { useEffect, useState } from "react";


interface Props {
  url: string
  
}


export const useFetchHook = ({ url }: Props) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController()
    const signal = { signal: controller.signal}
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url, signal)
        const data = await response.json()
        setResult(data)
      } catch (error) {
        console.error("Error from fetch: ", error)
        setError(error.message)
      }
      setIsLoading(false)
    }

    getData();

    return () => controller.abort()
  }, [url])

  return [result, error, isLoading]
};
